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
					<p class="main-top-tab-text" :id="active==index?'addColor':''">{{tab}}</p>
				</div>
			</div>
			<div class="main-top-hongbaoyu">
				<img src="../assets/img/home/hongbaoyu.png" alt="">
			</div>
		</div>
		<div class="main-center">
			<div class="main-center-classify">
				<div class="main-center-classify-item" v-for="(item,index) in classify" :key="index">
					<div class="main-center-classify-item-img">
						<img :src="item.imgSrc" alt="">
					</div>
					<p>{{item.text}}</p>
				</div>
			</div>
			<div class="main-center-chuxiao">
				<img src="../assets/img/home/chuxiao.png" alt="">
			</div>
			<div class="main-center-baokuan">
				<img src="../assets/img/home/zhijiang.png" alt="">
				<img src="../assets/img/home/dapai.png" alt="">
			</div>
			<div class="main-center-lipin">
				<img src="../assets/img/home/31.png" alt="">
				<img src="../assets/img/home/32.png" alt="">
				<img src="../assets/img/home/33.png" alt="">
			</div>
			<div class="main-center-chaoji">
				<div class="main-center-chaoji-bgimg">
					<p class="main-center-chaoji-bgimg-text">超级单品</p>
					<div class="main-center-chaoji-bgimg-time">
						<p>00</p>
						<span>:</span>
						<p>00</p>
						<span>:</span>
						<p>00</p>
					</div>
				</div>
				<div class="main-center-chaoji-danpin">
					<div class="main-center-chaoji-danpin-addbox">
						<div class="main-center-chaoji-danpin-addbox-left" v-for="(item,index) in chaojiList" :key="index">
							<div class="main-center-chaoji-danpin-addbox-left-img">
								<img :src="item.imgSrc" alt="">
							</div>
							<p style="margin:0;marginTop:10px;fontWeight:1000">￥{{item.price1}}</p>
							<p style="color:#929292;textDecoration:line-through;margin:0">￥{{item.price2}}</p>
						</div>
					</div>
					<div class="main-center-chaoji-danpin-right">
						<div class="main-center-chaoji-danpin-right-img">
							<img src="../assets/img/home/shui.png" alt="">
						</div>
						<p style="fontWeight:1000">￥69.0</p>
						<p class="main-center-chaoji-danpin-right-qianggou">立即抢购 ></p>
					</div>
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
			active:0,
			classify:[
				{imgSrc:require("@/assets/img/home/qianku.png"),text:"千库购物"},
				{imgSrc:require("@/assets/img/home/jiukuaijiu.png"),text:"9.9包邮"},
				{imgSrc:require("@/assets/img/home/temai.png"),text:"清仓特卖"},
				{imgSrc:require("@/assets/img/home/huangou.png"),text:"1元福利"},
				{imgSrc:require("@/assets/img/home/huafei.png"),text:"话费充值"},
				{imgSrc:require("@/assets/img/home/kanjia.png"),text:"砍至1元"},
				{imgSrc:require("@/assets/img/home/tuangou.png"),text:"品团购"},
				{imgSrc:require("@/assets/img/home/choujiang.png"),text:"天天抽奖"},
				{imgSrc:require("@/assets/img/home/jinbi.png"),text:"领金币"},
				{imgSrc:require("@/assets/img/home/zhixiao.png"),text:"工厂直销"}
			],
			chaojiList:[
				{
					imgSrc:require("@/assets/img/home/shouji.png"),
					price1:'3399.0',
					price2:'4400.0'
				},
				{
					imgSrc:require("@/assets/img/home/bao.png"),
					price1:'49.9',
					price2:'60.0'
				},
				{
					imgSrc:require("@/assets/img/home/xie.png"),
					price1:'99.0',
					price2:'158.0'
				}
			]
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
#addColor{
	font-weight: 700;
	border-bottom: 3px solid white;
}
.main{
    font-size: 13px;
	&-top{
		width: 100%;
		height: 350px;
		background-color: #FF4A2B;
		padding-top: 1px;
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
					border-radius: 50%;
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
		&-hongbaoyu{
			margin-top: 20px;
			z-index: 1;
			img{
				width: 710px;
				height: 215px;
				border-radius: 15px;
			}
		}
	}
	&-center{
		padding-top: 1px;
		&-classify{
			display: flex;
			flex-wrap: wrap;
			justify-content: space-around;
			margin-top: 70px;
			&-item{
				width: 20%;
				&-img{
					img{
						width: 84px;
						height: 84px;
					}
				}
			}
		}
		&-chuxiao{
			img{
				width: 750px;
				height: 194px;
			}
		}
		&-baokuan{
			img{
				width: 348px;
				height: 164px;
			}
		}
		&-lipin{
			width: 712px;
			display: flex;
			justify-content: space-around;
			margin: 0 auto;
			margin-top: 15px;
			img{
				width: 226px;
				height: 238px;
			}
		}
		&-chaoji{
			width: 704px;
			height: 356px;
			background-color: #fde9e8;
			border-radius: 8px;
			margin: 0 auto;
			margin-top: 20px;
			&-bgimg{
				width: 414px;
				height: 76px;
				border-radius: 8px 0 0 0;
				background-size: 414px 76px;
				background-image: url(../assets/img/home/shijian.png);
				display: flex;
				justify-content: flex-start;
				align-items: center;
				&-text{
					font-size: 34px;
					font-weight: 600;
					color: #ffffff;
					margin: 0 20px;
				}
				&-time{
					display: flex;
					justify-content: flex-start;
					align-items: center;
					margin-top: 10px;
					p{
						width: 38px;
						height: 34px;
						background-color: #ffffff;
						color: #ff0700;
						font-weight: 700;
						line-height: 34px;
						text-align: center;
						border-radius: 4px;
					}
					span{
						display: inline-block;
						font-weight: 700;
						color: #ffffff;
						width: 15px;
					}
				}
			}
			&-danpin{
				position: relative;
				&-addbox{
					display: flex;
					justify-content: flex-start;
					margin-left: 20px;
					align-items: flex-end;
					margin-top: 50px;
					&-left{
						width: 140px;
						height: 208px;
						background-color: white;
						border-radius: 8px;
						margin-right: 15px;
						&-img{
							width: 80%;
							height: 60%;
    						margin: 0 auto;
							img{
								max-width: 85%;
								max-height: 85%;
								margin-top: 20px;						
							}
						}
					}
				}
				&-right{
					width: 200px;
					height: 298px;
					background-color: white;
					border-radius: 8px;
					position: absolute;
					bottom: 0;
					right: 20px;
					&-img{
						img{
							max-width: 60%;
							max-height: 60%;
							margin-top: 30px;	
						}
					}
					&-qianggou{
						width: 167px;
						height: 42px;
						margin: 0 auto;
						border-radius: 20px;
						color: #fff;
						font-weight: 400;
						line-height: 42px;
						background-image: linear-gradient(#ff8f57, #ff3311);
					}
				}
			}
		}
	}
}

</style>
