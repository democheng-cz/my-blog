<template>
  <div class="card_container" :style="{ height }">
    <RecommendHeader weight="600">文章精选</RecommendHeader>
    <div class="container">
      <div class="item">
        <span class="title">[慢生活]</span>
        <span class="ellipsis"
          >有一种思念，是淡淡的幸福幸福幸福幸福幸福,一个心情一</span
        >
      </div>
      <div class="item">
        <span class="title">[慢生活]</span>
        <span class="ellipsis"
          >有一种思念，是淡淡的幸福,一个心情一11111111</span
        >
      </div>
      <div class="item">
        <span class="title">[慢生活]</span>
        <span class="ellipsis"
          >有一种思念，是淡淡的幸福,一个心情一11111111</span
        >
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import RecommendHeader from '../../components/RecommendHeader'
export default {
  components:{RecommendHeader},
  props:{
    height:{
      type:String,
      default:null
    }
  }
}
</script>

<style scoped lang="less">
.card_container {
  margin: 30px 0 30px 30px;
  background: url("../../assets/images/quote-bg.png") no-repeat top right;
  border-radius: 8px;
  width: 350px;
  color: #999;
  background-color: #fff;
  position: relative;
  .container {
    margin: 15px;
    padding-bottom: 10px;
    .item {
      display: flex;
      margin-bottom: 5px;
      align-items: center;
      .title {
        margin-right: 8px;
        color: #f63;
      }
      .ellipsis {
        word-break: break-all;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
        font-size: 12px;
        margin-left: 3px;
        width: 70%;
      }
    }
  }
}
</style>
