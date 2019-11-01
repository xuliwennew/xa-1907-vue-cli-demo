<template>
   <div>
     <a href="#/">首页</a> | <a href="#/main/search">搜索</a> | <a href="#/main/user">用户</a>
     <hr>
     <router-view></router-view>
   </div>
</template>

<script>
export default {
  name: 'xmail'
}
</script>

<style scoped>
</style>
