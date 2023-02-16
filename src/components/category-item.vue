<template>
	<div class="category-item" :style="{ width: width }">
		<div class="wrap" :style="{ border: hasBorder ? '1px solid #ddd' : 0 }">
			<div class="left">
				<img src="@/assets/images/猫和老鼠.png" alt="" />
			</div>
			<div class="right">
				<div class="title" @click="getCategoryListById(item.categoryId)">
					{{ item.categoryName }}
				</div>
				<div class="desc">{{ item.categoryDesc + item.categoryDesc }}</div>
				<div class="article">
					<span>文章数:</span>
					<span class="number">{{ item.blogCount }}</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { ref } from "vue"
import { useRouter } from "vue-router"
import { useHomeStore } from "@/store/home"

const router = useRouter()
const props = withDefaults(
	defineProps<{
		item: any
		hasBorder?: boolean
		width?: string
		flag?: string
	}>(),
	{
		item: () => ({}),
		hasBorder: true,
		width: "25%",
		flag: "category",
	}
)

const getCategoryListById = function (id: number) {
	//  修改currentCategory
	if (props.flag === "category") {
		useHomeStore().changeCurrentCategory(props.item)
	}
	if (props.flag === "topic") {
		useHomeStore().getTopicDetail(id)
	}
	router.push(`/${props.flag}/${id}`)
	console.log(id)
}
</script>

<style scoped lang="less">
@import "@/assets/css/variable.less";
.category-item {
	width: 25%;
	padding: 10px;
	box-sizing: border-box;
	.wrap {
		height: 100%;
		// width: 100%;
		border: 1px solid #ddd;
		box-sizing: border-box;
		border-radius: 10px;
		padding: 10px 10px;
		display: flex;
		// align-items: center;
		.left {
			// width: 100px;
			// flex: 1;
			img {
				width: 100px;
				height: 100px;
				border-radius: 5px;
			}
		}
		.right {
			// width: auto;
			// flex: 1;
			height: 100%;
			margin-left: 10px;
			display: flex;
			flex-direction: column;
			justify-content: center;
			.desc {
				margin: 15px 0;
				font-size: 14px;
				text-overflow: ellipsis;
				overflow: hidden;
				// white-space: nowrap;
				-webkit-line-clamp: 1;
				-webkit-box-orient: vertical;
				display: -webkit-box;
			}
			.title {
				color: @first-color;
				font-size: 18px;
				cursor: pointer;
			}
			.article {
				font-size: 12px;
				color: @text-color;
				.number {
					margin-left: 5px;
					font-size: 14px;
				}
			}
		}
	}
}
</style>
