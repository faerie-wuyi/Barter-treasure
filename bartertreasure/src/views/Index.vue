<template>
  <div>
    <router-view></router-view>
    <div id="inner">
      <!-- active表示当前索引选中的值 -->
      <van-tabbar v-model="active" active-color="lightgreen">
        <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
        <van-tabbar-item icon="label" to="/category">分类</van-tabbar-item>
        <van-tabbar-item icon="add"  to="/release">发布</van-tabbar-item>
        <van-tabbar-item icon="shopping-cart-o" to="/cart">购物车</van-tabbar-item>
        <van-tabbar-item icon="manager-o" to="/user">我的</van-tabbar-item>
      </van-tabbar>
    </div>

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
</style>
