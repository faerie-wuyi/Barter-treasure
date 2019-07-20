<template>
   <div>
     <van-search class="search" shape="round" placeholder="请输入搜索关键词" v-model="value" />
     <div id="inner">
        <van-swipe :autoplay="3000" indicator-color="white">
          <van-swipe-item v-for="(img,i) in images" :key="i">
            <img class="swipe" :src="img">
          </van-swipe-item>
        </van-swipe>

        <div class="countDown">距离活动结束仅剩<van-count-down class="count" :time="time" />,立即抢购→</div>
        <div class="reward">抢红包</div>

        <div class="recommend">
          <h4 class="title">今日推荐<span>更多</span></h4>
          <div class="content"></div>
        </div>

        <div class="recommend">
          <h4 class="title">捡漏专区<span>更多</span></h4>
          <div class="content"></div>
        </div>

        <div class="recommend">
          <h4 class="title">热门商品<span>更多</span></h4>
          <div class="content"></div>
        </div>

        <div class="recommend">
          <h4 class="title">热门品牌<span>更多</span></h4>
          <div class="content"></div>
        </div>
     </div>


   </div>
</template>

<script>
export default {
  name:'Home',
  data(){
    return{
      value:'',
      num:6,
      active:'0',
        time: 30 * 60 * 60 * 1000,
      images:[
        'http://p6.qhimg.com/bdr/__85/t01aee5cf7c30a0d9c1.jpg',
        'http://p5.qhimg.com/bdm/341_210_0/t01d542fbbe30219454.jpg',
        'http://p0.qhimg.com/bdm/341_210_0/t017bb05c286722c532.jpg',
        'http://p6.qhimg.com/bdm/683_422_0/t01aee5cf7c30a0d9c1.jpg'
      ]
    }
  },
  methods:{
    toRecommend(){

      this.$router.push('/recommend')
    },
    toBags(){
      this.$router.push('/bags')
    },
    toAccessories(){
      this.$router.push('/accessories')

    },
    toWomenDress(){
      this.$router.push('/womenDress')
    },
    toWomenShoes(){
      this.$router.push('/womenShoes')
    },
    toMen(){
      this.$router.push('/Men')

    }
  },
  mounted(){

  }
}

</script>
<style scope>
.search{
  width: 100%;
  position: fixed;
  top:0;
  z-index: 10;
}
#inner{
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-bottom: 50px;
  margin-top:54px;
}
.swipe{
  height: 200px;
  width: 100%;
  color:rgb(151, 221, 151);
}
.countDown{
  width: 95%;
  height: 25px;
  background: pink;
  margin: 10px auto;
}
.countDown .count{
  display: inline;
}
.reward{
  width: 95%;
  height: 65px;
  background: rgb(226, 90, 113);
  margin: 0 auto;
}
.recommend{
  background: rgb(243, 129, 148);
  width: 95%;
  min-height: 90px;
  border-radius: 5%;
  margin: 20px auto;
}
.title{
  text-align: left;
  width: 95%;
  margin: 0 auto;
}
.title span{
  float:right;
}
.content{
  width: 95%;
  min-height: 60px;
  background: rgb(129, 167, 129);
  margin: 0 auto;
}
</style>
