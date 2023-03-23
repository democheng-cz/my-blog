<template>
	<div class="aside-tab-container pl-5 pr-5 mb-5 pb-5">
		<aside-tab-header :title="title" />
		<template v-for="item in newData" :key="item.user_id">
			<aside-tab-item :name="name" :item="item"></aside-tab-item>
		</template>
	</div>
</template>

<script lang="ts" setup>
import { watchEffect, ref } from "vue"
import asideTabItem from "./aside-tab-item.vue"
import asideTabHeader from "./aside-tab-header.vue"

import dcCache from "@/utils/storage"

interface PropsType {
	data: any[]
	title: string
	name: string
}
const props = withDefaults(defineProps<PropsType>(), {
	data: () => [],
})
const newData = ref<any>([])
if (props.data) {
	newData.value = [...props.data]
}

// watchEffect(() => {
// 	switch (props.name) {
// 		case "user":
// 			newData.value = props.data || dcCache.getCache("asideUserList")
// 			break
// 		case "hotBlog":
// 			newData.value = props.data || dcCache.getCache("asideHotBlogList")
// 			// console.log(dcCache.getCache("asideHotBlogList"))
// 			break
// 	}
// })
</script>

<style scoped lang="less">
.aside-tab-container {
	width: 100%;
	background-color: #fff;
	margin-left: 10px;
	overflow: hidden;
}
</style>
