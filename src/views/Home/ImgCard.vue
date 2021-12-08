<template>
  <div class="card_container">
    <!-- 卡片头部 -->
    <RecommendHeader weight="600">精选美图</RecommendHeader>

    <BannersItem width="350px" height="210px"></BannersItem>
  </div>
</template>

<script type="text/ecmascript-6">
import RecommendHeader from '../../components/RecommendHeader'
import BannersItem from  '../../components/Banner'
export default {
  components:{RecommendHeader,BannersItem}
}
</script>

<style scoped lang="less">
.card_container {
  margin: 30px 0 0 30px;
  background: url("../../assets/images/quote-bg.png") no-repeat top right;
  border-radius: 8px;
  width: 350px;
  height: 250px;
  color: #999;
  background-color: #fff;
  position: relative;
  .wrap {
    width: 330px;
    height: 190px;
    margin: 10px auto;
    img {
      width: 330px;
      height: 190px;
      background-size: cover;
    }
  }
  .control {
    width: 330px;
    position: absolute;
    left: 10px;
    top: 105px;
    display: flex;
    justify-content: space-between;
    div {
      width: 40;
      height: 60px;
      background-color: rgba(0, 0, 0, 0.3);
      .iconfont {
        line-height: 60px;
        font-size: 24px;
        color: #fff;
      }
    }
  }
}
</style>
