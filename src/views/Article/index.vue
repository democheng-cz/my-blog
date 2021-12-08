<template>
  <div class="container">
    <!-- 面包屑导航 -->
    <BreadCrumbs>
      <BreadItem>首页</BreadItem>
      <BreadItem>文章</BreadItem>
      <BreadItem>首页</BreadItem>
    </BreadCrumbs>

    <div class="body">
      <!-- 文章主体 -->
      <div class="article">
        <!-- 文章标题 -->
        <div class="title">我是文章标题</div>

        <!-- 作者信息 -->
        <div class="user_info">
          <div class="avatar">
            <img src="../../assets/images/01.jpg" alt="" />
          </div>
          <div class="name">
            <span>橙子</span>
            <!-- 发布时间 -->
            <span>7小时前</span>
          </div>
        </div>

        <!-- 文章主体 -->
        <div class=""></div>
      </div>
      <!-- 侧边卡片 -->
      <ArticleRecommended></ArticleRecommended>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import BreadCrumbs from '../../components/BreadCrumbs'
import BreadItem from '../../components/BreadItem'
import ArticleRecommended from '../Home/ArticleRecommended'
export default {
  components:{BreadCrumbs,BreadItem,ArticleRecommended}
}
</script>

<style scoped lang="less">
.container {
  width: 1200px;
  margin-top: 30px;
  .body {
    display: flex;
    .article {
      background-color: #fff;
      height: 300px;
      border-radius: 8px;
      padding: 30px 30px 0 30px;
      width: 800px;
      .title {
        font-size: 28px;
        font-weight: 700;
        color: #4e5358;
      }
      .user_info {
        margin-top: 20px;
        display: flex;
        .avatar {
          width: 38px;
          height: 38px;
          img {
            width: 38px;
            height: 38px;
            border-radius: 50%;
          }
        }
        .name {
          display: flex;
          flex-direction: column;
          margin-left: 15px;
          span {
            font-weight: 600;
          }
          :nth-child(2) {
            font-size: 10px;
            color: #ccc;
          }
        }
      }
    }
  }
}
</style>
