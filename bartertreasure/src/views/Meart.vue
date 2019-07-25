<template>
  <div>
   

    <van-divider>手表推荐</van-divider>
    <van-grid :border="false" :column-num="3" style='font-size:12px'>
      <div v-for='(item,i) in list' :key='i'>
        <img src="http://img1.a.maoyia.com/201906/15/11/11-01-44-25-1466194.jpg" alt @click="tianjia()"  style="height:100px;width:100px" />
         <p>{{item.typeName}}</p>
      </div>
    </van-grid>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data(){
return{
  list:[]
}
  },
   mounted() {
    axios({
      methods: "post",
      url: "http://106.12.14.214:8889/luxury/type/show"
    }).then((data) => {
     // console.log(data.data[1].list);
      this.list = data.data[1].list;
    });
  },
  methods: {
    tianjia() {
      this.$router.push("/brandtj");
    }
  }
};
</script>
<style>
</style>
