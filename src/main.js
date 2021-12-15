import { createApp } from "vue"
import App from "./App.vue"
import router from "./route/index"
import store from "./store"
import "@/assets/css/reset.css"

createApp(App).use(router).use(store).mount("#app")
