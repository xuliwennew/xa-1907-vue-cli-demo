/**
 * 针对不同类型的状态时行管理
 * 分模块
 **/
import { INC } from '../types/actionTypes'

export default {
  state: {
    num: 0
  },
  mutations: {
    // "add" mutation sync
    ADD (state, payload) {
      state.num++
    }
  },
  actions: {
    // dispatch INC
    [INC] (store, args) {
      // AJAX
      setTimeout(() => {
        store.commit('ADD')
      }, 1000)
    }
  },
  getters: {
    GETNUM (state) {
      return state.num * 2
    }
  }
}
