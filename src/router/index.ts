import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const files = require.context('.', true, /\.ts$/)
const modules: Array<RouteConfig> = []
files.keys().forEach(k => {
  if (k === './index.ts') return
  modules.push(files(k).default)
})

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/Connect'
  },
  {
    path: '/Connect',
    meta: {
      icon: 'mdi-usb',
      title: 'Connect'
    },
    component: () => import(/* webpackChunkName: "Connect" */ '@/views/Connect.vue')
  },
  {
    path: '/Loading',
    meta: {
      icon: 'mdi-reload',
      title: 'Loading'
    },
    component: () => import(/* webpackChunkName: "Loading" */ '@/views/Loading.vue')
  },
  {
    path: '/Pin',
    meta: {
      icon: 'mdi-textbox-password',
      title: 'Pin'
    },
    component: () => import(/* webpackChunkName: "Pin" */ '@/views/Pin.vue')
  },
  {
    path: '/Account',
    meta: {
      icon: 'mdi-wallet',
      title: 'Account'
    },
    component: () => import(/* webpackChunkName: "Account" */ '@/views/Account.vue')
  },
  ...modules
]

const router = new VueRouter({
  routes,
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  scrollBehavior(to, from, savedPosition) {
    to || from
    if (savedPosition) return savedPosition
    return { x: 0, y: 0 }
  }
})

router.beforeEach((to, from, next) => {
  to || from
  next()
})

router.afterEach(to => {
  to || 1
  window.scrollTo(0, 0)
})

export default router