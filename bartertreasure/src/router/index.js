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
import ResetPwd from '../views/ResetPwd.vue'
import store from '../store/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/login'
    },
    {
      path:'/login',
      component:Login
    },
    {
      path:'/register',
      component:Register
    },
    {
      path:'/resetPwd',
      component:ResetPwd
    },
    {
      path:'/index',
      redirect:'/home',
      component:Index,
      children:[
        {path:'/home',component:Home},
        {path:'/category',component:Category},
        {path:'/release',component:Release},
        {path:'/cart',component:Cart},
        {path:'/user',component:User}
      ]
    },



  ]
})
