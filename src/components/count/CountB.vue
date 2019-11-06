<template>
  <div>
    <h1>B组件:{{num}}</h1>
    <button class="btn" @click="update">B+</button>
  </div>
</template>

<script>
export default {
  name: 'CountB',
  data () {
    return {
      num: localStorage.getItem('num')
    }
  },
  methods: {
    update () {
      let num = parseInt(localStorage.getItem('num'))
      localStorage.setItem('num', ++num)
    }
  },
  mounted () {
    setInterval(() => {
      this.num = localStorage.getItem('num')
    }, 10)
  }
}
</script>

<style scoped>
  .btn {
    font-size: 30px;
  }
</style>
