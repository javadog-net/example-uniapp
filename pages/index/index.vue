<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<u-button type="primary" text="测试" @click='login'></u-button>
		</view>

		<h3>{{$moment(new Date()).format('yyyy-MM-DD HH:mm:ss')}}</h3>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {
			async login() {
				const param = {
					"username": "admin",
					"password": "123456"
				}
				const result = await this.$api.login(param);
				alert(JSON.stringify(result))
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}

	h3 {
		margin-top: 20px;
	}
</style>
