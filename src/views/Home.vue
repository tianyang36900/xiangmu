<template>
	<div class="home">
		<!--首页-->
		<!--<img src="../assets/logo.png">-->
		<!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
		<div class="banner">
			<img src="./../assets/banner.jpg" />
			<div class="clear">

			</div>
		</div>
		<div class="contents">
			<div class="content_left">
				<div class="contents_img">
					<img src="../assets/1.jpg" />
					<img src="../assets/3.jpg" class="contents_img_left1" />
					<img src="../assets/2.jpg" class="contents_img_left2" />
					<img src="../assets/4.jpg" class="contents_img_left3" />
				</div>
				<zujian></zujian>
				<zujian></zujian>
				<zujian></zujian>
			</div>
			<div class="content_right">

			</div>
		</div>
	</div>
</template>

<script>
	import zujian from '../components/zujian.vue'
	export default {
		components: {
			zujian
		},
		created() {},
		data() {
			return {
				arr: []
			}
		}
	}
</script>
<style>
	.banner {
		width: 96%;
		height: 602px;
		float: left;
		margin-left: 2%;
	}
	
	.banner img {
		width: 100%;
		height: 100%;
	}
	
	.shuju {
		float: left;
	}
	
	.contents {
		width: 1200px;
		height: 1916px;
		float: left;
		margin-left: 80px;
		margin-top: 80px;
	}
	
	.content_left {
		width: 845px;
		height: 1916px;
		float: left;
		/*background: cadetblue;*/
	}
	
	.content_right {
		width: 280px;
		height: 1318px;
		float: left;
		background: cornflowerblue;
		margin-left: 50px;
	}
	
	.contents_img img {
		width: 405;
		height: 137px;
	}
	
	.contents_img_left1 {
		margin-left: 10px;
	}
	
	.contents_img_left2 {
		margin-top: 10px;
	}
	
	.contents_img_left3 {
		margin-left: 10px;
		margin-top: 10px;
	}
</style>