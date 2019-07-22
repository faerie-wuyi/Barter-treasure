import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import Index from '../views/Index.vue'
import Home from '../views/Home.vue'

import Release from '../views/Release.vue'

import User from '../views/User.vue'
import ResetPwd from '../views/ResetPwd.vue'
import store from '../store/index'
import Category from '@/views/Category'
import Brand from '@/views/Brand'

import Brandtj from '@/views/Brandtj'
import Handbag from '@/views/Handbag'
import Surface from '@/views/Surface'
import Ornament from '@/views/Ornament'
import Meart from '@/views/Meart'
import Xqy from '@/views/Xqy'
import Cart from '@/views/Cart'
import Order from '@/views/Order'
import Payment from '@/views/Payment'

import {
    Search
} from 'vant';
import {
    TreeSelect
} from 'vant';
import {
    Swipe,
    SwipeItem
} from 'vant';
import {
    Row,
    Col
} from 'vant';
import {
    Divider
} from 'vant';
import {
    Grid,
    GridItem
} from 'vant';
import {
    DropdownMenu,
    DropdownItem
} from 'vant';
import {
    IndexBar,
    IndexAnchor
} from 'vant';
import {
    Button
} from 'vant';
import {
    SubmitBar
} from 'vant';
import {
    NavBar
} from 'vant';
import {
    Icon
} from 'vant';
import {
    GoodsAction,
    GoodsActionIcon,
    GoodsActionButton
} from 'vant';
import {
    CountDown
} from 'vant';
import {
    SwitchCell
} from 'vant';
import {
    ContactCard,
    ContactList,
    ContactEdit
} from 'vant';
import {
    Card
} from 'vant';
import {
    CouponCell,
    CouponList
} from 'vant';
import {
    Field
} from 'vant';
import {
    RadioGroup,
    Radio
} from 'vant';
import {
    Image
} from 'vant';
Vue.use(Image);
Vue.use(RadioGroup);
Vue.use(Radio);

Vue.use(CouponCell).use(CouponList);
Vue.use(SwitchCell);
Vue.use(Field);
Vue.use(Card);
Vue
    .use(ContactCard)
    .use(ContactList)
    .use(ContactEdit);
Vue.use(CountDown);
Vue
    .use(GoodsAction)
    .use(GoodsActionIcon)
    .use(GoodsActionButton);
Vue.use(Icon);
Vue.use(NavBar);
Vue.use(Button);
Vue.use(IndexBar).use(IndexAnchor);
Vue.use(DropdownMenu).use(DropdownItem);
Vue.use(Grid).use(GridItem);
Vue.use(Row).use(Col);
Vue.use(Router)
Vue.use(Search);
Vue.use(TreeSelect);
Vue.use(Swipe).use(SwipeItem);
Vue.use(Divider);
Vue.use(SubmitBar);

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
        },
        {
            path: '/resetPwd',
            component: ResetPwd
        },
        {
            path: '/index',
            redirect: '/home',
            component: Index,
            children: [
                { path: '/home', component: Home },
                {
                    path: '/category',
                    component: Category,
                    children: [{
                            path: '/brand',
                            component: Brand,
                        }, {
                            path: '/handbag',
                            component: Handbag,
                        }, {
                            path: '/surface',
                            component: Surface,
                        },
                        {
                            path: '/ornament',
                            component: Ornament,
                        },
                        {
                            path: '/meart',
                            component: Meart,
                        }

                    ]
                },
                { path: '/release', component: Release },
                { path: '/cart', component: Cart },
                { path: '/user', component: User },

            ]
        },
        {
            path: '/brandtj',
            component: Brandtj,
        },
        {
            path: '/xqy',
            name: 'Xqy',
            component: Xqy,
        }, {
            path: '/order',
            name: 'Order',
            component: Order
        },
        {
            path: '/payment',
            name: 'Payment',
            component: Payment
        }



    ]
})