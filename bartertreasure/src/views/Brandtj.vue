<template>
  <div>
    <p>商品分类</p>
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
      <van-grid-item v-for="(item,i) in list" :key="i">
        <van-image @click="app(i-1+2)" :src="item.pimg" />
        <div>
          <span>￥{{item.pprice}}</span>
        </div>
      </van-grid-item>
    </van-grid>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      list: [],
      value: 0,
      switch1: false,
      switch2: false,
      switch3: false,
      option: [
        { text: "大牌包包", value: 0 },
        { text: "鞋履", value: 1 },
        { text: "手表", value: 2 }
      ]
    };
  },
  methods: {
    onConfirm() {
      this.$refs.item.toggle();
    },
    app(id) {
      this.$router.push("/xqy/id=" + id);
    }
  },
  mounted() {
    var _this = this;
    axios({
      //methods:'post',
      url: "http://jx.xuzhixiang.top/ap/api/productlist.php",
      params: { uid: 17759 }
    }).then(data => {
      console.log(data.data);
      _this.list = data.data.data;
    });
  }
};
</script>

<style>
</style>
