<template>
    <div>
        <van-nav-bar
            :title="title"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
        />
        <van-address-list
            v-model="chosenAddressId"
            :list="list"
            @add="onAdd"
            @edit="onEdit"
        />
       <div id="adress">
           <van-cell-group>
            <van-field
                id="adressname"
                v-model="lianxiren"
                required
                clearable
                label="用户名"
                right-icon="question-o"
                placeholder="请输入用户名"
                @click-right-icon="$toast('question')"
            />
            <van-field
                id="adresstel"
                v-model="tel"
                type="tel"
                label="联系电话"
                placeholder="请输入联系电话"
                required
            />
            <van-field
            id="adressadress"
                v-model="adress"
                type="tel"
                label="地址"
                placeholder="请输入地址"
                required
            />
            <van-button @click="tijiao" type="info">确认</van-button>
             
            </van-cell-group>
       </div>


    </div>
</template>
<script>
import axios from 'axios';
export default {
    name:"Address",
    data(){
        return{
            title:"地址管理",
            chosenAddressId: '1',
            username:"",
            lianxiren:"",
            tel:"",
            adress:"",
            list: [
                {
                id: '1',
                name: '张三',
                tel: '13000000000',
                address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
                }
            ]
        }
    },
    methods:{
        onClickLeft() {
            this.$router.go(-1)
        },
        onAdd() {
            adress.style.display="initial"
        },
        tijiao(){
            this.list.push({
                name:adressname.value,
                tel:adresstel.value,
                address:adressadress.value
            })
            adress.style.display="none"
        },
        onEdit() {
            //修改地址
            console.log(222)
        }
    }
}
</script>
<style scoped>
#adress{
    display: none
}
</style>
