import { createRouter, createWebHistory } from "vue-router"
import { useHomeStore } from "@/store/home"

import routes from "./routes"
const router = createRouter({
	history: createWebHistory(),
	routes,
})

router.beforeEach(to => {
	// dcCache.setCache("currentPath", to.path)
	// homeStore.changeCurrentPath(to.path)
	useHomeStore().changeCurrentPath(to.path)
})
export default router
