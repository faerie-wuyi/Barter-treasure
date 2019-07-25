import Vue from 'vue'
import Router from 'vue-router'
import Category from '@/views/Category'
import Brand from '@/views/Brand'
import Index from '@/views/Index'
import Brandtj from '@/views/Brandtj'
import Handbag from '@/views/Handbag'
import Other from '@/views/Other'
import Ornament from '@/views/Ornament'
import Shoe from '@/views/Shoe'
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
            path: '/index',
            name: 'Index ',

            component: Index,
            children: [{
                    path: '/cart',
                    name: 'Cart',
                    component: Cart
                },

                {
                    path: '/category',
                    name: 'Category',
                    component: Category,

                    children: [{
                            path: '/brand',
                            component: Brand,
                        }, {
                            path: '/handbag',
                            component: Handbag,
                        }, {
                            path: '/other',
                            component: Other,
                        },
                        {
                            path: '/ornament',
                            component: Ornament,
                        },
                        {
                            path: '/meart',
                            component: Meart,
                        },
                        {
                            path: '/shoe',
                            component: Shoe,
                        }

                    ],


                }
            ]
        },

        {
            path: '/brandtj',
            component: Brandtj,
        },
        {
            path: '/xqy/:id',
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