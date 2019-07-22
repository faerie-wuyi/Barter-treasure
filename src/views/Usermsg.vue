<template>
    <div>
        <van-nav-bar
            :title="title"
            left-text="返回"
            left-arrow
            right-text="修改个人信息"
            @click-right="onClickRight"
            @click-left="onClickLeft"
        />
        <ul>
            <li><span class="left">个人头像</span><span class="right" style="height: 60px;"><img :src="imgsrc"/></span></li>
            <li><span class="left">ID</span><span class="right">{{id}}</span></li>
            <li><span class="left">昵称</span><span class="right">{{name}}</span></li>
            
            <li @click="AddressList()"><span class="left">地址管理</span><span class="right">点击修改地址</span></li>
            <li><span class="left">是否卖家</span><span class="right">是</span></li>
            <li><span class="left">手机号</span><span class="right">{{phone}}</span></li>
            <li><span class="left">微信号</span><span class="right">绑定微信号送优惠券</span></li>

            <li><span class="left">版本号</span><span class="right">1.1.0</span></li>
            
            <li><van-button @click="onClickLeft"  size="large" type="danger">退出登录</van-button></li>
        </ul>
        <div id="msg">
            <p>
            <van-uploader :after-read="afterRead" />
            </p>
            <van-cell-group>
                <van-field id="name1" v-model="value" placeholder="请输入用户名" />
            </van-cell-group>
            <van-button @click="queren" type="info">确认</van-button>
             
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import { Dialog } from 'vant';

export default {
    name:"Usermsg",
    data() {
        return {
            title:"账户设置",
            imgsrc:"https://img.yzcdn.cn/vant/cat.jpeg",
            id:"000000",
            name:"这是昵称显示区域",
            phone:"132xxxxxxxx",
            show: false,
            value:""
        }
    },
    methods:{
        onClickLeft() {
         this.$router.go(-1)
        },
        onClickRight(){
            msg.style.top="46px"
        },
        queren(){
            msg.style.top="-200px"
            
            var _this=this
            // axios({
            //     url:"ywb/api/userupdate"
            //     }).then((data)=>{
            //     console.log(data)
            //     _this.name = name1.value
            //     _this.id=data.id
            //     _this.phone=data.phone
            //     })  
        },
        AddressList(){
            console.log(123)
            this.$router.push("/address")
            //此处为地址管理，点击li运行函数，弹出窗口修改地址
        },
        afterRead(file){
            console.log(file)
            this.imgsrc=file.content
        }
    },
    mounted() {
        
        var _this=this
        // axios({
        //     url:"ywb/api/usershow"
        //     }).then((data)=>{
        //     console.log(data)
        //     _this.imgsrc = data.img
        //     _this.name = data.username
        //     _this.id=data.id
        //     _this.phone=data.phone
        //     })   
    } 
}
</script>
<style scoped>
.left{float:left;margin-left: 20px;}
.right{float: right;margin-right:20px; }
*{margin: 0px;padding: 0px;}
ul{
    width: 100%;
    height: auto;
    margin-top:5px; 
    background: #cccccc;
}
li{
    width: 100%;
    height: 60px;
    line-height: 60px;
    background: #fff;
    padding: 2px 0;
}
img{width: 60px;height: 60px;}
#msg{
    border: 1px solid #ccc;
    position: absolute;
    top:-200px;
    width: 100%;
    background: #ccc
}
</style>
