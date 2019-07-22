<template>
    <div>
        <slot name="test">
            <!-- <h2>占位符</h2> -->
               <slot name="zhanwei">
              <img src="../assets/1.png" />
              <p>购物车还是空的,去挑几件喜欢的商品吧~</p>
              <div class="dianji">
                <van-button to="/brand" :round="true" plain hairline type="primary">去逛一逛</van-button>
                <van-button to="/brand" :round="true" plain hairline type="danger">看看收藏</van-button>
              </div>
            </slot>
        </slot>
        <!-- <van-radio-group v-model="radio" slot="zhanwei">
                <van-checkbox v-model="result" icon-size="14px"></van-checkbox>
              </van-radio-group>
              <van-card
                num="1"
                price="2.00"
                desc="描述信息"
                title="商品标题"
                thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
              /> -->
    </div>
</template>
<script>
export default {
    
}
</script>

