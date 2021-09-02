<style>
</style>
<template>
  <div id="administrator">
    <el-form :inline="true" class="demo-form-inline">
          <el-form-item>
            <el-input
              v-model="search"
              class="search_name"
              size="large"
              placeholder="输入姓名查询">
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
              class="el-icon-refresh"
              type="primary"
              @click="dialogFormAdd = true">添加
            </el-button>
          </el-form-item>
          <el-form-item>
            <el-button
              class="el-icon-circle-plus-outline"
              type="primary"
              >导出
            </el-button>
          </el-form-item>
      </el-form>

    <el-row>
        <!-- <el-table
                        :data="tableData"
                        style="width: 100%">
                        <el-table-column
                            v-for="(data,index) in tableHeader"
                            :key="index"
                            :prop="data.prop"
                            :label="data.label"
                            :min-width="data['min-width']"
                            :align="data.align">
                        </el-table-column>
                        <el-table-column
                            label="操作"
                            min-width="240">
                            <template slot-scope="scope">
                                <el-button type="primary" size="mini" @click="toEdit(scope)">修改</el-button>
                                <el-button type="danger" size="mini" @click="deleteAdmin(scope)">删除</el-button>
                            </template>
                        </el-table-column>
                    </el-table> -->
                    <el-table :data="tableData" style="width: 100%;">
                        <el-table-column prop="id" label="管理员Id">
                        </el-table-column>
                        <el-table-column prop="username" label="管理员名称" >
                        </el-table-column>
                        <el-table-column prop="avatar" label="管理员头像" >
                        <!-- 图片的显示 -->
                            <template  slot-scope="scope">            
                                <img :src="scope.row.avatar"  min-width="40" height="40" />
                            </template>         
                        </el-table-column> 
                        <el-table-column prop="roleIds" label="管理员角色" >
                        </el-table-column>

                        <el-table-column label="操作">
                            <template slot-scope="scope">
                                <el-button type="primary" size="mini" @click="toEdit(scope)">编辑</el-button>
                                <el-button type="danger" size="mini" @click="deleteAdmin(scope)">删除</el-button>
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

    <el-dialog title="添加管理员" :visible.sync="dialogFormAdd">
      <el-form :model="admin" label-width="100px">
        <el-form-item label="管理员名称" >
          <el-input v-model="admin.username" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="管理员密码" >
          <el-input v-model="admin.password" auto-complete="off"></el-input>
        </el-form-item>
         <el-form-item label="管理员头像" >
            <!-- 文件上传 -->
            <el-upload
                            class="upload-demo"
                            action="http://192.168.1.74:8099/layui/vue/file/upload"
                            :limit="1"
                            :show-file-list="false"
                            :file-list="fileList"
                            :on-success="uploadSuccess">
                            <el-button size="small" type="primary">点击上传</el-button>
                        </el-upload>
        </el-form-item>
        <el-form-item label="管理员角色" >
          <el-select v-model="admin.role" >
            <el-option
                v-for="item in roleData"
                :key="item.id"
                :label="item.name"
                :value="item.id"> 
            </el-option>
         </el-select>
        </el-form-item>

      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormAdd = false">取 消</el-button>
        <el-button type="primary" @click="add(admin)">确 定</el-button>
      </div>
    </el-dialog>

    <el-dialog title="修改管理员" :visible.sync="dialogFormEdit">
      <el-form :model="admin">
        <el-form-item label="管理员名称" >
          <el-input v-model="admin.username" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="管理员角色">
          <el-select v-model="admin.role">
            <el-option
                v-for="item in roleData"
                :key="item.id"
                :label="item.name"
                :value="item.id"> 
            </el-option>
         </el-select>
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
    name: 'administrator',
     data () {
     return {
        roleData:[],
        tableData: [],
        dialogFormEdit: false,
        dialogFormAdd:false,
        search: '',
        fileList: [],
        admin: {
          id: '',
          username: '',
          password: '',
          avatar: '',
          role: ''
        },
        pagination: {
            pageIndex: 1,
            pageSize: 10,
            total: 0,
        },
        tableHeader: [
                    {
                        prop: 'id',
                        label: '管理员SID',
                        align: 'left'
                    },
                    {
                        prop: 'username',
                        label: '管理员名称',
                        align: 'left'
                    },
                    {
                        prop: 'avatar',
                        label: '管理员头像',
                        align: 'left'
                    },
                    {
                        prop: 'role',
                        label: '管理员角色',
                        align: 'left'
                    }
                ]
      }
  },
  methods:{
    init () {
        var self = this
         this.$axios({
            method:'post',
            url:'/api/admin/getPage',
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
                url:'/api/admin/getPage',
                data:{"page":this.pagination.pageIndex,"limit":this.pagination.pageSize,"username":this.search},
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
        // 文件上传
        uploadSuccess(response, file, fileList){
            console.log(response);
            this.admin.avatar = response.datas.path;
        },
        // 角色字典数据查询
        asyncRoleData(){
             this.$axios({
                method:'post',
                url:'/api/role/getList',
                data:{},
                headers:{
                    'Content-Type':'application/json;charset=utf-8'      //改这里就好了
                }
            }).then(res => {
                console.log(res)
                res.data.datas.list.forEach(element => {
                    this.roleData.push({id:element.id,name:element.name});
                })
            })
            .catch(function (error) {
                console.log(error)
            })
        },
        // 新增管理员
        add(){
            this.$axios({
            method:'post',
            url:'/api/admin/insert',
            data:{'username': this.admin.username, 'password':this.admin.password,'avatar':this.admin.avatar, 'roleIds':this.admin.role},
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
        // 删除管理员
        deleteAdmin(scope){
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
            url:'/api/admin/delete',
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
        // 编辑管理员(model 赋值)
        toEdit (scope) {
            console.log(scope.row)
            this.admin.id = scope.row.id
            this.admin.username = scope.row.username
            this.admin.role = scope.row.roleIds
            this.dialogFormEdit = true
        },
        // 编辑管理员
        edit(){
            this.$axios({
            method:'post',
            url:'/api/admin/update',
            data:{'username': this.admin.username, 'roleIds':this.admin.role, 'id':this.admin.id},
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
  created() {
     this.asyncRoleData()
  },
   mounted: function () {
      this.init()
  }
}
</script>