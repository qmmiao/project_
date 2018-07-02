<template>
<div>
    <div class="banner" @click="handleBannerClick">
        <img class="banner-img" src="http://img1.qunarzz.com/sight/p0/1803/12/126471e0966aca5ba3.img.jpg_600x330_8b04e389.jpg" alt="">
				<div class="banner-info">
					<p class="banner-title">大连圣亚海洋世界（AAAA景区）</p>
					<p class="banner-number">
						<span class="iconfont banner-icon">&#xe604;</span> 
						33
					</p>
				</div>
		</div>
		<common-gallary :imgs="imgs" v-show="showGallary" @close="handleGallaryClose"></common-gallary>
</div>
</template>

<script>
import CommonGallary from "common/gallary/Gallary"
export default {
	name: "DetailBanner",
	data () {
		return {
			showGallary: false,
			imgs: ['http://img1.qunarzz.com/sight/p0/1803/12/126471e0966aca5ba3.img.jpg_r_800x800_fd14650b.jpg',
						'http://img1.qunarzz.com/sight/p0/1806/5b/5b32a9e1ac462fb5a3.img.jpg_r_800x800_ba8d7dcd.jpg']
		}
	},
	methods: {
		handleBannerClick () {
			this.showGallary = true
		},
		handleGallaryClose () {
			this.showGallary = false
		}
	},
	components: {
		CommonGallary
	}
}
</script>

<style lang="stylus" scoped>
.banner
	position: relative
	overflow: hidden
	height: 0
	padding-bottom: 55%
	.banner-img
		width: 100%
	.banner-info
		display: flex
		position: absolute
		left: 0
		right: 0
		bottom: 0
		line-height: .6rem
		color: #fff
		background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))

		.banner-title
			flex: 1
			font-size: .32rem 
			padding: 0 .2rem
		.banner-number
			margin-top: .14rem
			padding: 0 .4rem
			height: .32rem
			line-height: .32rem
			border-radius: .2rem
			background: rgba(0,0,0,.8)
			font-size: .24rem
			.banner-icon
				font-size: .24rem
</style>
