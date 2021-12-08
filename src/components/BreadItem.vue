<template>
  <div class="bread_item">
    <RouterLink v-if="to" :to="to">
      <span><slot></slot></span>
    </RouterLink>
    <span v-else><slot></slot></span>
    <i class="iconfont icon-right"></i>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props:{
    to:{
      type:[String,Object]
    }
  }
}
</script>

<style scoped lang="less">
.bread_item {
  span {
    margin-left: 3px;
  }
}
</style>
