<template>
	<div class="blog-detail-container">
		<template v-if="blogDetail">
			<v-md-preview :text="blogDetail.content" mode="preview"></v-md-preview>
		</template>
		<!-- <v-md-preview
			:text="blogDetail.markdownContent"
			mode="preview"
		></v-md-preview> -->
		<!-- <v-md-preview :text="text" mode="preview"></v-md-preview> -->
	</div>
</template>

<script lang="ts" setup>
import { ref } from "vue"
import { storeToRefs } from "pinia"
import { useBlogDetail } from "@/store/blogDetail"
import DcCache from "@/utils/storage"
// import RM from  "../../assets/read.md"
const rm = import.meta.glob("../../assets/read.md", { as: "raw" })
const text = ref<string>("")
// async function foo() {
// 	const res = await rm["../../assets/read.md"]()
// 	text.value = res
// 	// console.log(text)
// }
// foo()

const { blogDetail } = storeToRefs(useBlogDetail())
blogDetail.value = blogDetail.value || DcCache.getCache("currentBlogDetail")
</script>

<style scoped lang="less">
.blog-detail-container {
	width: 100%;
	box-sizing: border-box;
	padding: 10px 20px;
	background-color: #fff;
}
</style>
