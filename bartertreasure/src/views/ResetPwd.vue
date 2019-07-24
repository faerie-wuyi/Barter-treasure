<template>
   <div>
      <van-nav-bar
        title="找回密码"
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
          />
          <van-field
            v-model="sms"
            center
            clearable
            left-icon="chat"
            placeholder="请输入短信验证码"
          >
            <van-button slot="button" size="small" type="primary" @click="yz()">发送验证码</van-button>
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
          <van-button type="warning" size="large" round @click="register()">重置密码</van-button>
        </van-cell-group>
      </div>
      <h3>没接口,别看了</h3>
    </div>
</template>
<script>
import { Toast } from 'vant'
import qs from 'qs'
export default {
  name:'ResetPwd',
  data(){
    return{
      phone:'',
      password:'',
      password2:'',
      sms:'',
      arr:[],
    }
  },
  methods: {
    register(){
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
    },
    yz(){
      var code = String(Math.floor(Math.random()*(9999-1000)+1000));
      this.$axios.get('http://v.juhe.cn/sms/send',{ //聚合短信接口
        data:qs.stringify({
          'mobile':this.phone,
          'tpl_id':'173919',
          'tpl_value':'#code#='+code,
          'key':'2ddb2bef3b69719b39f3a84041397714'
        }),
      }).then((data)=>{
        console.log(data,code)
        if(data.error_code == 0){
          Toast('验证码已发送');
        }
        if(this.sms == code){
          Toast('验证成功');
        }else{
          Toast('验证失败');
        }
      }).catch((err)=>{
        console.log(err);
      })
    }

  }
}

</script>
<style scope>
#inner{
  margin-top:46px;
}
</style>
