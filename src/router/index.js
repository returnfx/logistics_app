import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',
            redirect:'/home'
        },
        {
            path: '/home',
            component: () => import('../components/Home.vue'),
        },
        {
            path: '/enter',
            component: () => import('../components/Enter.vue'),
        },
        {
            path: '/out',
            component: () => import('../components/Out.vue'),
        },
        {
            path: '/user',
            component: () => import('../components/User.vue'),
        },
        {
            path: '/other',
            component: () => import('../views/Other.vue'),
        },
    ],
    mode: 'history'
})


