<template>
  <div id="info-container">
    <div class="card">
      <div class="bg">
        <img
          src="https://soujiz.com/wp-content/uploads/2021/11/微信图片_20211124202553.jpg"
          alt=""
        />
      </div>
      <!-- 用户信息 -->
      <div class="avatar_info">
        <!-- <img :src="user.avatar" alt="" /> -->
        <div class="wrap" v-if="user">
          <!-- <img :src="user.avatar" alt="" /> -->
          <img
            src="https://soujiz.com/wp-content/uploads/2021/08/avatar.png"
            alt=""
          />
          <span>{{ user.name }}</span>
        </div>
        <div class="wrap" v-else>
          <img
            src="https://soujiz.com/wp-content/uploads/2021/08/avatar.png"
            alt=""
          />
          <span>Hi, 请登录</span>
        </div>
      </div>
      <!-- 用户信息 -->
      <!-- 按钮组 -->
      <div class="btns">
        <div class="logout" v-if="user" @click="logout">
          <span>退出登录</span>
        </div>
        <div class="login" v-else>
          <RouterLink to="/login"><p>游客登录</p></RouterLink>
          <p>qq登录</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { ref ,inject} from 'vue'
import {useRouter} from 'vue-router'
export default {
  setup(){
    const user = ref()
    const reload = inject('reload')
    if(window.sessionStorage.getItem('user')){
      user.value = JSON.parse(window.sessionStorage.getItem('user'))
    }
    // 退出登录
    const logout = ()=>{
      window.sessionStorage.removeItem('user')
      window.sessionStorage.removeItem("token")
      // 刷新页面
      reload()
    }
    return {user,logout}
  }
}
</script>

<style scoped lang="less">
#info-container {
  margin: 30px 0 0 30px;
  position: relative;
  border-radius: 8px;
  box-sizing: border-box;
  width: 310px;
  // height: 250px;
  color: #999;
  background-color: #fff;
  .card {
    width: 310px;
    .bg {
      img {
        width: 310px;
        height: 120px;
      }
    }
    .avatar_info {
      position: absolute;
      top: 80px;
      left: 110px;
      .wrap {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        img {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          margin-bottom: 30px;
        }
      }
    }
    .btns {
      position: absolute;
      left: 45px;
      top: 240px;
      display: flex;
      .login {
        display: flex;
        p {
          line-height: 35px;
          cursor: pointer;
          width: 105px;
          height: 35px;
          background: linear-gradient(135deg, #59c3fb 10%, #268df7 100%);
          border-radius: 6px;
          text-align: center;
          color: #fff;
          margin-right: 10px;
        }
        :nth-child(2) {
          background: linear-gradient(135deg, #f59f54 10%, #ff6922 100%);
        }
      }
      .logout {
        width: 105px;
        height: 35px;
        background: linear-gradient(135deg, #f59f54 10%, #ff6922 100%);
        border-radius: 6px;
        text-align: center;
        color: #fff;
        margin-left: 50px;
        span {
          line-height: 35px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
