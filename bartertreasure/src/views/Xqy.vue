<template>
  <div>
    <van-nav-bar
      :fixed="true"
      left-text="返回"
      right-text="更多"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <div class="inner">
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item,i) in list" :key="i">
          <img :src="item.path" alt style="height:200px;height:300px" />
        </van-swipe-item>
      </van-swipe>
      <van-row type="flex" class="ms">
        <van-col span="6">
          ￥
          <span>{{money}}</span>
        </van-col>
        <van-col span="6">
          商品：
          <span>{{goodsName}}</span>
        </van-col>
        <van-col span="6" style="color:red">{{discount+'折'}}</van-col>
      </van-row>
      <van-divider />
      <van-row type="flex" class="ms">
        <van-col span="6">
          <van-button plain type="primary" size="mini">自营</van-button>
        </van-col>
        <van-col span="6">
          <span>{{brand}}</span>
        </van-col>
        <van-col span="6" style="color:red">[{{commQuality}}]</van-col>
      </van-row>
      <van-divider />
      <van-row type="flex" justify="space-between" class="ms">
        <van-col span="6">
          <van-button plain type="primary" size="mini">分期</van-button>
        </van-col>
        <van-col span="6">
          <span>[花呗]</span>
        </van-col>
        <van-col span="6">免息</van-col>
      </van-row>
      <van-divider />
      <van-divider />
      <van-row type="flex" justify="space-between" class="ms">
        <van-col span="6">
          <van-button plain hairline type="danger" size="mini">服务</van-button>
        </van-col>
        <van-col span="6">
          <span>专业保真</span>
        </van-col>
        <van-col span="6">质保12个月</van-col>
      </van-row>
      <van-divider />
      <van-row type="flex" justify="space-between" class="ms">
        <van-col span="6">商品信息:</van-col>
      </van-row>
      <van-divider />
      <van-row type="flex" justify="space-around" class="ms">
        <van-col span="6">编号</van-col>
        <van-col span="6">112826</van-col>
        <van-col span="6"></van-col>
      </van-row>
      <van-divider />
      <van-row type="flex" justify="space-around" class="ms">
        <van-col span="6">品牌</van-col>
        <van-col span="6">阿玛尼</van-col>
        <van-col span="6"></van-col>
      </van-row>
      <van-divider />
      <van-row type="flex" justify="space-around" class="ms">
        <van-col span="6">品牌</van-col>
        <van-col span="6">阿玛尼</van-col>
        <van-col span="6"></van-col>
      </van-row>
      <van-divider />
      <van-row type="flex" justify="space-around" class="ms">
        <van-col span="6">编号</van-col>
        <van-col span="6">112826</van-col>
        <van-col span="6"></van-col>
      </van-row>
      <van-divider />
      <van-row type="flex" justify="space-around" class="ms">
        <van-col span="6">编号</van-col>
        <van-col span="6">112826</van-col>
        <van-col span="6"></van-col>
      </van-row>
      <van-divider />
    </div>
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon" />
      <van-goods-action-button type="warning" text="加入购物车" @click="onClickButton" />
      <van-goods-action-button type="danger" text="立即购买" @click="onClickButton" />
    </van-goods-action>
  </div>
</template>
<script>
import axios from "axios";
import qs from "qs";
export default {
  data() {
    return {
      list: [],
      money: "",
      goodsName: "",
      discount: "",
      commQuality: "",
      brand: ""
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      Toast("按钮");
    },
    onClickIcon() {
      Toast("点击图标");
    },
    onClickButton() {
      axios({
        method: "post",
        url: "http://106.12.14.214:8889/luxury/shoppingCart/addCart",
        data: qs.stringify({ "uid": 1, "gid": 1 })
      }).then(data => {
       // console.log(data);
        this.$router.push("/cart");
      });
    }
  },
  mounted() {
    var id = this.$route.params.id.split("=")[1];
    var _this = this;
    axios({
      methods: "post",
      url: "http://106.12.14.214:8889/luxury/goods/goodsDetail",
      params: {
        id: id
      }
    }).then(data => {
      // console.log(data);
      // console.log(_this.$route.params.id);
      _this.money = data.data.money;
      _this.goodsName = data.data.goodsName;
      _this.discount = data.data.discount;
      _this.commQuality = data.data.commQuality;
      _this.brand = data.data.brand;
      _this.list = data.data.list;
    });
  }
};
</script>

<style scope>
.inner {
  overflow: auto;
}
img {
  width: 300px;
  height: 200px;
}
.ms {
  font-size: 12px;
}
</style>