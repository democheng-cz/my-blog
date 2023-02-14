import { createApp } from "vue"

import "normalize.css"
import "element-plus/dist/index.css"

import App from "./App.vue"
import router from "./router"
import pinia from "./store"
import "@/assets/css/reset.css"

const app = createApp(App)

app.use(router)
app.use(pinia)

app.mount("#app")
