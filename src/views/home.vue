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
			<div class="main-top-hongbaoyu" v-if="active==0">
				<img src="../assets/img/home/hongbaoyu.png" alt="">
			</div>
			<div class="main-top-hongbaoyu" v-if="active==1">
				<img src="../assets/img/home/jifen.png" alt="">
			</div>
		</div>
		<div v-if="active==0">
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
				<div class="main-center-tab2">
					<div class="main-center-tab2-item" v-for="(tab2,index) in tab2" :key="index" @click="onTab2(index)">
						<div class="main-center-tab2-item-img">
							<img :src="tab2.img" alt="">
							<p>{{tab2.text1}}</p>
						</div>
						<p class="main-center-tab2-item-text" :id="active2==index?'addColor2':''">{{tab2.text2}}</p>
					</div>
				</div>
			</div>
		</div>
		<div v-if="active==1">
			<div class="main-digital">
				<div class="main-digital-classify">
					<div class="main-digital-classify-item" v-for="(digital_classify, index) in digital_classify" :key="index">
						<div class="main-digital-classify-item-bgcolor">
							<img :src="digital_classify.img" alt="">
						</div>
						<p class="main-digital-classify-item-text">{{digital_classify.text}}</p>
					</div>
				</div>
			</div>
			<div class="main-digital-top">
				<div class="main-digital-top-img1">
					<img :src="digital_top.img1" alt="" >
					<p class="main-digital-top-img1-text1">新品首发</p>
					<p class="main-digital-top-img1-text2">开通颜值卡享97折</p>
				</div>
				<div class="main-digital-top-img2">
					<img :src="digital_top.img2" alt="" >
					<p class="main-digital-top-img1-text1">数码Top榜</p>
					<p class="main-digital-top-img1-text2">QKMax直降1000</p>
				</div>
				<div class="main-digital-top-img3">
					<img :src="digital_top.img3" alt="" >
					<p class="main-digital-top-img1-text1">新品首发</p>
					<p class="main-digital-top-img1-text2">开通颜值卡享97折</p>
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
			active:1,
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
			],
			tab2:[
				{text1:"精选",text2:"猜你喜欢",img:require("@/assets/img/home/jinxuan.png")},
				{text1:"每日上新",text2:"新品抢鲜",img:require("@/assets/img/home/shangxin.png")},
				{text1:"先用后付",text2:"安心花吧",img:require("@/assets/img/home/huangguan.png")},
				{text1:"限时拼团",text2:"拼出好价",img:require("@/assets/img/home/pintuan.png")}
			],
			active2:0,
			digital_classify:[
				{img:require("@/assets/img/home/iphone.png"), text: "手机"},
				{img:require("@/assets/img/home/ipad.png"), text: "平板"},
				{img:require("@/assets/img/home/Headset.png"), text: "耳机"},
				{img:require("@/assets/img/home/camera.png"), text: "相机"},
				{img:require("@/assets/img/home/parts.png"), text: "手机配件"},
				{img:require("@/assets/img/home/computer.png"), text: "笔记本"},
				{img:require("@/assets/img/home/pc.png"), text: "电脑办公"},
				{img:require("@/assets/img/home/game.png"), text: "游戏机"},
				{img:require("@/assets/img/home/Intelligence.png"), text: "智能设备"},
				{img:require("@/assets/img/home/mai.png"), text: "值得买"},
			],
			digital_top:{
				img1:require("@/assets/img/home/iphone1.png"),
				img2:require("@/assets/img/home/iphone2.png"),
				img3:require("@/assets/img/home/iphone3.png"),
				
			}
		}
	},
	methods:{
		onTab(index){
			this.active = index
			console.log(this.active)
		},
		onTab2(index){
			this.active2 = index
			console.log(index)
		}
	}

}
</script>

<style lang="less">
#addColor{
	font-weight: 700;
	border-bottom: 4px solid white;
}
#addColor2{
	border-bottom: 3px solid #ff492e;
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
		&-tab2{
			width: 704px;
			height: 100px;
			background-color: white;
			margin: 0 auto;
			display: flex;
			justify-content: space-around;
			&-item{
				width: 160px;
				&-img{
					display: flex;
					justify-content: center;
					align-items: center;
					img{
						width: 34px;
						height: 34px;
					}
					p{
						font-weight: 700;
					}
				}
				&-text{
					margin: 0 auto;
					width: 90px;
					color: #6d6d6d;

					font-size: 14px;
				}
			}
		}
	}
	&-digital{
		padding-top: 70px;
		background-color: white;
		&-classify{
			display: flex;
			flex-wrap: wrap;
			justify-content: space-around;
			&-item{
				width: 20%;
				height: 140px;
				&-bgcolor{
					width: 84px;
					height: 84px;
					background-color: #f1f1f1;
					border-radius: 50%;
					margin: 0 auto;
					img{
						width: 50px;
						height: 60px;
						margin-top: 10px;
					}
				}
			}
		}
		&-top{
			width: 712px;
			height: 360px;
			margin: 0 auto;
			background-image: url(../assets/img/home/top_bgimg.png);
			background-size: 712px 360px;
			position: relative;
			margin-top: 10px;
			&-img1{
				width: 196px;
				position: absolute;
				top: 40px;
				left: 27px;
				img{
					width: 143px;
					height: 193px;
				}
				&-text1{
					font-size: 28px;
					font-weight: 700;
					color: #fff;
					margin: 0;
				}
				&-text2{
					width: 190px;
					height: 32px;
					background-image: linear-gradient(#f9f8fd, #d6d8fb);
					border-radius: 15px;
					line-height: 32px;
					font-size: 12px;
					margin: 10px auto;
					color: #5c5e89;
				}
			}
			&-img2{
				position: absolute;
				top: 30px;
				left: 260px;
				img{
					width: 189px;
					height: 183px;
				}
				&-text1{
					font-size: 28px;
					font-weight: 700;
					color: #fff;
					margin: 0;
				}
				&-text2{
					width: 190px;
					height: 32px;
					background-image: linear-gradient(#f9f8fd, #d6d8fb);
					border-radius: 15px;
					line-height: 32px;
					font-size: 12px;
					margin: 10px auto;
					color: #5c5e89;
				}
			}
			&-img3{
				position: absolute;
				top: 35px;
				left: 490px;
				img{
					width: 142px;
					height: 194px;
				}
				&-text1{
					font-size: 28px;
					font-weight: 700;
					color: #fff;
					margin: 0;
				}
				&-text2{
					width: 190px;
					height: 32px;
					background-image: linear-gradient(#f9f8fd, #d6d8fb);
					border-radius: 15px;
					line-height: 32px;
					font-size: 10px;
					margin: 10px auto;
					color: #5c5e89;
					
				}
			}
		}
	}
}

</style>
