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
          />

          <van-field
            v-model="password"
            type="password"
            placeholder="请输入密码"
            left-icon="lock"
          />
          <van-button type="primary" round size="large" to="/index">登录</van-button>
          <span>
            还没有账号？点击<span @click="toRegister">立即注册</span>
          </span>
        </van-cell-group>
      </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name:'Login',
  data(){
    return{
      username:'',
      password:''
    }
  },
  methods: {
    toRegister(){
      this.$router.push('/register')
    },
  }
}
</script>
<style scope>
</style>
