<template>
  <div class="card_container">
    <!-- 头部标题 -->
    <RecommendHeader weight="600">每日一诗</RecommendHeader>

    <!-- 主体内容 -->
    <div class="container" v-if="poem">
      <div class="content">
        <span>{{ poem.content }}</span>
      </div>
      <div class="title">
        <span class="ellipsis">{{ poem.title }}</span>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import RecommendHeader from '../../components/RecommendHeader'
import {getPoem} from '@/API/index'
import {ref} from 'vue'
export default {
  components:{RecommendHeader},

  setup(){
    const poem = ref(null)
    // 获取诗句
    getPoem().then((result)=>{
      console.log(result)
      poem.value = result.data.result.poem
      // console.log(poem.value)
    })
    return {
      poem
    }
  }
}
</script>

<style scoped lang="less">
.card_container {
  margin: 30px 0 0 30px;
  background: url("../../assets/images/quote-bg.png") no-repeat top right;
  border-radius: 8px;
  width: 350px;
  color: #999;
  background-color: #fff;
  position: relative;
  .container {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    .content {
      margin-left: 20px;
    }
    .title {
      margin-left: 230px;
      .ellipsis {
        word-break: break-all;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
      }
    }
  }
}
</style>
