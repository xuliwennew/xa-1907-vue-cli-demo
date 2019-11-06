<template>
   <div>
     <count-a></count-a>
     <hr>
     <count-b></count-b>
   </div>
</template>

<script>
import CountA from '../components/count/CountA'
import CountB from '../components/count/CountB'
export default {
  name: 'counter',
  components: {
    CountA,
    CountB
  }
}
</script>

<style scoped>

</style>
