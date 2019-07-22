// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueTap from 'v-tap'
import Vant from 'vant'
import Toast from 'vant'
import 'vant/lib/index.css'
import store from './store'
import './assets/font1/iconfont.css'
import Icon from 'vant'

Vue.config.productionTip = false

Vue.use(Vant);
Vue.use(Toast);
Vue.use(VueTap);
Vue.use(Icon)

import { Row, Col } from 'vant';
Vue.use(Row).use(Col);
import { Grid, GridItem } from 'vant';
Vue.use(Grid).use(GridItem);
import { NoticeBar } from 'vant';
Vue.use(NoticeBar);
import { Button } from 'vant';
Vue.use(Button);
import { NavBar } from 'vant';
Vue.use(NavBar);
import { AddressList } from 'vant';
Vue.use(AddressList);
import { Tab, Tabs } from 'vant';
Vue.use(Tab).use(Tabs);
import { Card } from 'vant';
Vue.use(Card);
import { Popup } from 'vant';
Vue.use(Popup);
import { Field } from 'vant';
Vue.use(Field);
import { Panel } from 'vant';
Vue.use(Panel);
import { Uploader } from 'vant';
Vue.use(Uploader);



/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})