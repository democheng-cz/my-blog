<template>
  <!-- 头部 -->
  <Header></Header>
  <!-- 主要内容 -->
  <main>
    <router-view></router-view>
  </main>

  <!-- 底部 -->
  <Footer></Footer>
</template>

<script type="text/ecmascript-6">
import Header from "@/components/Header"
import Home from './Home/index.vue'
import Footer from '@/components/Footer'
  export default {
    components:{Header,Home,Footer}
  }
</script>

<style scoped lang="less">
main {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
}
</style>
