<style>
</style>
<template>
  <div id="privilege-manager">
   <!--顶部菜单栏-->
    <el-form :inline="true" class="demo-form-inline">
          <el-form-item>
            <el-button
              class="el-icon-refresh"
              type="primary"
              @click="toAdd()">添加
            </el-button>
          </el-form-item>
      </el-form>
      <!--表格-->  
       <el-row>
            <el-table :data="tableData" style="width: 100%;" row-key="id" :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
                        <el-table-column prop="privilegeName" label="权限名称" >
                        </el-table-column>
                        <el-table-column prop="privilegeCode" label="权限编码" >
                        </el-table-column>
                        <el-table-column prop="privilegeType" label="权限类别" :formatter="formatPrivilegeType" >
                        </el-table-column>

                        <el-table-column label="操作">
                            <template slot-scope="scope">
                                <el-button type="primary" size="mini" @click="toAdd(scope)">新增</el-button>
                                <el-button type="primary" size="mini" @click="toEdit(scope)">编辑</el-button>
                                <el-button type="danger" size="mini" @click="deleteRole(scope)">删除</el-button>
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


  </div>
</template>

<script>
export default{
    name: 'privilege-manager',
    data () {
     return {
        tableData: [],
        dialogFormEdit: false,
        dialogFormAdd:false,
        privilege: {
          id: '',
          privilegeName: '',
          privilegeCode: '',
          privilegeType: '',
          pid: '0'
        },
        pagination: {
            pageIndex: 1,
            pageSize: 10,
            total: 0,
        }
      }
    },
    methods:{
         init () {
        var self = this
         this.$axios({
            method:'post',
            url:'/api/baoan/privilege/getPage',
            data:{"page":this.pagination.pageIndex,"limit":this.pagination.pageSize, "pid": this.privilege.pid},
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
        // 权限类别转换
        formatPrivilegeType: function( row, column) {
                 if(row.privilegeType === '1'){
                     return '目录'
                 } else if(row.privilegeType === '2') {
                     return '菜单'
                 } else if (row.privilegeType === '3') {
                     return '按钮'
                 } else {
                     return ''
                 }
        }
    },
    mounted: function () {
      this.init()
  }


}
</script>