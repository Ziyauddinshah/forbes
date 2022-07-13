<template>
  <div>
    <!-- <div> <vuepractice /></div> -->
    <!-- <div> <weatherapi /> </div> -->
    <!-- npm i --save-dev @types/jw-vue-pagination -->
    <div> <pagination /> </div>
    <div> <forbesapi /></div>
    
  </div>
</template>

<script>
  // import weatherapi from './weatherapi.vue'
  import forbesapi from './forbesapi.vue'
  import pagination from './pagination.vue'
  // import vuepractice from './vuepractice.vue'
  
  export default {
    name: 'App',
    components : {
      // weatherapi,
      forbesapi,
      pagination,
      // vuepractice,
    },
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #1460ac;
    margin-top: 60px;
  }
</style>
