<template>
<div>
    <p>商品分类55555</p>
  <van-dropdown-menu>
  <van-dropdown-item v-model="value" :options="option" />
  <van-dropdown-item title="筛选" ref="item">
    <van-switch-cell v-model="switch1" title="1000以下" />
    <van-switch-cell v-model="switch2" title="1000-3000" />
     <van-switch-cell v-model="switch3" title="3000以上" />
    <van-button block type="info" @click="onConfirm">确认</van-button>
  </van-dropdown-item>
</van-dropdown-menu>

<van-grid :border="false" :column-num="3">
  <van-grid-item>
    <van-image  @click='app()' src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2466035006,3875392428&fm=26&gp=0.jpg" />
   <div><span>111</span><van-button  type="primary"  size="mini">加入购物车</van-button></div>
   
  </van-grid-item>
  <van-grid-item>
    <van-image @click='app()' src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2466035006,3875392428&fm=26&gp=0.jpg" />
    <div><span>111</span><van-button  type="primary"  size="mini">加入购物车</van-button></div>
  </van-grid-item>
  <van-grid-item>
    <van-image src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2466035006,3875392428&fm=26&gp=0.jpg" />
    <div><span>111</span><van-button  type="primary"  size="mini">加入购物车</van-button></div>
  </van-grid-item>
   <van-grid-item>
    <van-image src="https://img.yzcdn.cn/vant/apple-3.jpg" />
    <div><span>111</span><van-button  type="primary"  size="mini">加入购物车</van-button></div>
  </van-grid-item>
   <van-grid-item>
    <van-image src="https://img.yzcdn.cn/vant/apple-3.jpg" />
    <div><span>111</span><van-button  type="primary"  size="mini">加入购物车</van-button></div>
  </van-grid-item>
   <van-grid-item>
    <van-image src="https://img.yzcdn.cn/vant/apple-3.jpg" />
    <div><span>111</span><van-button  type="primary"  size="mini">加入购物车</van-button></div>
  </van-grid-item>
</van-grid>
</div>
</template>
<script>
export default {
    data() {
    return {
      value: 0,
      switch1: false,
      switch2: false,
      switch3: false,
      option: [
        { text: '大牌包包', value: 0 },
        { text: '鞋履', value: 1 },
        { text: '手表', value: 2 }
      ]

    }
  },
     methods: {
    onConfirm() {
      this.$refs.item.toggle();
    },
    app(){
      this.$router.push('/xqy')
    }
  }
}
</script>

<style>

</style>
