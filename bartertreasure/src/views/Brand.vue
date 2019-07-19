<template>
    <van-list
  v-model="loading"
  :finished="finished"
  finished-text="没有更多了"
  @load="onLoad"
>
  <van-cell
    v-for="item in list"
    :key="item"
    :title="item"
  />
</van-list>
</template>
<script>
export default {
    name:'brand',
    data(){
        return{
              list: [],
      loading: false,
      finished: false
        }
    },
     methods: {
   
     }
    
}
</script>

<style>

</style>
