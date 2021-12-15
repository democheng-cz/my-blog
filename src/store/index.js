import { createStore } from "vuex"
import user from "./modules/user"
import article from "./modules/article"
const store = createStore({
  modules: {
    user,
    article,
  },
})

export default store
