<template>
	<div class="bottom-tab">
		<div class="tab-item" @click="switchTo('/')">
			<img :src="'/' === $route.path ? tabBarImgArr[0].selected : tabBarImgArr[0].normal" alt="首页">
			<span :class="{on: '/' === $route.path}">首页</span>
		</div>
		<div class="tab-item" @click="switchTo('/classs')">
			<img :src="'/classs' === $route.path ? tabBarImgArr[1].selected : tabBarImgArr[1].normal" alt="分类">
			<span :class="{on: '/classs' === $route.path}">分类</span>
		</div>
		<div class="tab-item" @click="switchTo('/find')">
			<img :src="'/find' === $route.path ? tabBarImgArr[2].selected : tabBarImgArr[2].normal" alt="发布">
			<span :class="{on: '/find' === $route.path}">发布</span>
		</div>
		<div class="tab-item" @click="switchTo('/my')">
			<img :src="'/my' === $route.path ? tabBarImgArr[3].selected : tabBarImgArr[3].normal" alt="我的">
			<span :class="{on: '/my' === $route.path}">我的</span>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'bottomNavigation',
		data() {
			return {
				tabBarImgArr: [ //图片切换
					{
						normal: require('@/assets/img/home/lhome.png'),
						selected: require('@/assets/img/home/lhome-active.png')
					},
					{
						normal: require('../assets/img/class/lclass.png'),
						selected: require('../assets/img/class/lclass-active.png')
					},

					{
						normal: require('../assets/img/find/lfind.png'),
						selected: require('../assets/img/find/lfind-active.png')
					},
					{
						normal: require('../assets/img/my/lmy.png'),
						selected: require('../assets/img/my/lmy-active.png')
					},
					
				]
			}
		},
		methods: {
			switchTo(path) {
				// console.log(this.$router)
				this.$router.replace(path)
			}
		}
	}
</script>

<style scoped="scoped">
	.bottom-tab {
		width: 100%;
		background-color: #fff;
		position: fixed;
		left: 0px;
		bottom: 0px;
		display: flex;
		z-index: 999;
	}

	.tab-item {
		display: flex;
		flex: 1;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		font-size: 14px;
		color: #666;
	}

	img {
		width: .4rem;
		margin-bottom: 2px;
		height: .4rem;
	}


	.on {
		color: red;
	}
</style>
