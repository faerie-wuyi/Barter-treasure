<template>
   <div>
        <van-nav-bar
        title="登录"
        :fixed="true"
      />
      <div id="inner">
        <img src="../../build/ywb2.png" alt="">
        <van-cell-group>
          <van-field
            v-model="phone"
            clearable
            placeholder="请输入手机号"
            left-icon="phone"
            @blur="checkPhone()"
          />
          <span>{{msgPhone}}</span>
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
          <van-button type="danger" round size="normal" to="./index">接口有问题,点我进首页</van-button>
        </van-cell-group>
      </div>
    </div>
</template>

<script>
import axios from 'axios'
import { Toast } from 'vant'
export default {
  name:'Login',
  data(){
    return{
      phone:'',
      password1:'',
      msgPhone:'',
      msgPWD1:''

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
      //console.log(this.checkPhone(),this.checkPWD1());
      if(this.checkPhone() && this.checkPWD1()){
        this.$axios.post('http://106.12.14.214:8889/luxury/admin/validateCode.do',{
          phone:this.phone,
          password:this.password1,
        }).then((data)=>{
          console.log(data.data);
          if(data.data.code == 1){
            Toast(data.data.info)
            this.$router.push('./Index.vue')
          }else{
            Toast('手机号未注册')
          }
        })
      }else{
          Toast('请按正确的格式填写信息')
      }
    },
    checkPhone(){
      var testRePho = /^1((3[\d])|(4[5,6,7,9])|(5[0-3,5-9])|(6[5-7])|(7[0-8])|(8[\d])|(9[1,8,9]))\d{8}$/;
      if(testRePho.test(this.phone)){
        this.$axios.post('http://106.12.14.214:8889/luxury/admin/validatePhone.do',{
          phone:this.phone
        }).then((data)=>{
          if(data.data.code == 1){
            this.msgPhone = '手机号未注册'
          }else{
            this.msgPhone = ''
          }
        })
      }else{
        this.msgPhone = '请输入正确的手机号';
      }
      return this.phone
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
</style>
