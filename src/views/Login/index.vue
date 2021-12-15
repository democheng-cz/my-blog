<template>
  <div class="login_form">
    <!-- 邮箱输入 -->
    <div class="email">
      <input type="text" class="email_input" v-model="user.email" />
    </div>
    <!-- 密码输入 -->
    <div class="password">
      <input type="password" class="pwd_input" v-model="user.password" />
    </div>
    <!-- 按钮 -->
    <div class="button">
      <button class="login" @click="login">登录</button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import {reqLogin} from '@/API/index'
import { reactive } from 'vue'
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'
export default {
  setup(){
    const store = useStore()
    const router = useRouter()
    const user = reactive({
      email:'',
      password:''
    })

    // 登录
    const login = async ()=>{
      const result = await reqLogin(user)
      console.log(result)
      if(result.code === "200"){
        store.commit('user/saveUseInfo',result.data)
        window.sessionStorage.setItem('user',JSON.stringify(result.data))
        window.sessionStorage.setItem('token',result.data.token)
        router.push('/')
      }
    }
    return{
      user,login
    }
  }
}
</script>

<style scoped lang="less">
.login_form {
  width: 300px;
  height: 300px;
  background-color: #d9d9d9;
  margin: 200px auto;
  padding: 100px 50px;
  box-sizing: border-box;
  .email {
    margin-bottom: 20px;
  }
  .button {
    margin: 20px 0 0 70px;
  }
}
</style>
