<template>
   <div>
     <van-search class="search" shape="round" placeholder="请输入搜索关键词" v-model="ssmsg" show-action @keyup="onSearch"/>
     <ul class="ss">
       <li v-for="(item,i) in ssend" :key="i" @click="tap(item.id)">{{item.goodsName}}</li>
     </ul>
     <div id="inner">

        <van-swipe :autoplay="3000" indicator-color="white">
          <van-swipe-item v-for="img in images" :key="img.id" @click="tap(img.id)">
            <img class="swipe" :src="img.goodsPath">
          </van-swipe-item>
        </van-swipe>
        <h4>亲爱的{{this.$store.state.userName}}，欢迎来到易物宝</h4>
        <div class="recommend">
          <h4 class="title">今日推荐</h4>
          <van-card
            v-for="item in listTJ"
            :price="item.money"
            :desc="item.brand"
            :title="item.goodsName"
            :thumb="item.path"
            @click="tap(item.id)"
            :key="item.id"
          />

        </div>

        <div class="recommend">
          <h4 class="title">捡漏专区</h4>
          <van-card
              v-for="item in listJL"
            :price="item.money"
            :desc="item.brand"
            :title="item.goodsName"
            :thumb="item.path"
            @click="tap(item.id)"
            :key="item.id"
          />

        </div>
     </div>
   </div>
</template>

<script>
export default {
  name:'Home',
  data(){
    return{
      num:6,
      active:'0',
      images:[],
      ssmsg:'',
      ssall:[],
      ssend:[],
      listTJ:[],
      listJL:[],

      // time: 30 * 60 * 60 * 1000,
    }
  },
  computed:{

  },
  methods:{
    tap(id){
      this.$router.push('/Xqy/id=' + id)
    },
    onSearch(){
      this.$axios({
      method:'post',
      url:'http://106.12.14.214:8889/luxury/goods/search'
    }).then((data)=>{
        this.ssall = data.data;
        this.ssend = this.ssall.filter(item=>{
          return item.goodsName.match(this.ssmsg)
        }) //空则匹配所有
      })

    }
  },
  mounted(){
    //并发请求
    this.$axios.all([
      this.$axios.post('http://106.12.14.214:8889/luxury/slideshow/list'),
      this.$axios.post('http://106.12.14.214:8889/luxury/goods/listShow',{flag:1}), //今日推荐
      this.$axios.post('http://106.12.14.214:8889/luxury/goods/listShow',{flag:2})  //捡漏专区
    ]).then(this.$axios.spread((lunboResp,tuijianResp,jianlouResp)=>{
      this.images = lunboResp.data
      this.listTJ = tuijianResp.data
      this.listJL = jianlouResp.data
    }))//只有两个请求都完成才会成功，否则会被catch捕获
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
.ss{
  position: fixed;
  top:54px;
  z-index: 20;
  width: 100%;
  background: #fff;
}
#inner{
  height: 100%;
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
