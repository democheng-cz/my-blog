import { createRouter, createWebHashHistory } from "vue-router"
import routes from "./routes"

// // 实例化一个router对象
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
