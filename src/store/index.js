import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// step1: 创建一个仓库，用来管理共享的状态，定义修改状态的规则
let store = new Vuex.Store({
  state: { // 共享的数据结构 响应式
    eggs: '10 eggs',
    rices: '10 rices',
    num: 0
  },
  mutations: { // 根据actions的提交的动作类型，进行状态的修改
    'HANSHENG': (state, payload) => {
      console.log('海生收到，我正在做....')
      state.eggs = 'eggs and rice ' + payload
    }
  },
  actions: { // 根据组件提交的动作类型，再提交给muations中的mutaion处理
    'DAHUANG': (store, data) => {
      console.log('收到 action:dahuang')
      store.commit('HANSHENG', data)
    }
  },
  getters: {
    'LAOTIAN': (state) => {
      console.log('老四收到,吃....')
      return state.eggs
    }
  }
})

export default store
