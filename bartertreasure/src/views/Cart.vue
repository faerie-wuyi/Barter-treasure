<template>
  <div>
    <van-nav-bar :fixed="true" title="购物袋" left-text="返回" left-arrow @click-left="onClickLeft" />
    <div class="jiazai">
      <van-count-down class="timer" :time="time" format="您还剩余 mm 分 ss 秒支付订单" />
      <div>
        <div>
          <div id="com">
            <v-com>
              <div :slot="aaa" v-for="(item,index) in list" :key="index">
                <van-card
                  id="id"
                  :num="item.count"
                  :price="item.goodsVo2.money"
                  :desc="item.goodsVo2.goodsName"
                  :title="item.goodsBrand.brandName"
                  :thumb="item.goodsPath.path"
                >
                  <div slot="footer">
                    <van-stepper
                      v-model="item.count"
                      :disable-input="true"
                      :step="step"
                      @plus="jia(index,item.id,item.count)"
                      @minus="jian(index,item.id,item.count)"
                    />
                    <van-checkbox
                      v-model="item.check"
                      class="checkBox"
                      @click="gou(item.check,index)"
                    ></van-checkbox>
                    <button @click="del(item.id,index)" style="background:pink;border:pink;">删除</button>
                  </div>
                </van-card>
              </div>
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
      :price="sum"
      button-text="去下单"
      @submit="onSubmit"
    >
      <van-checkbox v-model="checked" @click="all()">全选</van-checkbox>
    </van-submit-bar>
  </div>
</template>

<script>
import axios from "axios";
import Test from "./Test";
import { NavBar } from "vant";
export default {
  components: {
    "v-com": Test
  },
  name: "Cart",
  data() {
    return {
      value: "1",
      list: [],
      checked: false,
      time: 15 * 60 * 1000,
      checked: false,
      radio: "",
      result: false,
      result1: false,
      aaa: "",
      step: 1,
      sum: 0,
      index1: []
    };
  },
  methods: {
    onSubmit() {
      this.$router.push("/order");
    },
    str() {
      this.$router.push("/xqy");
    },
    onClickLeft() {
      this.$router.go(-1);
    },
    //点击加号
    jia(index, id, num) {
      console.log(num, id);
      axios({
        url: "http://106.12.14.214:8889/luxury/shoppingCart/changeCount",
        params: { id: id, count: num + 1 }
      }).then(data => {
        if (this.list[index].check) {
          this.sum += this.list[index].money * 1 * 100;
        }
      });
    },
    jian(index, id, num) {
      console.log(num, id);
      axios({
        url: "http://106.12.14.214:8889/luxury/shoppingCart/changeCount",
        params: { id: id, count: num - 1 }
      }).then(data => {
        if (this.list[index].check) {
          this.sum += this.list[index].money * 1 * 100;
        }
      });
    },
    del(id, index) {
      var num = -this.list[index].goodsNum - 1;
      axios({
        url: "http://106.12.14.214:8889/luxury/shoppingCart/del",
        params: { uid: 1, ids: id }
      }).then(data => {
        console.log(data);
        //location.reload()
        axios({
            			url:"http://106.12.14.214:8889/luxury/shoppingCart/showByPage",
            			params: { uid:1, ids: id }
            		}).then((data)=>{
            			this.list=data.data.info
            		})
      });
    },
    all() {
      if (!this.checked) {
        for (let val of this.list) {
          val.check = true;
          this.sum += val.goodsVo2.money * 100 * val.goodsVo2.count;
          console.log(val.check);
        }
      } else {
        for (let val of this.list) {
          val.check = false;
          this.sum = 0;
        }
      }
    },
    gou(danxuan, index) {
      console.log(this.list);
      //单个商品的总价
      let p =
        parseFloat(this.list[index].goodsVo2.money) *
        parseFloat(this.list[index].count).toFixed(2);
      //checkbox索引
      let _index = index;
      if (!danxuan) {
        //如果选中
        this.sum += p * 100;
        this.index1.push(_index);
        //选中的checkbox数组
        //console.log(this.index1)
        this.list[_index].danxuan = "true";
      } else {
        //取消选中执行操作
        this.sum -= p * 100;
        this.index1.splice(_index, 1);
        this.list[_index].danxuan = "";
        console.log(this.index1);
        //如果总价为0，取消全选
        if (this.sum == 0) {
          this.checked = false;
        }
      }

      var indLength = this.index1.length;
      var listLength = this.list.length;
      if (indLength == listLength) {
        this.checked = true;
      } else {
        this.checked = false;
      }
    }
  },
  mounted() {
    axios({
      method: "post",
      url: "http://106.12.14.214:8889/luxury/shoppingCart/showByPage",
      params: { uid: 1 }
    }).then(data => {
      this.list = data.data.info;
      console.log(data.data.info);
      if (this.list.length != 0) {
        this.aaa = "zhanwei";
      } else {
        alert("请添加商品");
      }
    });
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
