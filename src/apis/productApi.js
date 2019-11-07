import { BASEURL } from '../commons/Config'

const PRODUCTURL = `${BASEURL}/product/all`
const PRODUCTInfoURL = `${BASEURL}/product/item`
export default {

  async getProductList () {
    let res = await fetch(PRODUCTURL)
    let data = await res.json()
    return data
  },

  async getProductById (id) {
    let res = await fetch(`${PRODUCTInfoURL}/${id}`)
    let data = await res.json()
    return data
  }

}
