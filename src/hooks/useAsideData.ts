import { computed, watch } from "vue"
import { storeToRefs } from "pinia"
import { useHomeStore } from "@/store/home"
import { dcCache } from "@/utils/storage"

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
				newVal.asideHotBlogList.value = dcCache.getCache("asideHotBlogList")
				newVal.asideUserList.value = dcCache.getCache("asideUserList")
			}
		},
		{
			deep: true,
			immediate: true,
		}
	)
	return {
		asideUserList,
		asideHotBlogList,
		getAllData: useHomeStore().getAllData,
	}
}
