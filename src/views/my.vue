<template>
	<!-- 我的页面 -->
	<div class="main">
		<!-- 顶部个人信息 -->
		<div class="my-top">
			<div class="infoimg">
				<router-link to="#">
					<img src="../assets/img/my/linfoimg.jpg" alt="头像">
				</router-link>
			</div>
			<div class="infotext">
				<p>清苦军</p>
				<p>清苦军清苦军清苦军清苦军清苦军清苦军</p>
			</div>
			<div class="infoinfo">
				<router-link to="#">
					<img src="../assets/img/my/l_my_03.jpg" alt="设置">
				</router-link>
				<router-link to="#">
					<img src="../assets/img/my/l_my_05.jpg" alt="消息">
				</router-link>
			</div>
			<!-- 头部广告 -->
			<div class="mytop-gg">
				<div class="mytop-gg-left">
					<img src="../assets/img/my/l_my_10.jpg" alt="">
					<span>千库超级会员</span>
					<p>每次打八折，还不亏死了</p>
				</div>
				<div class="mytop-gg-right">
					<span>立享88折</span>
					<img src="../assets/img/my/l_my_14.jpg" alt="">
				</div>
			</div>
		</div>
		<!-- 购物信息 -->
		<div class="gouwu-tit">
			<router-link to="#">
				<div class="gouwu-tit-le">
					<img src="../assets/img/my/l_my_18.jpg" alt="">
					<p>待付款</p>
				</div>
			</router-link>
			<router-link to="#">
				<div class="gouwu-tit-le">
					<img src="../assets/img/my/l_my_20.jpg" alt="">
					<p>待发货</p>
				</div>
			</router-link>
			<router-link to="#">
				<div class="gouwu-tit-le">
					<img src="../assets/img/my/l_my_22.jpg" alt="">
					<p>待收货</p>
				</div>
			</router-link>
			<router-link to="#">
				<div class="gouwu-tit-le">
					<img src="../assets/img/my/l_my_24.jpg" alt="">
					<p>待评价</p>
				</div>
			</router-link>
			<router-link to="#">
				<div class="gouwu-tit-le">
					<img src="../assets/img/my/l_my_26.jpg" alt="">
					<p>退款/售后</p>
				</div>
			</router-link>
		</div>
		<!-- 签到、邀请、领劵等 -->
		<div class="yhzx-tit">
			<router-link to="#">
				<div class="yhzx-title">
					<img src="../assets/img/my/l_my_34.jpg" alt="">
					<span>签到赚钱</span>
					<p>></p>
				</div>
			</router-link>
			<router-link to="#">
				<div class="yhzx-title">
					<img src="../assets/img/my/l_my_37.jpg" alt="">
					<span>邀请好友</span>
					<p>></p>
				</div>
			</router-link>
			<router-link to="#">
				<div class="yhzx-title">
					<img src="../assets/img/my/l_my_39.jpg" alt="">
					<span>领劵中心</span>
					<p>></p>
				</div>
			</router-link>
			<router-link to="#">
				<div class="yhzx-title">
					<img src="../assets/img/my/l_my_41.jpg" alt="">
					<span>分享有礼</span>
					<p>></p>
				</div>
			</router-link>
		</div>
		<!-- 猜你喜欢 -->
		<div class="Guesslike">
			<div class="Guesslike-tit">
				<hr class="cl-one">
				<img src="../assets/img/my/l_my_44.png" alt="">
				<span>猜你喜欢</span>
				<hr class="cl-two">
			</div>
		</div>
		<el-tabs v-model="activeName" @tab-click="handleClick">
			<el-tab-pane label="精选推荐" name="first">
				<div class="my-shoplist">
					<div class="my-shopfor">
						<router-link to="#">
							<img src="../assets/img/my/shopfor.png" alt="">
							<p>非公开飞机公司法定公开方式能够把开发商</p>
							<span class="money">￥</span>
							<span class="money money-rmb">47.90</span>
							<span class="money juan">劵</span>
							<span class="xiangshi">看相似</span>
						</router-link>
					</div>
					<div class="my-shopfor">
						<router-link to="#">
							<img src="../assets/img/my/shopfor.png" alt="">
							<p>非公开飞机公司法定公开方式能够把开发商</p>
							<span class="money">￥</span>
							<span class="money money-rmb">47.90</span>
							<span class="money juan">劵</span>
							<span class="xiangshi">看相似</span>
						</router-link>
					</div>
					<div class="my-shopfor">
						<router-link to="#">
							<img src="../assets/img/my/shopfor.png" alt="">
							<p>非公开飞机公司法定公开方式能够把开发商</p>
							<span class="money">￥</span>
							<span class="money money-rmb">47.90</span>
							<span class="money juan">劵</span>
							<span class="xiangshi">看相似</span>
						</router-link>
					</div>
					<div class="my-shopfor">
						<router-link to="#">
							<img src="../assets/img/my/shopfor.png" alt="">
							<p>非公开飞机公司法定公开方式能够把开发商</p>
							<span class="money">￥</span>
							<span class="money money-rmb">47.90</span>
							<span class="money juan">劵</span>
							<span class="xiangshi">看相似</span>
						</router-link>
					</div>
				</div>
			</el-tab-pane>
			<el-tab-pane label="海鲜大咖" name="second">
				<div class="my-shoplist">
					<div class="my-shopfor">
						<router-link to="#">
							<img src="../assets/img/my/shopfor.png" alt="">
							<p>非公开飞机公司法定公开方式能够把开发商</p>
							<span class="money">￥</span>
							<span class="money money-rmb">47.90</span>
							<span class="money juan">劵</span>
							<span class="xiangshi">看相似</span>
						</router-link>
					</div>
				</div>
			</el-tab-pane>
			<el-tab-pane label="吃货专享" name="third">
				<div class="my-shoplist">
					<div class="my-shopfor">
						<router-link to="#">
							<img src="../assets/img/my/shopfor.png" alt="">
							<p>非公开飞机公司法定公开方式能够把开发商</p>
							<span class="money">￥</span>
							<span class="money money-rmb">47.90</span>
							<span class="money juan">劵</span>
							<span class="xiangshi">看相似</span>
						</router-link>
					</div>
				</div>
			</el-tab-pane>
			<el-tab-pane label="美食盛宴" name="fourth">
				<div class="my-shoplist">
					<div class="my-shopfor">
						<router-link to="#">
							<img src="../assets/img/my/shopfor.png" alt="">
							<p>非公开飞机公司法定公开方式能够把开发商</p>
							<span class="money">￥</span>
							<span class="money money-rmb">47.90</span>
							<span class="money juan">劵</span>
							<span class="xiangshi">看相似</span>
						</router-link>
					</div>
				</div>
			</el-tab-pane>
		</el-tabs>
		<myfooter></myfooter>
	</div>
</template>

<script>
	import myfooter from '@/components/myfooter'

	export default {
		data() {
			return {
				activeName: 'first'
			}
		},

		components: {
			myfooter
		},
		methods: {
			handleClick(tab, event) {
				console.log(tab, event);
			}

		},


	}
</script>

<style lang="less">
	.my-top {
		height: 320px;
		width: 100%;
		background-image: url(../assets/img/my/lmy-bjtop.png);
	}

	.main {
		background: #f6f6f6;
		height: 100%;
		width: 100%;
		position: fixed;
		overflow-y: scroll;
	}

	.infoimg {
		padding-left: 40px;
		padding-top: 40px;
	}

	.infoimg img {
		float: left;
		height: 130px;
		width: 130px;
		border-radius: 50%;
		border: 3px solid white;
	}

	.infotext {
		position: relative;
	}

	.infotext p:nth-of-type(1) {
		position: absolute;
		font-size: 35px;
		color: #ffffff;
		left: 198px;
		top: -10px;
		font-weight: bold;
	}

	.infotext p:nth-of-type(2) {
		position: absolute;
		font-size: 26px;
		color: #ffffff;
		top: 70px;
		left: 198px;
		width: 394px;
		font-weight: bold;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	.infoinfo {
		position: relative;
	}

	.infoinfo a:nth-of-type(1) img {
		position: absolute;
		width: 38px;
		height: 38px;
		right: 130px;

	}

	.infoinfo a:nth-of-type(2) img {
		position: absolute;
		width: 38px;
		height: 38px;
		right: 56px;
	}

	.mytop-gg {
		background-image: url(../assets/img/my/l_myy_03.png);
		position: relative;
		top: 200px;
		height: 154px;
		width: 90%;
		margin-left: 5%;
		padding: 35px 30px 40px 30px;
		box-sizing: border-box;

	}

	.mytop-gg-left {
		float: left;
		position: absolute;
	}

	.mytop-gg-left img {
		height: 30px;
		width: 38px;
	}

	.mytop-gg-left span {
		color: #ffebc3;
		font-size: 30px;
		font-weight: bold;

	}

	.mytop-gg-left p {
		color: #ffffff;
		font-size: 25px;
		font-weight: bold;
		position: absolute;
		width: 370px;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	.mytop-gg-right {
		width: 170px;
		border-radius: 30px;
		border: #ffe6bb;
		position: absolute;
		color: #ffe6bb;
		right: 75px;
		height: 52px;
		line-height: 52px;
		border: 3px solid #ffe6bb;
		text-align: center;
		top: 50%;
		font-weight: bold;
		transform: translateY(-50%);
	}

	.mytop-gg-right img {
		height: 20px;
		margin-left: 10px;
	}

	.gouwu-tit {
		margin-top: 108px;
		width: 90%;
		margin-left: 5%;
		height: 170px;
		background: white;
		border: 20px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.gouwu-tit a {
		flex: 1;
		text-align: center;
	}

	.gouwu-tit-le img {
		height: 40px;

	}

	a {
		text-decoration: none;
		z-index: 9999;
	}

	.gouwu-tit p {
		font-size: 22px;
		color: #979797;
		font-weight: bold;
	}

	.yhzx-tit {
		height: 452px;
		width: 90%;
		margin-left: 5%;
		background: white;
		margin-top: 30px;
		border-radius: 20px;
		display: flex;
		flex-wrap: wrap;
		padding: 25px 30px 27px 26px;
		box-sizing: border-box;
		align-items: center;
	}

	.yhzx-tit a {
		width: 100%;
		position: relative;


	}

	.yhzx-tit a img {
		height: 58px;
		width: 58px;
	}

	.yhzx-tit a span {
		color: #101010;
		font-size: 30px;
		font-weight: bold;
		margin-left: 22px;
		top: 15px;
		position: absolute;

	}

	.yhzx-tit p {
		display: inline-block;
		color: #ccc9c9;
		font-size: 32px;
		position: absolute;
		right: 0;
		top: -15px;
	}

	.Guesslike-tit {
		margin-top: 35px;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-bottom: 40px;
	}

	.cl-one {
		width: 70px;
		display: inline-block;
		height: 4px;
		background: #e9e9e9;
		border: none;
		margin-right: 40px;
	}

	.Guesslike-tit span {
		font-size: 35px;
		margin-left: 20px;
		font-family: "微软雅黑";
		font-weight: bold;
	}

	.cl-two {
		width: 70px;
		display: inline-block;
		height: 4px;
		background: #e9e9e9;
		border: none;
		margin-left: 40px;
	}

	.my-shoplist {
		display: flex;
		width: 90%;
		margin-left: 5%;
		flex-wrap: wrap;
		justify-content: space-between;

	}

	.my-shopfor {
		background: white;
		width: 48%;
		padding: 36px 26px 24px 28px;
		box-sizing: border-box;
		border-radius: 20px;
		position: relative;
		margin-top: 15px;
	}

	.my-shopfor img {
		width: 250px;
		height: 230px;
	}

	.my-shopfor p {
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		font-size: 23px;
		color: #1e1e1e;
		font-weight: bold;
	}

	.money {
		color: red;
	}

	.juan {
		border: 2px solid red;
		padding: 5px;
		box-sizing: border-box;
		border-radius: 20%;
		margin-left: 9px;
	}

	.money-rmb {
		margin-left: -10px;
	}

	.xiangshi {
		position: absolute;
		right: 26px;
		border: 2px solid #e5e5e5;
		border-radius: 35%;
		color: #6a6a6a;
		padding: 8px 20px;
		box-sizing: border-box;
		font-size: 16px;
		font-weight: bold;
		bottom: 10px;
	}

	.el-tabs {
		margin-bottom: 100px;
		z-index: 999;
	}

	.el-tabs__item.is-active {
		color: #ff4a2b;
	}

	.el-tabs__active-bar {
		background-color: red;
		width: 10px;
		z-index: 999999;
		height: 5px;

	}

	.el-tabs__item {
		font-size: 31px;
		font-weight: bold;
	}
</style>
