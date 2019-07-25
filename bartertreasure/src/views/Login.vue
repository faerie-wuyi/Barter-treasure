<template>
   <div>
        <van-nav-bar
        title="登录"
        :fixed="true"
      />
      <div id="inner">
        <img class="img" src="../../build/ywb2.png" alt="">
        <van-cell-group>
          <van-field
            v-model="username"
            clearable
            placeholder="请输入用户名"
            left-icon="manager"
            @blur="checkName()"
          />
          <span>{{msgName}}</span>
          <van-field
            v-model="password1"
            type="password"
            placeholder="请输入密码"
            left-icon="lock"
             @blur="checkPWD1()"
          />
          <span>{{msgPWD1}}</span>
          <van-button type="primary" round size="large" @click="login">登录</van-button>
          <van-row type="flex" justify="space-between">
            <span @click="toResetPwd()">忘记密码</span>
            <span @click="toRegister()">注册帐号</span>
          </van-row>
        </van-cell-group>
      </div>
    </div>
</template>

<script>
import axios from 'axios'
import qs from 'qs'
import { Toast } from 'vant'
export default {
  name:'Login',
  data(){
    return{
      username:'',
      password1:'',
      msgName:'',
      msgPWD1:'',
      idArr:[]

    }
  },
  methods: {
    toResetPwd(){
      this.$router.push('/resetPwd')
    },
    toRegister(){
      this.$router.push('/register')
    },
    login(){
      //console.log(this.checkName(),this.checkPWD1());
      if(this.checkName() && this.checkPWD1()){
        this.$axios({
          method:'post',
          url:'http://106.12.14.214:8889/luxury/admin/login.do',
          data:qs.stringify({
            'username':this.username,
            'password':this.password1,
            'flag':1
          })
        }).then((data)=>{
          if(data.data.code == 1){
            this.idArr =  data.data.info.split(',')
            //this.idArr = JSON.parse(JSON.stringify(this.idArr0))
            //console.log(this.idArr);
            this.$store.commit('login',this.idArr) //写在函数外没值嗷
            // localStorage.setItem('userID',this.idArr[0])
            // localStorage.setItem('userName',this.idArr[1])
            this.$router.push('/index')
          }else{
            Toast(data.data.info)
          }
        })
      }else{
          Toast('请按正确的格式填写信息')
      }
    },
    checkName(){
      if(this.username.length==0){
          this.msgName="用户名不能为空";
      }else if(this.username.length<2)
      {
          this.msgName="用户名至少2个字符";
      }else{
        this.$axios({
          method:'post',
          url:'http://106.12.14.214:8889/luxury/admin/validateLoginName.do',
          data:qs.stringify({
            'loginName':this.username
          })
        }).then((data)=>{
          //console.log(data.data);
          if(data.data.code == 1){
            this.msgName = '用户名不存在'
          }else{
            // return this.username
          }
        })
        return this.username
      }
    },
    checkPWD1(){
      var testRePwd = /^(\w){6,20}$/;
      if(testRePwd.test(this.password1)){
        this.msgPWD1 = ''
        return this.password1
      }else{
        this.msgPWD1 = '密码格式不规范'
      }

    }
  }
}
</script>
<style scope>
#inner{
  margin-top:46px;
}
.img{
  margin:0 auto;
}
</style>
