<template>

  <el-container >
    <!--头部-->
    <el-header>
      <div class="home-header">
        <img src="../assets/003.jpg" alt="" @click="imageToHome">
        企业风险展示系统
      </div>
      <div>
      <el-button type="info" @click="logOut">退出</el-button>
      </div>
    </el-header>
    <el-container>
      <!--侧边栏-->
      <el-aside width="200px">
        <el-menu router>
          <el-menu-item index="/enterprise">
            <i class="el-icon-user-solid"></i>
            <span slot="title">企业风险占比</span>
          </el-menu-item>
          <el-menu-item index="/riskinformation">
            <i class="el-icon-location-information"></i>
            <span slot="title">企业地理分布图</span>
          </el-menu-item>
          <el-menu-item index="/riskassessmentdetails">
            <i class="el-icon-pie-chart"></i>
            <span slot="title">企业风险评估信息</span>
          </el-menu-item>
          <!--<el-menu-item index="/riskMap">
            <i class="el-icon-data-analysis"></i>
            <span slot="title">企业风险信息</span>
          </el-menu-item>-->
        </el-menu>
      </el-aside>
      <!--主体-->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  export default {
    data(){
      return{

      }
    },
    methods:{
      imageToHome(){
        this.$router.replace("/home")
      },
      logOut(){
        window.sessionStorage.removeItem("userId")
        this.$router.push('/login')
      }
    }
  }
</script>

<style scoped>

  .home-header{
    display: flex;
    font-size: 20px;
  }
  img{
    height: 60px;
    width: 60px;
  }

  .home-container{
    position: absolute;
    height: 100%;
    width: 100%;

  }
  .el-container{
    height: 100%;
  }
  .el-header{
    display: flex;
    background-color: white;
    color: #333;
    text-align: center;
    line-height: 60px;
    justify-content: space-between;
  }
  .el-aside {
    background-color: white;
    color: #333;
    text-align: left;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    padding: 0;
    text-align: center;
    line-height: 20px;
  }
</style>
