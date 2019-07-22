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
        <van-swipe-item>
          <img src="https://img.yzcdn.cn/vant/apple-2.jpg" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="https://img.yzcdn.cn/vant/apple-2.jpg" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="https://img.yzcdn.cn/vant/apple-2.jpg" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="https://img.yzcdn.cn/vant/apple-2.jpg" alt />
        </van-swipe-item>
      </van-swipe>
      <van-row type="flex" class="ms">
        <van-col span="6">
          ￥
          <span>3720</span>
        </van-col>
        <van-col span="6">
          市场价：
          <span>6850</span>
        </van-col>
        <van-col span="6">6折</van-col>
      </van-row>
      <van-divider />
      <van-row type="flex" class="ms">
        <van-col span="6">
          <van-button plain type="primary" size="mini">自营</van-button>
        </van-col>
        <van-col span="6">
          <span>单肩包</span>
        </van-col>
        <van-col span="6">[xx新]</van-col>
      </van-row>
      <van-divider />
      <van-row type="flex" justify="space-between" class="ms">
        <van-col span="6">
          <van-button plain type="primary" size="mini">分期</van-button>
        </van-col>
        <van-col span="6">
          <span>[****]</span>
        </van-col>
        <van-col span="6">***</van-col>
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
        <van-col span="6">***</van-col>
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
export default {
  methods: {
    onClickLeft() {
      this.$router.go(-1);
      //Toast('返回');
    },
    onClickRight() {
      Toast("按钮");
    },
    onClickIcon() {
      Toast("点击图标");
    },
    onClickButton() {
      this.$router.push("/cart");
    }
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