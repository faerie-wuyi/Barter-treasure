import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import Index from '../views/Index.vue'
import Home from '../views/Home.vue'
import Category from '../views/Category.vue'
import Release from '../views/Release.vue'
import Cart from '../views/Cart.vue'
import User from '../views/User.vue'
import Dingdan from '../views/Dingdan.vue'
import Usermsg from '../views/Usermsg.vue'
import Address from '../views/Address.vue'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            redirect: '/login'
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/register',
            component: Register
        }, {
            path: '/index',
            redirect: '/home',
            component: Index,
            children: [
                { path: '/home', component: Home },
                { path: '/category', component: Category },
                { path: '/release', component: Release },
                { path: '/cart', component: Cart },
                { path: '/user', component: User }
            ]
        },
        {
            path: '/dingdan',
            component: Dingdan
        },
        {
            path: "/usermsg",
            component: Usermsg
        },
        {
            path: "/address",
            component: Address
        }
    ]
})