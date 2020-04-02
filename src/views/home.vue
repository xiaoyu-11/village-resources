<template>
	<div class="main">
		<div class="main-top">
			<div class="main-top-sousou">
				<div class="main-top-sousou-img">
					<img src="../assets/img/home/sousou.png" alt="">
				</div>
				<div class="main-top-sousou-input">
					<input type="text" placeholder="西裤">
				</div>
			</div>
			<div class="main-top-tab">
				<div class="main-top-tab-item" v-for="(tab, index) in tab" :key="index" @click="onTab(index)" >
					<p class="main-top-tab-text" :class="active==index?'addColor':''">{{tab}}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data(){
		return{
			tab:["精选","数码","运动","男装","家电","美妆","个护"],
			active:0
		}
	},
	methods:{
		onTab(index){
			this.active = index
			console.log(this.active)
		}
	}
	
}
</script>

<style lang="less">

.main{
    font-size: 13px;
	&-top{
		width: 100%;
		height: 390px;
		background-color: #FF4A2B;
		overflow: hidden;
		&-sousou{
			width: 710px;
			height: 60px;
			background-color: #fff;
			margin: 0 auto;
			border-radius: 50px;
			margin-top: 20px;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			&-img{
				margin-left: 10px;
				img{
					width: 50px;
					height: 50px;
					vertical-align: middle;
				}
			}
			&-input{
				margin-left: 10px;
				input{
					width: 600px;
					height: 50px;
					border: transparent;
					outline: none;
				}
			}
		}
		&-tab{
			height: 60px;
			margin-top: 20px;
			display: flex;
			justify-content: space-around;
			align-items: center;
			&-item{
				p{
					font-size: 28px;
					color: #ffffff;
				}
			}
		}
	}
}
.addColor{
	color: red;
}
</style>
