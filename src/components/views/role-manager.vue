<style>
</style>
<template>
  <div id="role-manager">
    <!--顶部菜单栏-->
    <el-form :inline="true" ref="queryForm" class="demo-form-inline">
          <el-form-item>
            <el-input
              v-model="search"
              class="search_name"
              size="large"
              placeholder="输入角色名称查询">
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              @click="onSearch()"
              class="el-icon-search">查询
            </el-button>
          </el-form-item>
           <el-form-item>
            <el-button
              type="primary"
              @click="onRest()"
              class="el-icon-delete">重置
            </el-button>
          </el-form-item>
          <el-form-item>
            <el-button
              class="el-icon-refresh"
              type="primary"
              @click="toAdd()">添加
            </el-button>
          </el-form-item>
      </el-form>

        <el-row>
            <el-table :data="tableData" style="width: 100%;">
                        <el-table-column prop="name" label="角色名称" >
                        </el-table-column>
                        <el-table-column prop="desc" label="角色描述" >
                        </el-table-column>

                        <el-table-column label="操作">
                            <template slot-scope="scope">
                                <el-button type="primary" size="mini" @click="toEdit(scope)">编辑</el-button>
                                <el-button type="danger" size="mini" @click="deleteRole(scope)">删除</el-button>
                                <el-button type="primary" size="mini" @click="toAuthorize(scope)">授权</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                    <br>
                    <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="pagination.pageIndex"
                        :page-sizes="[5, 10, 20, 30, 40]"
                        :page-size=pagination.pageSize
                        layout="total, prev, pager, next"
                        :total=pagination.total>
                    </el-pagination>
        </el-row>

    <el-dialog title="添加角色" :visible.sync="dialogFormAdd">
      <el-form :model="role" label-width="100px">
        <el-form-item label="角色名称" >
          <el-input v-model="role.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="角色描述" >
          <el-input v-model="role.desc" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormAdd = false">取 消</el-button>
        <el-button type="primary" @click="add(role)">确 定</el-button>
      </div>
    </el-dialog>

    <el-dialog title="修改角色" :visible.sync="dialogFormEdit">
      <el-form :model="role">
        <el-form-item label="角色名称" >
          <el-input v-model="role.name" auto-complete="off"></el-input>
        </el-form-item>
         <el-form-item label="角色描述" >
          <el-input v-model="role.desc" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormEdit = false">取 消</el-button>
        <el-button type="primary" @click="edit()">确 定</el-button>
      </div>
    </el-dialog>


  </div>
</template>

<script>
export default{
    name: 'role-manager',
    data () {
     return {
        tableData: [],
        dialogFormEdit: false,
        dialogFormAdd:false,
        role: {
          id: '',
          name: '',
          desc: ''
        },
        pagination: {
            pageIndex: 1,
            pageSize: 10,
            total: 0,
        },
        search:''
      }
  },
  methods:{
       init () {
        var self = this
         this.$axios({
            method:'post',
            url:'/api/role/getPage',
            data:{"page":this.pagination.pageIndex,"limit":this.pagination.pageSize},
            headers:{
                'Content-Type':'application/json;charset=utf-8'      //改这里就好了
          }
        }).then(res => {
           console.log(res);
           self.pagination.total = res.data.datas.data.total;
           self.tableData = res.data.datas.data.records;
        })
          .catch(function (error) {
            console.log(error)
          })
        },
        handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
                this.pagination.pageSize = val;
                this.pagination.pageIndex = 1;
                this.init();
        },
        handleCurrentChange(val) {
                 console.log(`当前页: ${val}`);
                this.pagination.pageIndex = val;
                this.init();
        },
        // 点击检索
        onSearch() {
            var self = this
            this.$axios({
                method:'post',
                url:'/api/role/getPage',
                data:{"page":this.pagination.pageIndex,"limit":this.pagination.pageSize,"name":this.search},
                headers:{
                    'Content-Type':'application/json;charset=utf-8'      //改这里就好了
            }
            }).then(res => {
            console.log(res);
            console.log(res.data.datas.data.total);
            console.log(res.data.datas.data.records);
            self.pagination.total = res.data.datas.data.total;
            self.tableData = res.data.datas.data.records;
            })
            .catch(function (error) {
                console.log(error)
            })
        },
        // 点击重置
        onRest(){
            // 清空请求参数model
            this.$refs["queryForm" ].resetFields();
            // 重新调用init 方法
            this.init()
        },
        // 新增角色
        add(){
            this.$axios({
            method:'post',
            url:'/api/role/insert',
            data:{'name': this.role.name, 'desc':this.role.desc},
            headers:{
                'Content-Type':'application/json;charset=utf-8'      //改这里就好了
            }
        }).then(res => {
          this.$message.success('添加成功')
          this.dialogFormAdd = false
          this.init()
        })
          .catch(function (error) {
            console.log(error)
          })
        },
        // 点击添加
        toAdd(){
            this.dialogFormAdd = true
            //  请求参数model 清空
            this.role.name = ''
            this.role.desc = ''
        },
        // 角色删除
        deleteRole(scope){
            console.log(scope.row)
            if (!scope.row.id) {
                this.tableData.splice(scope.$index, 1)
            } else {
                this.$confirm('确认是否删除', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning',
                center: true
            }).then(() => {
                console.log(scope.row.id)

                this.$axios({
                method:'post',
                url:'/api/role/delete',
                data:{'id': scope.row.id},
                headers:{
                    'Content-Type':'application/json;charset=utf-8'      //改这里就好了
                }}).then(res => {
                this.$message.success('删除成功')
                this.init()
            }).catch(function (error) {
                console.log(error)
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                })
            })}).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                })
                })}
        },
        // 编辑角色(model 赋值)
        toEdit (scope) {
            console.log(scope.row)
            this.role.id = scope.row.id
            this.role.name = scope.row.name
            this.role.desc = scope.row.desc
            this.dialogFormEdit = true
        },
        // 编辑管理员
        edit(){
            this.$axios({
            method:'post',
            url:'/api/role/update',
            data:{'name': this.role.name, 'desc':this.role.desc, 'id':this.role.id},
            headers:{
                'Content-Type':'application/json;charset=utf-8'      //改这里就好了
          }
        }).then(res => {
          this.$message.success('更新成功')
          this.dialogFormEdit = false
          this.init()
        })
          .catch(function (error) {
            console.log(error)
          })
        }


  },
  mounted: function () {
      this.init()
  }

}
</script>