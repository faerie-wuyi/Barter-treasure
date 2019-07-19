<template>
  <div>
    <van-search
      v-model="value"
      placeholder="搜索你想要的的东东"
      show-action
      shape="round"
      @search="onSearch"
    >
      <div slot="action" @click="onSearch">搜索</div>
    </van-search>

    <van-row>
      <van-col span="4">
        <van-sidebar v-model="activeKey">
          <van-sidebar-item title="标签名称" />
          <van-sidebar-item title="标签名称" />
          <van-sidebar-item title="标签名称" />
          <van-sidebar-item title="标签名称" />
          <van-sidebar-item title="标签名称" />
        </van-sidebar>
      </van-col>

      <van-col span="12">
          <van-swipe :autoplay="3000" indicator-color="white">
            <van-swipe-item><img src="../assets/logo.png" alt=""></van-swipe-item>
            <van-swipe-item><img src="../assets/logo.png" alt=""></van-swipe-item>
            <van-swipe-item><img src="../assets/logo.png" alt=""></van-swipe-item>
            <van-swipe-item><img src="../assets/logo.png" alt=""></van-swipe-item>
          </van-swipe>
     <van-divider>品牌推荐</van-divider>
      </van-col>
     
    </van-row>
    
  </div>
</template>


<script>
export default {
  name: "Category",
  data() {
    return {
      value: "",
      activeKey: 0
    };
  },
  methods: {
    onSearch() {
      console.log(1);
    },
    onCancel() {
      console.log(2);
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

img {
 
  height: 100px; 
}
</style>
