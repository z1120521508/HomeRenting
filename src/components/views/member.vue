<style>
</style>
<template>
<div id="member">
  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      fixed
      prop="user_number"
      label="用户编号"
      width="120">
    </el-table-column>
    <el-table-column
      prop="user_falseName"
      label="姓名"
      width="300">
    </el-table-column>
    <el-table-column
      prop="user_password"
      label="用户密码"
      width="300">
    </el-table-column>
    <el-table-column
      prop="user_trueName"
      label="用户姓名"
      width="120">
    </el-table-column>
    <el-table-column
      prop="user_sex"
      label="用户性别"
      width="300">
    </el-table-column>
    <el-table-column
      prop="user_phone"
      label="用户电话">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="200">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        <el-button type="text" size="small">编辑</el-button>
        <el-button type="text" @click="dialogVisible = true">查看详细信息</el-button>

      <el-dialog
          title="提示"
          :visible.sync="dialogVisible"
          width="30%"
          :before-close="handleClose"
          :modal="false">
      <span>这是一段信息</span>
       <span slot="footer" class="dialog-footer">
       <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
      </el-dialog>
      </template>
    </el-table-column>
  </el-table>





</div>
</template>

<script>
export default {
    name: 'member',
    methods: {
      handleClick(row) {
        console.log(row);
      },

      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }  
    },

    data() {
      return {
        tableData: [{
          user_number: '0001',
          user_falseName: '吃个桃桃~~',
          user_password: 'haolianglianga123',
          user_trueName: '凤小逸',
          user_sex: '女',
          user_phone: 110
        }, {
          user_number: '0002',
          user_falseName: '我晒干了沉默',
          user_password: 'huidehenchongdong456',
          user_trueName: '田一鸣',
          user_sex: '男',
          user_phone: 119
        }, {
          user_number: '0003',
          user_falseName: '人类高质量男性',
          user_password: 'iamsb789',
          user_trueName: '徐晴根',
          user_sex: '男',
          user_phone: 120
        }, {
          user_number: '0004',
          user_falseName: '耶斯莫拉',
          user_password: 'mihotel666',
          user_trueName: '郭泫雅',
          user_sex: '女',
          user_phone: 10086
        }],
      dialogVisible: false
      }
    }
  }
</script>