<template>
	<div class="user-container flex-col md:items-center">
		<template v-for="item in users">
			<div class="item mb-10 flex md:flex-col items-center">
				<div class="avatar">
					<img :src="item.avatar" alt="" class="object-cover" />
				</div>
				<div class="info md:flex flex-col items-center">
					<div class="nickname">{{ item.nick_name }}</div>
					<div class="profession">职位: 前端程序员</div>
					<div class="introduce">
						<p>
							{{
								item.desc ||
								`平时喜欢敲敲代码，喜欢打乒乓球，偶尔游戏（war3，好久没玩了），爱耍抖音（刷完一片空虚，哈哈，有木有同类）。我的座右铭是
							搞事情多做要快，姿势要帅。不喜欢加班，也很少加班。`
							}}
						</p>
					</div>
				</div>
			</div>
		</template>
	</div>
</template>

<script lang="ts" setup>
import { onUnmounted, ref, watch } from "vue"
import { useRoute } from "vue-router"
import { dcCache } from "@/utils/storage"

const route = useRoute()
const users = ref<any>()
// if (route.params.id) {
// 	users.value = dcCache.getCache("currentUser")
// } else {
// 	users.value = dcCache.getCache("asideUserList")
// }

watch(
	() => route.params.id,
	() => {
		if (route.params.id) {
			users.value = dcCache.getCache("currentUser")
		} else {
			users.value = dcCache.getCache("asideUserList")
		}
	},
	{
		immediate: true,
	}
)
</script>

<style scoped lang="less">
.user-container {
	width: 100%;
	// height: 100%;
	background-color: #fff;
	display: flex;
	// align-items: center;
	box-sizing: border-box;
	padding: 15px;

	.avatar {
		width: 13.1579vw;
		height: 13.1579vw;
		margin-right: 20px;
		img {
			width: 13.1579vw;
			height: 13.1579vw;
			object-fit: cover;
			border-radius: 50%;
		}
	}
	.info {
		flex: 1;
		height: 100%;
		padding-top: 20px;
		// display: flex;
		// flex-direction: column;
		// justify-content: center;
		.nickname {
			font-size: 16px;
			color: #4f4f4f;
			font-weight: 800;
		}
		.profession {
			margin: 20px 0 35px 0;
			font-size: 14px;
		}
		.introduce {
			text-indent: 1em;
			font-size: 14px;
			P {
				line-height: 20px;
			}
		}
	}
}
</style>
