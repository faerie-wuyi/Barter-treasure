<template>
  <div>
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <img src="../assets/logo.png" alt />
      </van-swipe-item>
      <van-swipe-item>
        <img src="../assets/logo.png" alt />
      </van-swipe-item>
      <van-swipe-item>
        <img src="../assets/logo.png" alt />
      </van-swipe-item>
      <van-swipe-item>
        <img src="../assets/logo.png" alt />
      </van-swipe-item>
    </van-swipe>
    <van-divider>品牌推荐</van-divider>
    <van-grid :border="false" :column-num="3" gutter='14px' >
  <van-grid-item>
    <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" @click='tianjia()' />
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
    <!-- <van-grid>
      <van-grid :gutter="10" :clickable="true">
        <van-grid-item
          @click="map()"
          v-for="value in 9"
          :key="value"
          icon="../assets/logo.png"
          text="包包"
        />
      </van-grid>
    </van-grid> -->
  </div>
</template>
<script>
export default {
  name: "",
  data() {
    return {};
  },
  methods: {
    tianjia() {
      this.$router.push("/brandtj");
    }
  }
};
</script>

<style>
</style>
