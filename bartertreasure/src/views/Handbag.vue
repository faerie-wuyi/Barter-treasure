<template>
  <div >
    <van-divider>品牌推荐</van-divider>
 
<van-grid :border="false" :column-num="3" style='font-size:12px;'>
  
     <div v-for="(item,i) in list" :key="i"  >
          <img
            src="http://img2.imgtn.bdimg.com/it/u=743028019,327194179&fm=26&gp=0.jpg"
            alt
            @click="map()"
            style="height:100px;width:100px"
          />
          <p>{{item.typeName}}</p>
        </div>
  
</van-grid>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "",
  data() {
    return {
      list: []
    };
  },
  mounted() {
    axios({
      methods: "post",
      url: "http://106.12.14.214:8889/luxury/type/show"
    }).then((data) => {
      //console.log(data.data[0].list);
      this.list = data.data[0].list;
    });
  },
  methods: {
    map() {
      this.$router.push("/brandtj");
    }
  }
};
</script>

<style>
</style>

