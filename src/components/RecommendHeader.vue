<template>
  <div class="header" :style="{ color: color, 'font-weight': weight }">
    <span><slot></slot></span>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props:{
    weight:{
      type:String,
    },
    color:{
      type:String,
      default:"#333"
    }
  }
}
</script>

<style scoped lang="less">
.header {
  width: 100%;
  height: 40px;
  // color: #5d5d5d;
  font-size: 20px;
  background-color: #f0f0f0;
  span {
    font-size: 16px;
    line-height: 40px;
    margin: 10px 0 0 10px;
  }
}
</style>
