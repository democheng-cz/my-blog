import { watchEffect, computed, watch } from "vue"
import { storeToRefs } from "pinia"
import { useHomeStore } from "@/store/home"
import DcCache from "@/utils/storage"

export function useAsideData() {
	const { asideUserList, asideHotBlogList } = storeToRefs(useHomeStore())

	const asideDataComputed = computed(() => {
		return { asideUserList, asideHotBlogList }
	})

	watch(
		() => asideDataComputed.value,
		newVal => {
			if (
				!newVal.asideHotBlogList.value?.length ||
				!newVal.asideUserList.value?.length
			) {
				console.log("first")
				newVal.asideHotBlogList.value = DcCache.getCache("asideHotBlogList")
				newVal.asideUserList.value = DcCache.getCache("asideUserList")
			}
			console.log(newVal.asideHotBlogList.value)
		},
		{
			deep: true,
			immediate: true,
		}
	)

	return {
		asideUserList,
		asideHotBlogList,
	}
}
