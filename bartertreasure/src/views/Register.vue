<template>
   <div>
      <van-nav-bar
        title="注册"
        left-text="返回"
        :left-arrow="true"
        :fixed="true"
        @click-left="onClickLeft"
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
          >
          </van-field>
          <van-field
            v-model="password"
            type="password"
            placeholder="6-20个字符，可使用字母、数字、下划线"
            left-icon="lock"
            @blur="check1()"
          />
          <van-field
            v-model="password2"
            type="password"
            placeholder="请再一次输入密码"
            left-icon="lock"
            @blur="check2()"
          />
          <van-button type="warning" size="large" round @click="register()">注册</van-button>
        </van-cell-group>
      </div>

    </div>
</template>

<script>
import axios from 'axios'
import { Toast } from 'vant';
export default {
  name:'Register',
  data(){
    return{
      phone:'',
      password:'',
      password2:'',
      arr:[],


    }
  },
  methods: {
    register(){
      var testRePho = /^1((3[\d])|(4[5,6,7,9])|(5[0-3,5-9])|(6[5-7])|(7[0-8])|(8[\d])|(9[1,8,9]))\d{8}$/;
      if(testRePho.test(this.phone)){
        var testRePwd = /^(\w){6,20}$/;
        if(testRePwd.test(this.password)){
          if(this.password2 == this.password){
            axios({
              method:'get',
              url:'http://jx.xuzhixiang.top/ap/api/reg.php'
            }).then((data)=>{
              console.log(data.data);
            })
          }else{
            Toast('密码不一致');
          }
        }else{
          Toast('密码格式不规范');
        }
      }else{
        Toast('请输入正确的手机号');
      }
    },
    onClickLeft(){
      this.$router.go(-1)
    },
    check1(){
      var testRePwd = /^(\w){6,20}$/;
      if(testRePwd.test(this.password)){
        return true;
      }else{
        Toast('密码格式不规范');
      }
    },
    check2(){
      if(this.password2 == this.password){
        return true;
      }else{
        Toast('密码不一致');
      }
    },
    checkPhone(){
      var testRePho = /^1((3[\d])|(4[5,6,7,9])|(5[0-3,5-9])|(6[5-7])|(7[0-8])|(8[\d])|(9[1,8,9]))\d{8}$/;
      if(testRePho.test(this.phone)){
        return true;
      }else{
        Toast('请输入正确的手机号');
      }
    }
  }
}
</script>
<style>
</style>
