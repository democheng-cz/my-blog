<template>
  <div id="banner-container">
    <!-- 图片容器 -->
    <BannersItem></BannersItem>
  </div>
</template>

<script type="text/ecmascript-6">
import BannersItem from '../../components/Banner.vue'
export default {
  components:{BannersItem}
}
</script>

<style scoped lang="less">
#banner-container {
  margin-top: 30px;
  width: 800px;
  position: relative;
  margin-right: 10px;
  height: 350px;
}
</style>
