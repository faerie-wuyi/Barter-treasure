<template>
  <div>
    <van-swipe :autoplay="3000" indicator-color="white" style='width:300px;height:200px;'>
      <van-swipe-item v-for="(item,i) in list" :key='i'>
        <img :src="item.goodsPath" alt  style='width:250px;height:200px'/>
      </van-swipe-item>                                                                                                                   -->
    </van-swipe>
    <van-divider>热门推荐</van-divider>

  
      <div>
      
      </div>

  </div>
</template>
<script>
import axios from 'axios';
export default {
  name: "",
  data() {
    return {
       list:[],
      // i:'',
       //item:''
    }
    
  },
   mounted() {
    axios({
      methods:"post",
      url:'http://106.12.14.214:8889/luxury/slideshow/list'
     
    }).then((data)=>{
     // console.log(data.data)
      this.list=data.data
    })
   
  },
  methods: {
    tianjia() {
      this.$router.push("/brandtj");
    }
  }
}
</script>

<style>
</style>
