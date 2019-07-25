<template>
  <div>
    <van-divider>名鞋推荐</van-divider>
    <van-grid :border="false" :column-num="2" style="font-size:12px">
      <div v-for="(item,i) in list" :key="i">
        <img
          src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563978665621&di=dead3e0e7a37b2c25a1680e18c74d6f4&imgtype=0&src=http%3A%2F%2Fpic.90sjimg.com%2Fdesign%2F00%2F56%2F06%2F74%2F58db1de226707.png"
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
  data() {
    return {
      list: []
    };
  },
  mounted() {
    axios({
      methods: "post",
      url: "http://106.12.14.214:8889/luxury/type/show"
    }).then(data => {
      //console.log(data.data[3].list);
      this.list = data.data[3].list;
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
