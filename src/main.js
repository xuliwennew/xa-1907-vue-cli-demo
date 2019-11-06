import Vue from 'vue'
import app from './app'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import router from './router'
import store from './store'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
// Vue.use(ElementUI)
// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'
// Vue.use(MintUI)
// import iView from 'iview'
// import 'iview/dist/styles/iview.css'
// import EasyUI from 'easy-ui'
// import 'easy-ui/lib/theme/index.css'
Vue.use(VueRouter)
Vue.use(Vuex)
// Vue.use(iView)
// Vue.use(EasyUI)
let bus = new Vue()

Vue.prototype.$bus = bus

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render (h) {
    return h(app)
  }
})
