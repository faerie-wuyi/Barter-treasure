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
            v-model="username"
            clearable
            placeholder="请输入手机号"
            left-icon="phone"
          >
          </van-field>
          <van-field
            v-model="password"
            type="password"
            placeholder="请输入密码"
            left-icon="lock"
          />
          <van-field
            v-model="password2"
            type="password"
            placeholder="请再一次输入密码"
            left-icon="lock"
          />
          <van-button type="warning" size="large" round>注册</van-button>
        </van-cell-group>
        <van-card
              v-for="item in arr"
            :title="item.name"
            :key="item.id"
          >
        </van-card>
      </div>

    </div>
</template>

<script>
export default {
  name:'Register',
  data(){
    return{
      username:'',
      password:'',
      arr:[]
    }
  },
  methods: {
    onClickLeft(){
      this.$router.go(-1)
    }
  }
}
</script>
<style>
</style>
