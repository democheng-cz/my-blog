<template>
	<div class="home-container">
		<template v-for="i in 10" :key="i">
			<list-item-v1></list-item-v1>
		</template>
	</div>
</template>

<script lang="ts" setup>
import listItemV1 from "@/components/list-item-v1.vue"
import { useHomeStore } from "@/store/home"

const { getBlogList } = useHomeStore()
getBlogList()
</script>

<style scoped lang="less">
.home-container {
	width: 1040px;
	box-sizing: border-box;
	padding: 10px 20px;
	background-color: #fff;
}
</style>
