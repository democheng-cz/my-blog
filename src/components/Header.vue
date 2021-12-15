<template>
  <header>
    <nav id="nav">
      <ul>
        <li>
          <a
            href="#"
            :class="{ active: tagName === 'home' }"
            @click="tagName = 'home'"
            >网站首页</a
          >
        </li>
        <li>
          <a
            href="#"
            :class="{ active: tagName === 'personal' }"
            @click="tagName = 'personal'"
            >个人博客</a
          >
        </li>
        <li>
          <a
            href="#"
            :class="{ active: tagName === 'photos' }"
            @click="tagName = 'photos'"
            >相册</a
          >
        </li>
        <li>
          <a
            href="#"
            :class="{ active: tagName === 'blog' }"
            @click="tagName = 'blog'"
            >心情日志</a
          >
        </li>
        <li>
          <a
            href="#"
            :class="{ active: tagName === 'article' }"
            @click="tagName = 'article'"
            >文章</a
          >
        </li>
      </ul>
      <!-- user -->
      <div class="user"></div>
    </nav>
  </header>
</template>

<script type="text/ecmascript-6">
import { ref } from 'vue'
export default {
  setup(){
    const tagName = ref("home")
    // 将字符串转为js对象
    return {
      tagName,
    }
  }

}
</script>

<style scoped lang="less">
header {
  width: 100%;
  height: 70px;
  background: #fff;
  #nav {
    display: flex;
    margin: 0 auto;
    align-items: center;
    width: 1000px;
    ul {
      display: flex;
      li {
        line-height: 40px;
        display: inline;
        a {
          color: #666666;
          padding: 10px 20px;
          margin: 8px 10px;
          text-decoration: none;
        }
        :hover,
        .active {
          color: #fff;
          background-color: rgba(20, 20, 20, 0.8);
          box-shadow: inset 0px 1px 1px rgba(0, 0, 0, 0.7);
          border-radius: 6px;
          line-height: 40px;
        }
      }
    }
    .user {
      height: 70px;
      display: flex;
      align-items: center;
      margin-left: 170px;
      .name {
        display: flex;
        align-items: center;
        margin-right: 30px;
        img {
          margin-left: 10px;
          border-radius: 30%;
        }
      }
    }
  }
}
</style>
