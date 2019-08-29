import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/getstarted',
      name: 'getstarted',
      component: () => import(/* webpackChunkName: "getstarted" */ './views/getstarted.vue')
    },
    {
      path: '/signin',
      name: 'signin',
      component: () => import(/* webpackChunkName: "signin" */ './views/signin.vue')
    },
    {
      path: '/aboutus',
      name: 'aboutus',
      component: () => import(/* webpackChunkName: "aboutus" */ './views/aboutus.vue')
    }
  ]
})
