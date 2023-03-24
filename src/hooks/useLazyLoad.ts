import { ref } from "vue"
import { dcThrottle } from "@/utils"

export function useLazyLoad(callback?: () => void) {
	const wrapperRef = ref<HTMLDivElement>()

	const isLoading = ref<boolean>(false)

	const ScrollCallback = dcThrottle(() => {
		if (
			wrapperRef.value!.clientHeight - document.documentElement.clientHeight <=
			window.scrollY
		) {
			isLoading.value = true
			callback && callback()
			// console.log("first")
			// console.log(window.scrollY)
			isLoading.value = false
		}
	}, 500)
	const isView = () => {
		window.addEventListener("scroll", ScrollCallback)
	}

	// 清楚监听
	const cancelListener = () => {
		window.removeEventListener("scroll", ScrollCallback)
	}

	return {
		wrapperRef,
		isView,
		isLoading,
		cancelListener,
	}
}
