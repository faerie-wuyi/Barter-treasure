<template>
<div>
   <p>配饰分类</p>
<van-grid :border="false" :column-num="3" style='font-size:12px'>
   <div  v-for='(item,i) in list' :key='i'>
   <img src='http://img4.imgtn.bdimg.com/it/u=2447399991,2006364107&fm=26&gp=0.jpg' alt=""  @click='app()'  style="height:100px;width:100px">
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
      value: 0,
      list:[],
      switch1: false,
      switch2: false,
      switch3: false,
      option: [
        { text: '大牌包包', value: 0 },
        { text: '鞋履', value: 1 },
        { text: '手表', value: 2 }
      ]

    }
  },
  mounted() {
    axios({
      methods: "post",
      url: "http://106.12.14.214:8889/luxury/type/show"
    }).then((data) => {
     // console.log(data.data[2].list);
      this.list = data.data[2].list;
    });
  },
     methods: {
    onConfirm() {
      this.$refs.item.toggle();
    },
    app(){
      this.$router.push('/brandtj')
    }
  }
}
</script>

<style>

</style>
