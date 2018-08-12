<template >
    <div id="login">
        <div class="login-title">
            <img src="../assets/images/logo_1.png" alt="logo">
            <h2>{{$route.params.id}}</h2>
        </div>
        <div class="login-box">
            <form action="" @keyup.enter="login">
                <div class='login-box-con mt20'>
                    <i class='login-user'></i>
                    <input v-focus class='login-user-input' type="text" placeholder="请输入用户名" v-model.lazy="username">
                </div>
                <div class='login-box-con'>
                    <i class='login-pw'></i>
                    <input class='login-pw-input' type="password" placeholder="请输入密码" v-model="password">
                </div>
                <div class='login-rem'>
                    <el-checkbox v-model="checked" @change='rempw'>记住密码</el-checkbox>
                </div>
                <div>
                    <el-button class="home-login-btn basebg" type="info" @click='login'>登陆</el-button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import qs from "qs";
export default {
  name: "login",
  data() {
    return {
      checked: false,
      password: "",
      username: "",
      alertMiss: false
    };
  },
  created() {
    this.doremmberpass();
  },
  computed: {},
  methods: {
    login() {
      if (this.username == "" || this.password == "") {
        this.$alert("用户名或密码不能为空", "提示信息", {
          confirmButtonText: "确定"
        });
      } else if (this.$route.params.id == "竞争力培养") {
        if (sessionStorage.getItem("rolelist") === "1") {//这里都是单角色的代码流程，一旦出现多权限将会出问题
          //教务
          this.$http
            .post(
              "/369research/yzh/inter/login",
              qs.stringify({
                userName: this.username,
                passWord: this.password
              })
            )
            .then(
              res => {
                sessionStorage.setItem("userid", this.username);
                sessionStorage.setItem("userName", res.data.truename);
                this.$router.push({
                  path: "/jingzheng/" + this.username,
                  params: { userId: this.username }
                });
                sessionStorage.setItem("keyId", res.data.userid);
                sessionStorage.setItem("keyToken", res.data.accesstoken);
              },
              error => {
                if (
                  error.message === "Network Error" ||
                  new XMLHttpRequest().status == 0
                ) {
                  this.$alert("网络错误", "提示信息", {
                    confirmButtonText: "确定"
                  });
                } else {
                  this.$alert("用户名或密码输入错误", "提示信息", {
                    confirmButtonText: "确定"
                  });
                }
              }
            );
        } else if (sessionStorage.getItem("rolelist") === "2") {
          //教研
          this.$http
            .post(
              "/369education/yzh/inter/login",
              qs.stringify({
                userName: this.username,
                passWord: this.password
              })
            )
            .then(
              res => {
                sessionStorage.setItem("userid", this.username);
                sessionStorage.setItem("userName", res.data.truename);
                this.$router.push({
                  path: "/jingzheng/" + this.username,
                  params: { userId: this.username }
                });
                sessionStorage.setItem("keyId", res.data.userid);
                sessionStorage.setItem("keyToken", res.data.accesstoken);
              },
              error => {
                if (
                  error.message === "Network Error" ||
                  new XMLHttpRequest().status == 0
                ) {
                  this.$alert("网络错误", "提示信息", {
                    confirmButtonText: "确定"
                  });
                } else {
                  this.$alert("用户名或密码输入错误", "提示信息", {
                    confirmButtonText: "确定"
                  });
                }
              }
            );
        } else {
          this.$alert("权限不足", "提示信息", {
            confirmButtonText: "确定"
          });
        }
      } else {
        //这里临时创建一个演示分支---以后可能只会用这种一次性的登录形式
        //1.首先从manage系统获取权限
        if (this.username === "" || this.password === "") {
          this.$alert("用户名或密码不能为空", "提示信息", {
            confirmButtonText: "确定"
          });
        } else {
          this.$http
            .post(
              "/369manage/yzh/manage/inter/login",
              qs.stringify({
                userName: this.username,
                passWord: this.password
              })
            )
            .then(
              res => {
                if (res.data.loginFlag === true) {
                  // sessionStorage.setItem('userid', this.userid)
                  this.$store.dispatch("GET_USERID", res.data.userid);
                  // this.$router.push({ name: 'lab', params: { userId:  this.userid } })
                  // sessionStorage.setItem('rolelist', res.data.rolelist)
                  var rolelist = res.data.rolelist[0];//这里也先按单角色处理，以后考虑扩展
                  console.log('rolelist===',res.data.rolelist);
                  sessionStorage.setItem('rolelist', rolelist)
                  if (rolelist == 'researchRole') {
                    //教务
                    this.$http
                      .post(
                        "/369research/yzh/inter/login",
                        qs.stringify({
                          userName: this.username,
                          passWord: this.password
                        })
                      )
                      .then(
                        res => {
                          sessionStorage.setItem("userid", this.username);
                          sessionStorage.setItem("userName", res.data.truename);
                          this.$router.push({
                            path: "/jingzheng/" + this.username,
                            params: { userId: this.username }
                          });
                          sessionStorage.setItem("keyId", res.data.userid);
                          sessionStorage.setItem(
                            "keyToken",
                            res.data.accesstoken
                          );
                        },
                        error => {
                          if (
                            error.message === "Network Error" ||
                            new XMLHttpRequest().status == 0
                          ) {
                            this.$alert("网络错误", "提示信息", {
                              confirmButtonText: "确定"
                            });
                          } else {
                            this.$alert("用户名或密码输入错误", "提示信息", {
                              confirmButtonText: "确定"
                            });
                          }
                        }
                      );
                  } else if (rolelist == 'educationRole' || rolelist == 'teacher') {
                    //教研与教师先放一起
                    //教研
                    this.$http
                      .post(
                        "/369education/yzh/inter/login",
                        qs.stringify({
                          userName: this.username,
                          passWord: this.password
                        })
                      )
                      .then(
                        res => {
                          sessionStorage.setItem("userid", this.username);
                          sessionStorage.setItem("userName", res.data.truename);
                          this.$router.push({
                            path: "/jingzheng/" + this.username,
                            params: { userId: this.username }
                          });
                          sessionStorage.setItem("keyId", res.data.userid);
                          sessionStorage.setItem(
                            "keyToken",
                            res.data.accesstoken
                          );
                        },
                        error => {
                          if (
                            error.message === "Network Error" ||
                            new XMLHttpRequest().status == 0
                          ) {
                            this.$alert("网络错误", "提示信息", {
                              confirmButtonText: "确定"
                            });
                          } else {
                            this.$alert("用户名或密码输入错误", "提示信息", {
                              confirmButtonText: "确定"
                            });
                          }
                        }
                      );
                  } else if (rolelist == 'student') {
                    //学生
                    this.$http
                      .post(
                        "/369student/yzh/inter/login",
                        qs.stringify({
                          userName: this.username,
                          passWord: this.password
                        })
                      )
                      .then(
                        res => {
                          sessionStorage.setItem("userid", this.username);
                          sessionStorage.setItem("userName", res.data.truename);
                          this.$router.push({ path: "/jingzheng/" });//这里需要跳转新的学生端页面
                          sessionStorage.setItem("stukeyId", res.data.userid);
                          sessionStorage.setItem(
                            "stukeyToken",
                            res.data.accesstoken
                          );
                          console.log(res);
                        },
                        error => {
                          if (
                            error.message === "Network Error" ||
                            new XMLHttpRequest().status == 0
                          ) {
                            this.$alert("网络错误", "提示信息", {
                              confirmButtonText: "确定"
                            });
                          } else {
                            this.$alert("用户名或密码输入错误", "提示信息", {
                              confirmButtonText: "确定"
                            });
                          }
                        }
                      );
                  }
                } else {
                  //角色获取失败
                  this.$alert("角色获取失败", "提示信息", {
                    confirmButtonText: "确定"
                  });
                }
              },
              error => {
                if (error.message === "Network Error") {
                  this.$alert("网络错误", "提示信息", {
                    confirmButtonText: "确定"
                  });
                } else {
                  this.open();
                }
              }
            );
        }
      }
    },
    rempw() {
      if (this.checked === true) {
        localStorage.setItem("keyName", this.userid);
        localStorage.setItem("keyPass", this.accesstoken);
      } else {
        localStorage.removeItem("keyName");
        localStorage.removeItem("keyPass");
      }
    },
    doremmberpass() {
      let nameVal = localStorage.getItem("keyName");
      let passVal = localStorage.getItem("keyPass");
      if (nameVal) {
        this.username = nameVal;
      }
      if (passVal) {
        this.password = passVal;
        this.checked = true;
      }
    }
  }
};
</script>
<style lang='less'>
#login {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -10;
  background-position: center top;
  background-repeat: no-repeat;
  background-attachment: fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  zoom: 1;
  background: url(../assets/images/login-bg.png);
  overflow-y: hidden;
  .login-title {
    text-align: center;
    width: 203px;
    height: 73px;
    margin: 112px auto 20px;
    h2 {
      font-size: 30px;
      color: #fff;
      font-weight: 500;
    }
  }
  .login-box {
    width: 224px;
    height: 160px;
    border: 1px solid #fff;
    border-radius: 5px;
    position: absolute;
    margin-left: -203px;
    left: 50%;
    background: #fff;
    padding: 50px 90px;
    &-con {
      position: relative;
      display: inline-block;
    }
    .mt20 {
      margin-bottom: 20px;
    }
    i {
      width: 20px;
      height: 20px;
      display: inline-block;
      position: absolute;
      left: 10px;
      top: 9px;
    }
    .login-user {
      background-image: url(../assets/images/user1.png);
      background-repeat: no-repeat;
      background-size: 18px;
    }
    .login-pw {
      background-image: url(../assets/images/pass-wd.png);
      background-repeat: no-repeat;
      background-size: 18px;
    }
    .login-rem {
      margin: 20px 0;

      .el-checkbox__label {
        color: #2685d6;
      }
    }
  }
  input {
    width: 186px;
    height: 30px;
    line-height: 30px;
    padding-left: 34px;
  }
}
</style>