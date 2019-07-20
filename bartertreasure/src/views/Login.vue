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
            v-model="username"
            clearable
            placeholder="请输入手机号"
            left-icon="phone"
            @blur="checkPhone()"
          />

          <van-field
            v-model="password"
            type="password"
            placeholder="请输入密码"
            left-icon="lock"
             @blur="check1()"
          />
          <van-button type="primary" round size="large" to="/index">登录</van-button>
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
import { Toast } from 'vant'
export default {
  name:'Login',
  data(){
    return{
      username:'',
      password:''
    }
  },
  methods: {
    toResetPwd(){
      this.$router.push('/resetPwd')
    },
    toRegister(){
      this.$router.push('/register')
    },
    check1(){
      var testRePho = /^(\w){6,20}$/;
      if(testRePho.test(this.password)){

      }else{
        Toast('密码格式不规范');
      }
    },
    checkPhone(){
      var testRePwd = /^1((3[\d])|(4[5,6,7,9])|(5[0-3,5-9])|(6[5-7])|(7[0-8])|(8[\d])|(9[1,8,9]))\d{8}$/;
      if(testRePwd.test(this.phone)){

      }else{
        Toast('请输入正确的手机号');
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
