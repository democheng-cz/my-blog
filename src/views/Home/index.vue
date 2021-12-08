<template>
  <!-- 轮播图 -->
  <Banners></Banners>

  <!-- 个人信息卡片 -->
  <InfoCard></InfoCard>

  <!-- 文章列表展示 -->
  <Article>最新文章</Article>

  <!-- 侧边栏 卡片 -->
  <div class="card_list">
    <ImgCard>今日美图</ImgCard>
    <ArticleRecommended>精选文章</ArticleRecommended>
    <PoemRecommend>每日推荐</PoemRecommend>
  </div>
</template>

<script type="text/ecmascript-6">
import Banners from './Banners'
import InfoCard from './InfoCard'
import Article from './Article'
import ImgCard from './ImgCard'
import ArticleRecommended from './ArticleRecommended'
import PoemRecommend from './PoemRecommend'

export default {
  components:{Banners,InfoCard,Article,ImgCard,ArticleRecommended,PoemRecommend}
}
</script>

<style scoped lang="less">
#main {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
</style>
