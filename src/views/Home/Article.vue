<template>
  <div class="article_list">
    <!-- 头部标题 -->
    <RecommendHeader weight="600">最新文章</RecommendHeader>

    <!-- 文章主体 -->
    <ArticleItem></ArticleItem>
    <ArticleItem></ArticleItem>
    <ArticleItem></ArticleItem>
  </div>
</template>

<script type="text/ecmascript-6">
import ArticleItem from '../../components/ArticleItem'
import RecommendHeader from '../../components/RecommendHeader'
  export default {
    components:{ArticleItem,RecommendHeader}
  }
</script>

<style scoped lang="less">
.article_list {
  margin-top: 30px;
}
</style>
