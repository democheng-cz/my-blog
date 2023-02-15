<template>
	<div class="category-container">
		<template v-for="item in categoryList" :key="item.categoryId">
			<category-item :item="item"></category-item>
		</template>
	</div>
</template>

<script lang="ts" setup>
import categoryItem from "@/components/category-item.vue"
import { useHomeStore } from "@/store/home"
import { storeToRefs } from "pinia"

const { categoryList } = storeToRefs(useHomeStore())
</script>

<style scoped lang="less">
.category-container {
	width: 100%;
	display: flex;
	box-sizing: border-box;
	padding: 10px 20px;
	background-color: #fff;
	flex-wrap: wrap;
}
</style>
