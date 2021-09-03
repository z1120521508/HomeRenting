<template>
   <div class="login-container">
    <el-form label-position="left"
      label-width="0px"
      status-icon>
        <h3 class="login_title">系统登录</h3>
        <el-form-item>
          <el-input
            type="text"
            v-model="loginForm.username"
            auto-coplete="off"
            placeholder="账号">
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-input
            type="password"
            v-model="loginForm.password"
            auto-coplete="off"
            placeholder="密码">
          </el-input>
        </el-form-item>
        <el-form-item style="width: 100%">
          <el-button type="primary" @click.native.prevent="login" style="width: 100%">登录</el-button>
          <!--
          <el-button type="primary" @click.native.prevent="register" style="width: 100%; margin-top: 30px">注册</el-button>
          -->
        </el-form-item>
      </el-form>
  </div>

</template>
 
<script>
import { mapMutations } from 'vuex';
export default {
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      userToken: ''
    };
  },
 
  methods: {
    // 调用store 存储
    ...mapMutations(['changeLogin']),
    login () {
this.$axios.post(`/api/user/login`, this.loginForm).then(resp => {
    if(resp && resp.status === 200) {
        console.log('请求返回:', resp)
        let data = resp.data
        if(data.code === 200) {
            this.$router.push('/home')
            this.$message.success('登录成功!')
        }else {
            this.$message.error('账号或密码错误!')
        }

    }
})
}
}
   /*
      let _this = this;
      if (this.loginForm.username === '' || this.loginForm.password === '') {
        alert('账号或密码不能为空');
      } else {
        // 发起登入请求
        this.$axios({
          method: 'post',
          url: '/auth/login',
          headers: {
		     'Content-Type':'application/json;charset=utf-8' 
	      },
          data:{"username":_this.loginForm.username,"password":_this.loginForm.password},
        }).then(res => {
          console.log('123456');
          console.log(res);
          console.log(res.data.datas.token);
          _this.userToken = res.data.datas.token;
          _this.changeLogin({ token: _this.userToken });
          _this.$router.push('/home');
          alert('登陆成功');
        }).catch(error => {
          alert('账号或密码错误');
          console.log(error);
        });
      }
    */
//  }
//};
}
</script>
<style scoped>
.login-container{
  border-radius: 15px;
  background-clip: padding-box;
  margin: 10% auto;
  width: 350px;
  padding: 35px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}
.login_title{
  margin: 0px auto 40px auto;
  text-align: center;
  color: #505458;
}

</style>
 