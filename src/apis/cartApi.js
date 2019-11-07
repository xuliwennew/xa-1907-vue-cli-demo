import { BASEURL } from '../commons/Config'

const CARTURL = `${BASEURL}/carts`
const ADDCARTURL = `${BASEURL}/carts/add`
export default {

  /**
     * 获取店铺的信息
     */
  async getCartInfoByUserId () {
    let res = await fetch(CARTURL)
    let data = await res.json()
    return data
  },
  /**
   * 添加店铺的商品到购物车
   * @param name
   * @param pid
   * @returns {Promise<void>}
   */
  async addCart (name, pid) {
    let res = await fetch(`${ADDCARTURL}?name=${name}&pid=${pid}`)
    let data = await res.json()
    return data
  }

}
