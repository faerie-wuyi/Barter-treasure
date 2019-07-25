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

    <van-row style=" display: flex;">
      <van-col>
        <van-sidebar v-model="activeKey">
          <van-sidebar-item title="推荐" to="/brand" />
          <van-sidebar-item title="名包" to="/handbag" />
          <van-sidebar-item title="配饰" to="/ornament" />
          <van-sidebar-item title="名表" to="/meart" />
          <van-sidebar-item title="名鞋" to="/shoe" />
          <van-sidebar-item title="其他" to="/Other" />
        </van-sidebar>
      </van-col>
      <van-col style="float:right">
        <router-view />
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
