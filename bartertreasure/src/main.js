// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueTap from 'v-tap'
import Vant from 'vant'
import 'vant/lib/index.css';
import store from './store'
import './assets/font1/iconfont.css'
import Icon from 'vant'

Vue.config.productionTip = false
Vue.use(Vant);
//Vue.use(Toast);
Vue.use(VueTap);
Vue.use(Icon)


/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})