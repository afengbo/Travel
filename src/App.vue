<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- 路由加载过一次之后就将路由放到内存，下次请求只需从内存获取即可 -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
// import Home from '@/pages/home/Home.vue'

export default {
  name: 'app',
  components: {
    // Home,
  }
}
</script>

<style>

</style>
