<template>
  <div class="blogs">
    <div class="left">
      <RouterLink to="article">
        <div class="img_box">
          <img src="@/assets/images/s1.jpg" />
        </div>
      </RouterLink>
    </div>
    <div class="right">
      <!-- 标题 -->
      <div class="title">
        <router-link to="/article"
          ><span>{{ article.title }}</span></router-link
        >
      </div>
      <div class="details">
        <span class="icon_time"
          ><i class="iconfont icon-shijian_o">2015-1-9</i></span
        >
        <div class="right">
          <span class="comments"><i class="iconfont icon-dianzan">34</i></span>
          <span class="likes"><i class="iconfont icon-huifu">10</i></span>
        </div>
      </div>
      <p class="ellipsis">
        {{ article.content }}
      </p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import {useRouter} from 'vue-router'
export default {
  name:"articleItem",
  props:{
    article:{
      type:Object,
      default:null
    }
  },
  setup(props) {
    const router = useRouter()

    return {}
  }
}
</script>

<style scoped lang="less">
.blogs {
  width: 800px;
  background-color: #fff;
  color: #b9b9b9;
  padding-bottom: 35px;
  display: flex;
  .left {
    width: 200px;
    margin: 15px 20px 0;
    .img_box {
      width: 200px;
      overflow: hidden;
      img {
        width: 200px;
        cursor: pointer;
        transition: scale, 0.5s;
        background-size: cover;
      }
      :hover {
        transform: scale(1.2);
      }
    }
  }
  .right {
    padding-right: 5px;
    .title {
      margin: 10px 0 10px 10px;
      span {
        color: #42426f;
        font-weight: 600;
        cursor: pointer;
      }
      :hover {
        color: #ff7f00;
      }
    }
    p {
      line-height: 24px;
      font-size: 14px;
    }
    .ellipsis {
      height: 95px;
      word-break: break-all;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 4;
      overflow: hidden;
      color: #cdcdcd;
    }
    .details {
      display: flex;
      align-items: center;
      margin-top: 10px;
      .icon_time {
        margin-right: 15px;
      }
      .right {
        margin-right: 15px;
        font-size: 12px;
        .comments {
          margin-right: 20px;
        }
      }
      .iconfont {
        font-size: 12px;
      }
    }
  }
}
</style>
