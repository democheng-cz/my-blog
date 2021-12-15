<template>
  <div class="container" v-if="y > 70">
    <Header></Header>
  </div>
</template>

<script type="text/ecmascript-6">
import Header from './Header.vue'
import {ref,onMounted} from 'vue'
  export default {
    components:{Header},
    setup(){
      const y = ref(0)
      onMounted(()=> {
        window.onscroll = ()=>{
          y.value = document.documentElement.scrollTop
        }
      })
      return {
        y
      }
    }
  }
</script>

<style scoped lang="less">
.container {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  opacity: 0.8;
  backdrop-filter: saturate(5) blur(20px);
}
</style>
