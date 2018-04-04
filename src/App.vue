<template>
	<div id="app">
		<div class="top">
			<div>REALSTATE地产，您居家置业最信赖的地产！</div>
		</div>
		<div id="logo">
			<div class="logoimg">
				<img src="../src/assets/logo.png" />
				<div class="clear"></div>
			</div>

			<div id="nava">
				<li>
					<router-link to="/">
						<a href="#">首页</a>
					</router-link>
				</li>
				<li>
					<router-link to="/about">全新楼盘</router-link>
				</li>
				<li>
					<router-link to="/ty">二手楼盘</router-link>
				</li>
				<li>
					<router-link to="quanxinshangpu">全新商铺</router-link>
				</li>
				<li>
					<router-link to="loushidongtai">楼市动态</router-link>
				</li>
				<li>
					<router-link to="lianxiwomen">联系我们</router-link>
				</li>

			</div>
			<div class="lianxi">
				<!--<img src="" />-->
			</div>
			<div class="clear"></div>
		</div>
		<router-view/>
		<!--<div class="footer">
			地产REALSTATE  © 2020 All Rights Reserved.
		</div>-->
	</div>
</template>

<style>
	* {
		list-style: none;
		text-decoration: none;
		padding: 0;
		margin: 0;
		color: black;
	}
	
	.top {
		width: 100%;
		background: #262626;
		font-family: "微软雅黑";
		font-size: 11px;
		color: #8e8e8e;
		float: left;
		overflow: hidden;
	}
	
	.top div {
		padding: 24px 0 24px 80px;
		background: #262626;
		font-family: "微软雅黑";
		font-size: 11px;
		color: #8e8e8e;
		float: left;
	}
	
	#logo {
		width: 100%;
		float: left;
	}
	
	.logoimg {
		width: 151px;
		height: 50px;
		padding: 28px 0 10px 80px;
		float: left;
	}
	
	.clear {
		clear: both;
	}
	
	#nava {
		width: 700px;
		padding: 45px 0 10px 100px;
		float: left;
	}
	
	#nava li {
		float: left;
		margin-left: 40px;
		font-size: 14px;
	}
	
	.lianxi {
		width: 200px;
		height: 30px;
		float: left;
		background: #8E8E8E;
		margin: 37px 40px 20px 20px;
	}
	.footer{
		width: 100%;
		height: 42px;
		padding: 20px 0 20px 0;
		float: left;
		background: #262626;
		color: #8d9095;
		text-align: center;
		line-height: 42px;
		font-size: 12px;
	}
</style>