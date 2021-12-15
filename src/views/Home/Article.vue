<template>
  <div class="article_list">
    <!-- 头部标题 -->
    <RecommendHeader weight="600">最新文章</RecommendHeader>

    <!-- 文章主体 -->
    <ArticleItem
      v-for="article in articleList"
      :key="article._id"
      :article="article"
    ></ArticleItem>
  </div>
</template>

<script type="text/ecmascript-6">
import {ref} from 'vue'
import ArticleItem from '../../components/ArticleItem'
import RecommendHeader from '../../components/RecommendHeader'
import {reqArticleList} from '@/API/index'
  export default {
    components:{ArticleItem,RecommendHeader},
    setup(){
      const articleList = ref([])

      // 获取文章列表
      reqArticleList().then((result)=> {
        if(result.code){
          articleList.value = result.data
        }
      })
      return {
        articleList
      }
    }
  }
</script>

<style scoped lang="less">
.article_list {
  margin-top: 30px;
}
</style>
