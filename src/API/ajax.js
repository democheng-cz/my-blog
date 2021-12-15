import axios from "axios"

// 创建一个axios实例对象
const instance = axios.create({
  baseURL: "http://localhost:3000/api",
  timeout: 20000,
})

// 请求拦截器
instance.interceptors.request.use(
  // 请求成功的回调
  (config) => {
    let token = window.sessionStorage.getItem("token")
    if (token) {
      config.headers.Authorization = "Bearer " + token
    }

    return config
  },
  // 请求失败的回调
  (err) => {
    return Promise.reject(err)
  }
)

// 响应拦截器
instance.interceptors.response.use(
  // 响应成功的回调
  (res) => {
    return res.data
  },
  // 失败的回调
  (err) => {
    return Promise.reject(err)
  }
)

export default instance
