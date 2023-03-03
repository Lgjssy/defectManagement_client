<template>
  <div class="login" clearfix>
    <div class="login-wrap">
      <el-row type="flex" justify="center">
        <el-form ref="loginForm" :model="user" :rules="rules" status-icon label-width="80px">
          <h3>登录</h3>
          <hr>
          <el-form-item prop="username" label="用户名">
            <el-input v-model="user.username" placeholder="请输入用户名" prefix-icon></el-input>
          </el-form-item>
          <el-form-item id="password" prop="password" label="密码">
            <el-input v-model="user.password" show-password placeholder="请输入密码"></el-input>
          </el-form-item>
          <router-link to="/register" style="position:relative;left: 140px;">注册账号</router-link>
          <el-form-item>
            
                <el-button type="primary" icon="el-icon-upload" @click="doLogin()" style="position:relative;left:50px">登 录</el-button>
            
          </el-form-item>
        </el-form>
      </el-row>
    </div>
  </div>
</template>
 
<script>
import axios from "axios";
import Bug from  './Bug'
export default {
  name: "login",
  data() {
    return {
      user: {
        username: "",
        password: ""
      }  
    };
  },
  created() {},
  methods: {
    doLogin() {
     if (!this.user.username) {
        this.$message.error("请输入用户名！");
        return;
      } else if (!this.user.password) {
        this.$message.error("请输入密码！");
        return;
      } else {
        //校验用户名和密码是否正确;
        //this.$router.push({ path: "/home" });
         let data1 = {
            User_Id : this.user.username,
            User_Password :this.user.password
        }
    let url = 'http://localhost:8081/add';
    axios.post(url,data1).then(res=>{
      if(res.data==1)
     this.$message.error("不存在该用户！");
     else if(res.data==0){
       this.$message({
            type: 'success',
            message: '登录成功!'
          });

       this.$router.push({ path: "/bug" });
     }
     else if(res.data==2){
      this.$message.error("密码错误！");
     }
    })
             
          
      }
    }
  }
};
</script>
 
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login {
  position:absolute;
  top: 0px;
  left: 0px;
  z-index: 100;
  width: 100%;
  height: 960px;
  background: url("../images/image1.png") no-repeat;
  background-size: cover;
  overflow: hidden;
}
.login-wrap {
  background:white;
  background-size: cover;
  opacity: 0.8;
  width: 600px;
  height: 400px;
  margin: 215px auto;
  overflow: hidden;
  padding-top: 10px;
  line-height: 40px;
}
#password {
  margin-bottom: 5px;
}
h3 {
  color: #0babeab8;
  font-size: 24px;
}
hr {
  background-color: #444;
  margin: 20px auto;
}
a {
  text-decoration: none;
  color: #aaa;
  font-size: 15px;
}
a:hover {
  color: coral;
}
.el-button {
  width: 80%;
  margin-left: -50px;
}
</style>