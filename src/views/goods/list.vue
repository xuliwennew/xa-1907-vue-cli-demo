<template>
<div>
  <van-nav-bar
    title="商品列表"
    left-text="返回"
    left-arrow
  />
  <van-card
    num="2"
    :price="p.price"
    :desc="p.title"
    :title="p.title"
    :thumb="p.pic"
    :key="i"
    v-for="(p,i) in list"
    @click="goUrl(i)"
  >
    <div slot="tags">
      <van-tag plain type="danger">标签</van-tag>
      <van-tag plain type="danger">标签</van-tag>
    </div>
    <div slot="footer">
      <van-button size="mini">按钮</van-button>
      <van-button size="mini">按钮</van-button>
    </div>
  </van-card>
  <van-tabbar v-model="active">
    <van-tabbar-item icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item icon="search" dot>列表</van-tabbar-item>
    <van-tabbar-item icon="friends-o" info="5">购物车</van-tabbar-item>
    <van-tabbar-item icon="setting-o" info="20">个人</van-tabbar-item>
  </van-tabbar>
</div>
</template>

<script>
import productApi from '../../apis/productApi'
import { Card, Tag, Button, NavBar, Tabbar, TabbarItem } from 'vant'
export default {
  name: 'list',
  components: {
    [Card.name]: Card,
    [Tag.name]: Tag,
    [Button.name]: Button,
    [NavBar.name]: NavBar,
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  },
  data () {
    return {
      active: 0,
      list: []
    }
  },
  async beforeMount () {
    this._initPageData()
  },
  methods: {
    async _initPageData () {
      let data = await productApi.getProductList()
      this.list = data
      console.log(data)
    },
    goUrl (i) {
      this.$router.push('/goods?id=' + i)
    }
  }

}
</script>

<style scoped>

</style>
