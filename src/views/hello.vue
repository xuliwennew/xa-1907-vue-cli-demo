<template>
  <div>
    <h1>用户登录</h1>
    <!--<el-button type="primary">登录</el-button>-->
    <mt-actionsheet
      :actions="actions"
      v-model="sheetVisible">
    </mt-actionsheet>
    <mt-button @click="sheetVisible = true">打开</mt-button>
    <van-button type="default">默认按钮</van-button>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
  </div>
</template>

<script>
import { Button } from 'vant'
export default {
  name: 'hello',
  data () {
    return {
      chosenAddressId: '1',
      list: [
        {
          id: '1',
          name: '张三',
          tel: '13000000000',
          address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
        },
        {
          id: '2',
          name: '李四',
          tel: '1310000000',
          address: '浙江省杭州市拱墅区莫干山路 50 号'
        }
      ],
      disabledList: [
        {
          id: '3',
          name: '王五',
          tel: '1320000000',
          address: '浙江省杭州市滨江区江南大道 15 号'
        }
      ],
      sheetVisible: false,
      actions: [
        { name: 'camera' },
        { name: 'photo' }
      ]
    }
  },
  components: {
    [Button.name]: Button
  },
  methods: {
    onAdd () {

    },

    onEdit (item, index) {

    }
  }
}
</script>

<style lang="scss" scoped>
   $color:red;
  .c {
    background-color: $color;
  }
</style>
