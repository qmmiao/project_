<template>
	<div>
		<div class="title">热销推荐</div>
		<div ref="nav" class="nav">
		<ul class="hot-item">
			<router-link tag="li"
			class="item border-bottom" 
			v-for="item of list" 
			:key="item.id"
			:to="'/Detail/'+item.id"
			>
					<img class="item-img" :src="item.imgUrl" alt="">
					<div class="item-info">
					<p class="item-title">{{item.title}}</p>
					<p class="item-decs">{{item.desc}}</p>
					<button class="item-button">查看详情</button>
				</div>
			</router-link>
		</ul>
		</router-link>
		</div>
	</div>
</template>


<script>
import Bscroll from 'better-scroll'
export default {
		name: "HomeRecommend",
		props: {
			list: Array
		},
		mounted () {
   		 this.scroll = new Bscroll(this.$refs.nav)
  },
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.title
	margin-top: .2rem
	background: #eee
	text-indent: .2rem
	line-height: .8rem
	width: 100%
	position: relative
.nav
	overflow: hidden
	position: absolute
	left: 0
	top: 8rem
	right: 0
	bottom: 0
	height: 7.5rem
	.hot-item
		overflow: hidden
		.item
			display: flex
			height: 1.9rem
			.item-img
				width: 1.7rem
				height: 1.7rem
				padding: .1rem
			.item-info
				flex: 1
				padding: .1rem
				min-width: 0
				.item-title
					line-height: .54rem
					font-size: .32rem
					ellipsis()
				.item-decs
					line-height: .4rem
					color: #ccc
					ellipsis()
				.item-button
					line-height: .44rem
					background: #ff9300
					padding: 0 .2rem
					border-radius: .06rem
					margin-top: .2rem
					color: #fff


</style>
