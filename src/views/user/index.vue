<template>
	<div class="user-container">
		<div class="avatar">
			<img src="@/assets/images/猫和老鼠.png" alt="" />
		</div>
		<div class="info">
			<div class="nickname">democehng</div>
			<div class="profession">职位: 前端程序员</div>
			<div class="introduce">
				<p>
					平时喜欢敲敲代码，喜欢打乒乓球，偶尔游戏（war3，好久没玩了），爱耍抖音（刷完一片空虚，哈哈，有木有同类）。我的座右铭是
					搞事情多做要快，姿势要帅。不喜欢加班，也很少加班。
				</p>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup></script>

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
		width: 200px;
		height: 200px;
		margin-right: 20px;
		img {
			width: 200px;
			height: 200px;
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
			text-indent: 2em;
			font-size: 14px;
			P {
				line-height: 20px;
			}
		}
	}
}
</style>
