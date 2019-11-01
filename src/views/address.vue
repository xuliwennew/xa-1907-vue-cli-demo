<template>
  <!--<van-address-edit-->
    <!--:area-list="areaList"-->
    <!--show-postal-->
    <!--show-delete-->
    <!--show-set-default-->
    <!--show-search-result-->
    <!--:search-result="searchResult"-->
    <!--@save="onSave"-->
    <!--@delete="onDelete"-->
    <!--@change-detail="onChangeDetail"-->
  <!--/>-->
  <!--<i-button type="primary">Primary</i-button>-->
  <es-loading></es-loading>
 </template>

<script>
import { AddressEdit } from 'vant'
import areaList from '../assets/area'
export default {
  name: 'vaddress',
  data () {
    return {
      areaList: areaList
      // searchResult: []
    }
  },

  methods: {
    onSave () {
    },
    onDelete () {
    },
    onChangeDetail (val) {
      if (val) {
        this.searchResult = [{
          name: '黄龙万科中心',
          address: '杭州市西湖区'
        }]
      } else {
        this.searchResult = []
      }
    }
  },
  components: {
    [AddressEdit.name]: AddressEdit
  }
}
</script>

<style scoped>

</style>
