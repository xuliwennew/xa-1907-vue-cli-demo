<template>
  <div>
    <h1>我正在吃：{{food}}</h1>
    <button @click="eatSomeThing">我要吃海生炒的鸡蛋饭，我要找dahuang服务</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'user',
  computed: {
    ...mapGetters({
      'food': 'LAOTIAN'
    })
  },
  methods: {
    eatSomeThing () {
      // { type:"DAHUANG" ,data:{}}
      this.$store.dispatch('DAHUANG', '芥末')
    }
  }
}
</script>

<style scoped>

</style>
