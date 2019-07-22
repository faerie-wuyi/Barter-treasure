<template>
<div>
    <van-divider>品牌推荐</van-divider>
   <van-grid :border="false" :column-num="3">
  <van-grid-item>
    <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg"  @click='tianjia()'/>
       <p>111<van-button type="primary" size="mini">添加购物车</van-button></p>
  </van-grid-item>
  <van-grid-item>
    <van-image src="https://img.yzcdn.cn/vant/apple-2.jpg" />
       <p>111<van-button type="primary" size="mini">添加购物车</van-button></p>
  </van-grid-item>
  <van-grid-item>
    <van-image src="https://img.yzcdn.cn/vant/apple-3.jpg" />
       <p>111<van-button type="primary" size="mini">添加购物车</van-button></p>
  </van-grid-item>
</van-grid>
</div>
    
</template>
<script>
export default {
     methods: {
    tianjia() {
      this.$router.push("/brandtj");
    }
  }
}
</script>
<style>

</style>
