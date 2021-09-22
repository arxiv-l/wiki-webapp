import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    }, {
        path: '/adminEbook',
        name: 'AdminEbook',
        component: () => import('../views/admin/AdminEbook.vue')
    }, {
        path: '/adminCategory',
        name: 'AdminCategory',
        component: () => import('../views/admin/AdminCategory.vue')
    },{
        path: '/adminDoc',
        name: 'AdminDoc',
        component: () => import('../views/admin/AdminDoc.vue')
    },{
        path: '/doc',
        name: 'Doc',
        component: () => import('../views/Doc.vue')
    }
    ,{
        path: '/adminUser',
        name: 'AdminUser',
        component: () => import('../views/admin/AdminUser.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router
