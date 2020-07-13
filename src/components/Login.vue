<template>
    <div class="login-container">
      <div class="login-form">
        <el-form ref="loginFormRef" :model="loginForm" :rules="loginFormRules" label-width="80px" >
          <h2 class="login-title">风险展示系统</h2>
          <el-form-item label="用户名" prop="userName">
            <el-input v-model="loginForm.userName" prefix-icon="el-icon-user"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="loginForm.password" prefix-icon="el-icon-lock" type="password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="login">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
</template>

<script>
export default {
  data(){
    return{
      loginForm: {
        userName: '',
        password: ''
      },
      loginFormRules:{
        userName: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 1, max: 8, message: '长度在 1 到 8 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 18, message: '长度在 6 到 18 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods:{
    login(){
      this.$refs.loginFormRef.validate(async valid =>{
        if(!valid) return;
        const that = this
        const {data: res}  = await this.$http.post("/get/login",this.loginForm);
        console.log(res)
        if (res.result == "FAILED") return this.$message.error(res.message);
        this.$message.success("登录成功");
        window.sessionStorage.setItem("userId",res.data.id);
        await this.$router.push('/home');
      })

    }
  }
}
</script>

<style scoped>
  .login-container{
    position: absolute;
    width: 100%;
    height: 100%;
    background: gray;

  }
  .login-form{
    height: 300px;
    width: 330px;
    margin: 160px auto; /* 上下间距160px，左右自动居中*/
    background-color: aliceblue;
    padding: 30px;
    border-radius: 20px; /* 圆角 */
  }
   .login-title{
    color: #303133;
    text-align: center;
  }
</style>
