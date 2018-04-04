<template>
	<div>
		<div class="qxlp">
			<div class="qxlp-header" style="margin-top: 50px; background-color: rgb(247, 247, 247);">
				<div class="header-title" style="padding: 30px 0 20px 10px; text-align: center;">
					<h3>全新楼盘</h3>
				</div>
				<div class="header_subtitle" style="padding: 4px 0 20px   5px; text-align: center; font-size: 14px;">
					- New Apartment -
				</div>
			</div>
<div class="clear">
	
</div>
		</div>
		<div class="shuju" v-for="i in arr">

			<img :src="i.img" />
			<p>{{i.name}}</p>
			<ul>
				<li>地区：{{i.diqu}}</li>
				<li>户型：{{i.huxing}}</li>
				<li>价格：{{i.jiage}}</li>
			</ul>
		</div>
		<div class="liulanggengduo">
			<p>浏览更多新楼盘</p>
			<div class="clear">

			</div>
		</div>
	</div>
</template>

<script>
	export default {
		created() {
			this.$http.get('http://localhost:3000/').then(e => this.arr = e.body)
		},
		data() {
			return {
				arr: []
			}
		}
	}
</script>

<style>
	.shuju {
		float: left;
	}
	
	.shuju p {
		font-weight: bold;
		font-size: 14px;
		padding: 15px 0 15px 15px;
	}
	
	.shuju ul {
		padding: 5px 0 10px 15px;
		font-size: 13px;
	}
	.shuju li{
		line-height: 23px;
	}
	.liulanggengduo {
		width: 100%;
		height: 80px;
		background-color: rgb(247, 247, 247);
		float: left;
		margin-top: 20px;
	}
	
	.liulanggengduo p {
		width: 136px;
		height: 38px;
		float: left;
		text-align: center;
		font-family: 微软雅黑;
		font-size: 12px;
		margin-left: 360px;
		line-height: 38px;
		text-align: center;
		border-width: 1px;
		background-color: rgb(58, 121, 232);
		background-color: transparent;
		color: rgb(0, 0, 0);
		border: 1px solid #000000;
		margin-top: 20px;
	}
</style>