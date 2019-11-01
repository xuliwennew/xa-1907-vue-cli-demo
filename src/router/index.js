import Vue from 'vue'
import home from '../views/tabs/home'
import search from '../views/tabs/search'
import user from '../views/tabs/user'
import main from '../views/main'
import hello from '../views/hello'
import VueRouter from 'vue-router'
import address from '../views/address'
Vue.use(VueRouter)

let router = new VueRouter({
  routes: [
    {
      path: '/address',
      component: address
    },
    {
      path: '/login',
      component: hello
    },
    {
      path: '/',
      redirect: '/main'
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
        },
        {
          path: 'user',
          component: user
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
