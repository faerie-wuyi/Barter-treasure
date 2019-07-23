<template>
   <div id="my">
     <div class="head">
        <van-image
          @click="click()"
          :round="true"
          class="touxiang"
          width="80px"
          height="80px"
          :src="imgsrc"
        />
        
        <span class="name">{{name}}</span>
        <van-row class="row">
          <van-col span="12">{{money}}</van-col>
          
          <van-col span="12">{{zhekou}}</van-col>
        </van-row>
        <van-row class="row row1">
          <van-col span="12">余额</van-col>
          
          <van-col span="12">优惠券</van-col>
        </van-row>
        <van-notice-bar
          class="gonggao"
          :text="'订阅上新  '+text"
          left-icon="volume-o"
          mode="closeable"
        />
     </div>
     <div style="margin-top:50px">
       <div>
        <van-button @click="tap1()" plain type="primary">我是买家</van-button>
        <van-button @click="tap2()" plain type="primary">我是卖家</van-button>
       </div> 
        <div id="box1" style="display:initial">
          <van-grid>
            <van-grid-item
              icon="coupon-o"
              text="全部订单"
              to="/dingdan"
            />
            <van-grid-item
              icon="balance-o"
              text="待付款"
              to="/dingdan"
            />
            <van-grid-item
              icon="logistics"
              text="待收货"
              to="/dingdan"
            />
            <van-grid-item
              icon="passed"
              text="已完成"
              to="/dingdan"
            />
          </van-grid>

        </div>
        <div id="box2" style="display:none">
          <van-grid :column-num="2">
            <van-grid-item
              icon="add-o"
              text="我要寄卖"
            />
            <van-grid-item
              icon="exchange"
              text="我要转卖"
            />
          </van-grid>
        </div>
        <div>
          <p style="margin: 5px 0">我的服务</p>
          <van-grid :column-num="4">
            <!-- <van-grid-item
              icon="like-o"
              text="收藏"
            /> -->
            <van-grid-item
              icon="gift-o"
              text="捡漏专区"
            />
            <van-grid-item
              icon="clock-o"
              text="最近浏览"
            />
            <van-grid-item
              icon="location-o"
              text="地址管理"
              @click="address()"
            />
            <van-grid-item
              icon="setting-o"
              text="设置"
            />
          </van-grid>
        </div>
        <!-- hhhhhh -->
        <div>
          <p style="margin: 5px 0">猜你喜欢商品名称</p>
          <div class="likefather">
            <div @click="godetail()" class="like left">
              <img :src="likeimg" alt="">
              <p>{{likename}}</p>
              <span>￥{{likeprice}}</span>
            </div>
            <div class="like left">
              <img :src="likeimg" alt="">
              <p>{{likename}}</p>
              <span>￥{{likeprice}}</span>
            </div>
            <div class="like left">
              <img :src="likeimg" alt="">
              <p>{{likename}}</p>
              <span>￥{{likeprice}}</span>
            </div>
          </div>
        </div>
     </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  name:'User',
  data(){
    return{
      imgsrc:"https://img.yzcdn.cn/vant/cat.jpeg",
      name:"这是id展示区域",
      money:"0",
      zhekou:"0",
      text:"哈哈哈哈哈哈哈哈哈哈或或或或或或或或或或或或或或或或或",
      like:[],
      likeimg:"https://img.yzcdn.cn/vant/cat.jpeg",
      likename:"猜你喜欢商品名称",
      likeprice:"99.99",
      
    }
  },
  methods:{
    click(){
      //点击头像修改个人信息，
      this.$router.push("/usermsg")
    },
    tap1(){
      box1.style.display="initial"
      box2.style.display="none"
    },
    tap2(){
      box1.style.display="none"
      box2.style.display="initial"
    },
    address(){
      this.$router.push("/address")
    },
    godetail(){
      console.log(123444)
    }
  },
  mounted() {
    var _this = this
    // axios({
    //   url:"ywb/api/showuser"
    // }).then((data)=>{
    //   console.log(data)
    //   _this.imgsrc = data.img
    //   _this.name = data.username
    //    _this.money=data.money
    //   _this.zhekou=data.zhekou
    // })
    
  },
}

</script>
<style scope>
*{margin: 0;padding: 0;}
#app{margin-bottom: 50px;}
.none{
  display: none
}
.left{float: left;}
.head{
  background: red;
  height: 190px;
}
.touxiang{
position: absolute;
left: 30px;
top: 50px;
border-radius: 50%;
overflow: hidden;
}
.name{
  position: absolute;
  top: 60px;
  left: 150px;
}
.row{
  position: absolute;
  top: 140px;
  width: 100%
}
.row1{
  top: 160px;
}
.gonggao{
  position: absolute;
  width: 93%;
  top:190px;
}
.likefather{
  overflow: hidden;
  height: auto;
}
.like{
  width: 48%;
  height: 300px;
  border: 1px solid #ccc;
  margin: 2px;
}
.like img{
  width: 98%;
  height: 250px;
}
</style>
