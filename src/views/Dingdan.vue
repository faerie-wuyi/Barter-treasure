<template>
    <div>
        <van-nav-bar
            :title="title"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
        />
        <van-tabs v-model="active">
            <van-tab title="全部订单">
                <van-card
                    :price="cardprice"
                    :desc="carddesc"  
                    :title="cardtitle"
                    :thumb="cardimg"
                />
            </van-tab>
            <van-tab title="待付款">
                <van-card
                price="2.00"
                desc="描述信息"  
                title="商品标题"
                thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
                >
                <div slot="footer">
                    <van-button size="mini">去付款</van-button>
                </div>
                </van-card>
            </van-tab>
            <van-tab title="待收货">
                <van-card
                price="2.00"
                desc="描述信息"  
                title="商品标题"
                thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
                >
                <div slot="footer">
                    <van-button size="mini">确认收货</van-button>
                </div>
                </van-card>
            </van-tab>
            <van-tab title="已完成">
                <van-card
                    :price="cardprice"
                    :desc="carddesc"  
                    :title="cardtitle"
                    :thumb="cardimg"
                />
            </van-tab>
        </van-tabs>
    </div>
</template>
<script>
export default {
    name:'Dingdan',
    data(){
        return{
            title:"订单",
            active: 2,
            cardprice:"99.99",
            carddesc:"一个可以买可以卖的平台",
            cardtitle:"易物宝",
            cardimg:"https://img.yzcdn.cn/vant/t-thirt.jpg",
        }
    },
    methods:{
        onClickLeft() {
         this.$router.push("/user")
        }
       
    }
}
</script>
<style scoped>

</style>
