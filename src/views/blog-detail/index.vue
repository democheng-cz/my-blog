<template>
	<div class="blog-detail-container">
		<v-md-preview :text="blogDetail.content" mode="preview"></v-md-preview>
		<!-- <v-md-preview
			:text="blogDetail.markdownContent"
			mode="preview"
		></v-md-preview> -->
		<!-- <v-md-preview :text="text" mode="preview"></v-md-preview> -->
	</div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue"
import { storeToRefs } from "pinia"
import { useBlogDetail } from "@/store/blogDetail"
// import RM from  "../../assets/read.md"
const rm = import.meta.glob("../../assets/read.md", { as: "raw" })
const text = ref<string>("")
async function foo() {
	const res = await rm["../../assets/read.md"]()
	console.log(typeof res)
	text.value = res
	console.log(text)
}
foo()

const { blogDetail } = storeToRefs(useBlogDetail())
// const html = ref(
// 	'<div data-v-md-line="1"><h1 align="center">Markdown Editor built on Vue</h1>'
// )
</script>

<style scoped lang="less">
.blog-detail-container {
	width: 100%;
	box-sizing: border-box;
	padding: 10px 20px;
	background-color: #fff;
}
</style>
