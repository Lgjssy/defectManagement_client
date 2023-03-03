<template>
  <div class="login clearfix">
    <div class="login-wrap">
      <el-row type="flex" justify="center">
        <el-form ref="loginForm" :model="user" status-icon label-width="80px">
          <h3>注册</h3>
          <hr>
          <el-form-item prop="username" label="用户名">
            <el-input v-model="user.username" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item prop="peoplename" label="姓名">
            <el-input v-model="user.peoplename" placeholder="请输入姓名"></el-input>
          </el-form-item>
          <el-form-item prop="password" label="设置密码">
            <el-input v-model="user.password" show-password placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item prop="job" label="职位">
            <el-input v-model="user.job" placeholder="请输入职位"></el-input>
          </el-form-item>
          <el-form-item>
           
            <el-button type="primary" icon @click="doRegister()" style="position:relative;left:50px">注册账号</el-button>
           
          </el-form-item>
        </el-form>
      </el-row>
    </div>
  </div>
</template>
 
<script>
import axios from "axios";
export default {
  name: "login",
  data() {
    return {
      user: {
        username: "",
        job: "",
        password: "",
        peoplename: ""
      },
    };
  },
  created() {
    // console.log($);
    // console.log("1111");
  },
  methods: {
    doRegister() {
      if (!this.user.username) {
        this.$message.error("请输入用户名！");
        return;
      } else if (!this.user.peoplename) {
        this.$message.error("请输入姓名！");
        return;
      } else if (!this.user.job) {
        this.$message.error("请输入职位");
        return;
      } else if (this.user.job != null) {
          if (!this.user.password) {
            this.$message.error("请输入密码！");
          return;
        } else {
           //this.$router.push({ path: "/" }); //无需向后台提交数据，方便前台调试
           let url = 'http://localhost:8081/register';
          axios
            .post(url, {
              User_Id: this.user.username,
              Position: this.user.job,
              User_Password: this.user.password,
              User_Name: this.user.peoplename
            })
            .then(res => {
               // console.log("输出response.data", res.data);
               // console.log("输出response.data.status", res.data.status);
              if (res.data==0) {
                alert("注册成功！！");
                this.$router.push({ path: "/" });
              } else {
                alert("您输入的用户id已存在！");
              }
            });
        }
      }
    }
  }
};
</script>
 
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login {
  position:absolute;
  top:0px;
  left: 0px;
  width: 100%;
  height: 960px;
  z-index: 9999;
  background: url("../images/image1.png") no-repeat;
  background-size: cover;
  overflow: hidden;
}
.login-wrap {
  background: white;
  background-size: cover;
  opacity: 0.8;
  width: 600px;
  height: 500px;
  margin: 215px auto;
  overflow: hidden;
  padding-top: 10px;
  line-height: 20px;
}
 
h3 {
  color: #0babeab8;
  font-size: 24px;
}
hr {
  background-color: #444;
  margin: 20px auto;
}
 
.el-button {
  width: 80%;
  margin-left: -50px;
}
</style>