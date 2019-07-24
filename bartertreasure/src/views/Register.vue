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
          <!-- 用户名验证 -->
          <van-field
            v-model="username"
            clearable
            placeholder="请输入用户名"
            left-icon="manager"
            @blur="checkName()"
          />
            <span>{{msgName}}</span>
          <!-- 手机号验证 -->
          <van-field
            v-model="phone"
            clearable
            placeholder="请输入手机号"
            left-icon="phone"
            @blur="checkPhone()"
          />
            <span>{{msgPhone}}</span>
          <!-- 第一次输入密码 -->
          <van-field
            v-model="password1"
            type="password"
            placeholder="6-20个字符，可使用字母、数字、下划线"
            left-icon="lock"
            @blur="checkPWD1()"
          />
          <span>{{msgPWD1}}</span>
          <!-- 第二次输入密码 -->
          <van-field
            v-model="password2"
            type="password"
            placeholder="请再一次输入密码"
            left-icon="lock"
            @blur="checkPWD2()"
          />
          <span>{{msgPWD2}}</span>
          <van-button type="warning" size="large" round @click="register()">注册</van-button>
        </van-cell-group>
      </div>

    </div>
</template>
<script>
import { Toast } from 'vant';
export default {
  name:'Register',
  data(){
    return{
      username:'',
      phone:'',
      password1:'',
      password2:'',
      msgName:'',
      msgPhone:'',
      msgPWD1:'',
      msgPWD2:''
    }
  },
  methods: {
    register(){
      //console.log(this.checkName(),this.checkPhone(),this.checkPWD1(),this.checkPWD2());
      if(this.checkName() && this.checkPhone() && this.checkPWD1() && this.checkPWD2()){
        this.$axios.post('http://106.12.14.214:8889/luxury/admin/register.do',{
          loginName:this.username,
          password:this.password1,
          phone:this.phone
        }).then((data)=>{
          if(data.data.code == 1){
            Toast(data.data.info)
          }else{
            Toast(data.data.info)
          }
        })
      }else{
          Toast('请按正确的格式填写信息')
      }
    },
    onClickLeft(){
      this.$router.go(-1)
    },
    checkName(){
      if(this.username.length==0){
          this.msgName="用户名不能为空";
      }else if(this.username.length<2)
      {
          this.msgName="用户名至少2个字符";
      }else{
        this.$axios.post('http://106.12.14.214:8889/luxury/admin/validateLoginName.do',{
          loginName:this.username
        }).then((data)=>{
          //console.log(data.data);
          if(data.data.code == 1){
            this.msgName = data.data.info
            return this.username
          }else{
            this.msgName = data.data.info
          }
        })

      }
      return this.username
    },
    checkPhone(){
      var testRePho = /^1((3[\d])|(4[5,6,7,9])|(5[0-3,5-9])|(6[5-7])|(7[0-8])|(8[\d])|(9[1,8,9]))\d{8}$/;
      if(testRePho.test(this.phone)){
        this.$axios.post('http://106.12.14.214:8889/luxury/admin/validatePhone.do',{
          phone:this.phone
        }).then((data)=>{
          if(data.data.code == 1){
            this.msgPhone = data.data.info
          }else{
            this.msgPhone = data.data.info
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

    },
    checkPWD2(){
      if(this.password2 == this.password1){
        this.msgPWD2 = ''
        return this.password2
      }else{
        this.msgPWD2 = '密码不一致'
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
