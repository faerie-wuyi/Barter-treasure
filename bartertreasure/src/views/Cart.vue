<template>
  <div>
    <van-nav-bar :fixed="true" title="购物袋" />
    <div class="jiazai">
      <van-count-down class="timer" :time="time" format="您还剩余 mm 分 ss 秒支付订单" />
      <div>
        <div>
          <div id="com">
            <v-com>
              <!-- <div :slot="aaa">
              <van-radio-group v-model="radio" >
                <van-checkbox v-model="result" icon-size="14px"></van-checkbox>
              </van-radio-group>
              <van-card 
                num="1"
                price="2.00"
                desc="描述信息"
                title="商品标题"
                thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
              />
              </div> -->
            </v-com>
          </div>

          <div></div>
        </div>
      </div>
      <p class="wenzi">
        超时商品
        <span>(1)</span>
        <span>以下商品重新加入就可以购买哦~</span>
      </p>
      <div class="sp">
        <van-card
          num="1"
          price="2.00"
          desc="描述信息"
          title="商品标题"
          thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
        >
          <div slot="tags">
            <van-tag plain type="danger">超时</van-tag>
          </div>
          <div slot="footer">
            <van-button size="mini" type="danger">加入购物车</van-button>
          </div>
        </van-card>
      </div>

      <div class="aixin">
        <van-icon name="like" color="#f00" size="24px" />发现心仪好物
        <van-icon name="like" color="#f00" size="24px" />
      </div>

      <van-grid :column-num="3">
        <van-grid-item
          @click="str()"
          v-for="value in 15"
          :key="value"
          icon="https://img.yzcdn.cn/vant/apple-3.jpg"
          text="文字"
        />
      </van-grid>
    </div>

    <van-submit-bar
      class="xiadan"
      :decimal-length="0"
      :price="0"
      button-text="去下单"
      @submit="onSubmit"
    >
      <van-checkbox v-model="checked">全选</van-checkbox>
    </van-submit-bar>
  </div>
</template>

<script>
import Test from "./Test";
export default {
  components: {
    "v-com": Test
  },
  name: "Cart",
  data() {
    return {
      checked: true,
      time: 15 * 60 * 1000,
      checked: true,
      radio: "",
      result: false,
      result1: false,
      aaa:''
    };
  },
  methods: {
    onSubmit() {
      this.$router.push("/order");
    },
    str() {
      this.$router.push("/xqy");
    }
  }
};
</script>
<style scope>
.timer {
  font-size: 14px;
  margin: 45.6px 0;
  background: pink;
}
.dianji {
  margin: 20px 0;
}
.wenzi {
  font-size: 14px;
}
.sp {
  overflow: auto;
}
.aixin {
  margin-top: 20px;
}
.jiazai {
  overflow: auto;
}
img {
  width: 122px;
  height: 107px;
}
</style>
