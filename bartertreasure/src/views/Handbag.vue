<template>
  <div>
      <p>11111</p>
    <!-- <van-swipe :autoplay="3000" indicator-color="white">
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
    </van-swipe> -->
    <van-divider>品牌推荐</van-divider>
    <van-grid>
      <van-grid :gutter="10" :clickable="true">
        <van-grid-item
          @click="map()"
          v-for="value in 9"
          :key="value"
          icon="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1563630190&di=c307f05ce395ed672c7490a832286659&src=http://ci.xiaohongshu.com/a61b598b-99f2-4696-9871-505ca5fa0f6d@r_750w_750h_ss1.jpg"
          text="包包"
        />
      </van-grid>
    </van-grid>
  </div>
</template>
<script>
export default {
  name: "",
  data() {
    return {};
  },
  methods: {
    map(){
      this.$router.push('/xqy')
    }
  }
};
</script>

<style>
</style>

