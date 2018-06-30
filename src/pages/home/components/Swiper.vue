<template>
<div class="wiper">
  <swiper :options="swiperOption" v-if="showSwiper">

    <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" alt="">
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>

		
  </swiper>
	
</div>
</template>


<script>
export default {
		name: 'HomeSwiper',
		props: {
			list: Array
		},
    data () {
        return {
            swiperOption: {
							pagination: ".swiper-pagination",
							autoplay: 3000,
							loop: true 
						}
        }
		},
		computed: {
			showSwiper () {
				return this.list.length
			}
		}

}
</script>

<style lang="stylus" scoped>
	.wiper >>> .swiper-pagination-bullet-active
		background: #fff
	.wiper
		width: 100%
		height: 0
		overflow: hidden
		padding-bottom: 30.67%
		background: #eee
		.swiper-img 
			width: 100%
</style>
