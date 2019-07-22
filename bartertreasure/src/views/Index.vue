<template>
  <div>
    <router-view></router-view>
    <van-tabbar class="footer" v-model="active" active-color="lightgreen">
      <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="label-o" to="/category">分类</van-tabbar-item>
      <van-tabbar-item icon="upgrade"  to="/release">发布</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" to="/cart">购物车</van-tabbar-item>
      <van-tabbar-item icon="manager-o" to="/user">我的</van-tabbar-item>
    </van-tabbar>

  </div>
</template>

<script>
export default {
  name:'Index',
  data(){
    return{
      active:0,
    }
  }
}

</script>
<style scope>
.footer{
  display: flex;
}
</style>
