<template>
  <div>
    <van-grid :border="false" :column-num="2" style="font-size:12px">
      <div v-for="(item,i) in list" :key="i">
        <img
          src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563978810584&di=a91e741e3f82bf792563d99dafcab5c0&imgtype=0&src=http%3A%2F%2Fku.90sjimg.com%2Felement_origin_min_pic%2F16%2F09%2F03%2F1557ca7fc2cb3df.jpg"
          alt
          @click="map()"
          style="height:200px;width:300px"
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
    }).then((data) => {
      //console.log(data.data[4].list);
      this.list = data.data[4].list;
    });
  },
  methods: {
    map() {
      alert('该功能暂未开启，敬请期待')
    }
  }
};
</script>

<style>
</style>
