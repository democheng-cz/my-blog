<template>
  <div class="blogs">
    <div class="row_box">
      <div class="text_info">
        <div class="left">
          <router-link to="/article"
            ><img src="@/assets/images/s1.jpg"
          /></router-link>
        </div>
        <div class="right">
          <!-- 标题 -->
          <div class="title">
            <router-link to="/article"></router-link
            ><span @click="go">我希望爱情是这样的</span>
          </div>
          <div class="details">
            <span class="icon_time"
              ><i class="iconfont icon-shijian_o">2015-1-9</i></span
            >
            <div class="right">
              <span class="comments"
                ><i class="iconfont icon-dianzan">34</i></span
              >
              <span class="likes"><i class="iconfont icon-huifu">10</i></span>
            </div>
          </div>
          <p class="ellipsis">
            我希望我的爱情是这样的的爱情是这样的的爱情是这样的的爱情是这样的的爱情是这样的的爱情是这样的的爱情是这样的的爱情是这样的的爱情是这样的，相濡以沫，举案齐眉，平淡如水。我在岁月中举案齐眉，平淡如水。我在岁月中找举案齐眉，平淡如水。我在岁月中找举案齐眉，平淡如水。我在岁月中找举案齐眉，平淡如水。我在岁月中找举案齐眉，平淡如水。我在岁月中找找到他，依靠他，将一生交付给他。做他的妻子，他孩子的母亲，为他做饭，洗衣服，缝一颗掉了的纽扣。然后，我们一起在时光中变老。
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import {useRouter} from 'vue-router'
export default {
  name:"articleItem",
  setup(props) {
    const router = useRouter()
    // 跳转
    const go = ()=>{
      router.push('/article')
    }
    return {go}
  }
}
</script>

<style scoped lang="less">
.blogs {
  width: 800px;
  // margin-top: 30px;
  position: relative;
  border-bottom: 1px solid #eaeaea;
  .row_box {
    background-color: #fff;
    color: #b9b9b9;
    // border-radius: 10px;
    padding-bottom: 35px;

    .text_info {
      display: flex;
      margin-top: 15px;
      overflow: hidden;
      margin-bottom: 5px;
      margin: 0 0 10px 15px;
      .left {
        margin-top: 15px;
        img {
          width: 240px;
          margin-right: 20px;
          cursor: pointer;
        }
      }
      .right {
        .title {
          margin: 10px 0 10px 20px;
          span {
            color: #333;
            font-weight: 700;
            cursor: pointer;
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
  }
}
</style>
