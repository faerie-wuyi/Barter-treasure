<template>
  <div>
    <van-nav-bar title="收银台" left-arrow @click-left="onClickLeft" />
    <van-count-down class="timer" :time="time" format="您还剩余 mm 分 ss 秒支付订单" />
    <div class="Pay">
      <p class="pay1">支付金额</p>
      <div class="pay2">
        ￥
        <span>3370</span>
      </div>
    </div>
    <div class="wx">
      <van-row type="flex" justify="space-between" class="payy">
        <van-col span="6">
          <van-icon name="wechat" color="green" />微信
        </van-col>
        <van-col span="2">
         <van-checkbox v-model="result"></van-checkbox>
        </van-col>
      </van-row>
      <van-row type="flex" justify="space-between" class="payy">
        <van-col span="6">
          <van-icon name="alipay" color="#55f" />支付宝
        </van-col>
        <van-col span="2">
            <van-checkbox v-model="result"></van-checkbox>
        </van-col>
      </van-row>

      <van-row type="flex" justify="space-between" class="payy">
        <van-col span="6">
          <van-icon name="more" color="#55f" />其他方式
        </van-col>

        <van-col span="2">
           <van-checkbox v-model="result"></van-checkbox>
        </van-col>
      </van-row>
    </div>
    <div class="nows" @click="btn()">立即付款</div>
  </div>
</template>
<script>
export default {
  name: "Payment",
  data() {
    return {
      time: 5 * 60 * 1000,
     result:false
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    btn() {
      alert("已支付成功");
      this.$router.push("/index");
    }
  }
};
</script>
<style>
.Pay {
  width: 100%;
  height: 150px;
  background: #f00;
}
.pay1 {
  width: 100%;
  height: 30px;
  padding-top: 20px;
  color: #fff;
  font-size: 14px;
}
.pay2 {
  font-size: 24px;
  font-weight: bold;
  color: #fff;
}
.wx {
  width: 90%;
  height: 180px;
  background: #fff;
  position: absolute;
  top: 186px;
  left: 24px;
  border-radius: 20px;
  border: 1px solid #ccc;
}
.payy {
  margin: 30px 0;
}
.nows {
  width: 90%;
  height: 50px;
  background: #f00;
  border-radius: 50px;
  margin-top: 170px;
  margin-left: 24px;
  text-align: center;
  line-height: 50px;
  font-size: 16px;
  color: #fff;
}
</style>
