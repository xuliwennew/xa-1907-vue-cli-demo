import Vue from 'vue'
import home from '../views/tabs/home'
import search from '../views/tabs/search'
import carts from '../views/carts/index'
import goods from '../views/goods/index'
import list from '../views/goods/list'
import main from '../views/main'
import hello from '../views/hello'
import VueRouter from 'vue-router'
import counter from '../views/counter'
import user from '../components/customer/user'
Vue.use(VueRouter)

let router = new VueRouter({
  routes: [
    {
      path: '/address',
      component: resolve => require(['../views/address'], resolve)
    },
    {
      path: '/login',
      component: hello
    },
    {
      path: '/goods',
      component: goods
    },
    {
      path: '/list',
      component: list
    },
    {
      path: '/user',
      component: user
    },
    {
      path: '/carts',
      component: carts
    },
    {
      path: '/',
      component: counter
    },
    {
      path: '/main',
      component: main,
      children: [
        {
          path: '',
          component: home
        },
        {
          path: 'search',
          component: search
        }
      ]
    }
  ]
})

// 全局路由guard 前置guard user ->main -> login
router.beforeEach((to, from, next) => {
  console.log(to.path) // to from $route
  console.log(from.path)
  // let token = localStorage.getItem('token')
  next()
  // if (token) {
  //   next('/main')
  // } else {
  //   next('/login')
  // }
})

router.afterEach((to, from) => {
  // window.confirm('您真的需要退出吗!')
  console.log('afterEach')
})

export default router
