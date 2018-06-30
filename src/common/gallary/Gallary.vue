<template>
    <div class="container">
        <div class="wrapper">
						<swiper :options="swiperOption">
							<swiper-slide >
									<img class="gallary-img" src="http://img1.qunarzz.com/sight/p0/1803/12/126471e0966aca5ba3.img.jpg_r_800x800_fd14650b.jpg" alt="">
							</swiper-slide>
								<swiper-slide >
									<img class="gallary-img" src="http://img1.qunarzz.com/sight/p0/1806/5b/5b32a9e1ac462fb5a3.img.jpg_r_800x800_ba8d7dcd.jpg" alt="">
							</swiper-slide>
							<div class="swiper-pagination"  slot="pagination"></div>
					</swiper>
        </div>
    </div>


		
</template>


<script>
export default {
		name: "CommonGallary",
		data () {
			return {
				swiperOption: {
					pagination: ".swiper-pagination",
					paginationType: "fraction"
				}
			}
		}
}
</script>


<style lang="stylus" scoped>
.container >>> .swiper-container
	overflow: inherit 
.container
	display: flex
	flex-direction: column
	justify-content: center
	z-index: 99
	position: fixed
	top: 0
	left: 0
	right: 0
	bottom: 0
	background: #000
	.wrapper
		height: 0
		width: 100%
		// overflow: hidden
		padding-bottom: 66%
		.gallary-img
			width: 100%
		.swiper-pagination
			color: #fff
			bottom: -1rem
			




</style>
