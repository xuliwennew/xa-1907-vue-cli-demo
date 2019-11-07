import { INITCART } from '../types/actionTypes'
import cartApi from '../../apis/cartApi'

export default {
  state: {
    cartInfo: {}
  },
  mutations: {
    'INIT': (state, data) => {
      console.log('#3 mutations: init')
      state.cartInfo = data
    }
  },
  actions: {
    [INITCART]: async ({ commit }, args) => {
      let data = await cartApi.getCartInfoByUserId()
      console.log('#2 actions: data')
      commit('INIT', data)
    }
  },
  getters: {
    'GETCART': ({ cartInfo }) => {
      return cartInfo
    }
  }
}
