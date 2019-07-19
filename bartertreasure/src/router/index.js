import Vue from 'vue'
import Router from 'vue-router'
import Category from '@/views/Category'
import Brand from '@/views/Brand'
import Brandtj from '@/views/Brandtj'
import Handbag from '@/views/Handbag'
import Surface from '@/views/Surface'
import Ornament from '@/views/Ornament'
import { Search } from 'vant';
import { TreeSelect } from 'vant';
import { Swipe, SwipeItem } from 'vant';
import { Row, Col } from 'vant';
import { Divider } from 'vant';

Vue.use(Row).use(Col);
Vue.use(Router)
Vue.use(Search);
Vue.use(TreeSelect);
Vue.use(Swipe).use(SwipeItem);
Vue.use(Divider);

export default new Router({
    routes: [{
        path: '/category',
        name: 'Category',
        component: Category,
        children: [{
                path: '/brand',
                component: Brand,
            }, {
                path: '/brandtj',
                component: Brandtj,
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
            }
        ]
    }]
})