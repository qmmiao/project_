<template>
<div class="list" ref="wrapper">
	<div>
		<div class="area">
				<div class="title border-topbottom">当前城市</div>
				<div class="button-list">
					<div class="button-wrapper" >
						<div class="button">{{this.currentCity}}</div>
					</div>
				</div>
		</div>
		<div class="area">
				<div class="title border-topbottom">热门城市</div>
				<div class="button-list">
					<div class="button-wrapper" 
						v-for="item of hotCities" 
						:key="item.id" 
						@click="handleCityClick(item.name)"
						>
						<div class="button">{{item.name}}</div>
					</div>
				</div>
		</div>
		<div class="area" 
			v-for="(item, key) of cities" 
			:key="key"
			:ref="key"
			>
				<div class="title border-topbottom" >{{key}}</div>
				<div class="item-list">
					<div 
						class="item border-bottom" 
						v-for="inneritem of item" 
						:key="inneritem.id"
							@click="handleCityClick(inneritem.name)"
						>{{inneritem.name}}
					</div>


				</div>

		</div>
	</div>
</div>
</template>


<script>
import Bscroll from 'better-scroll'
import {mapState, mapMutations} from 'vuex'
export default {
	name: "CityList",
	props: {
		hotCities: Array,
		cities: Object,
		letter: String
	},
	methods: {
		handleCityClick (city) {
			//this.$store.dispatch('changeCity',city)同步传递数据，就不需要actions

			//this.$store.commit('changeCity',city) 方案一，不要下边的mapMutations
			this.changeCity(city)
			this.$router.push("/")
		},
		...mapMutations(['changeCity'])
	},
	mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  },
  computed: {
	  ...mapState({
		  currentCity: 'city'
	  })
  },
  watch: {//list的首字母和右侧点击的对应
	  letter () {
		  if (this.letter) {
				const element = this.$refs[this.letter][0]
			  this.scroll.scrollToElement(element)
		  }
	  }
  }
	
}

// 1rem = html font-size = 50px  86px/100

</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
	.title
		line-height: .54rem
		background: #eee
		padding-left: .2rem
		color: #666
	.border-topbottom
		&:after
			border-color: #ccc
		&:before
			border-color: #ccc
	.border-bottom
		&:before
			border-color: #ccc
	.list
		overflow: hidden
		position: absolute
		left: 0
		top: 1.58rem
		bottom: 0
		right: 0 
		.button-list
			overflow: hidden
			padding: .1rem .6rem .1rem .1rem
			.button-wrapper
				float: left
				width: 33.33%
				.button
					text-align: center
					margin: .1rem
					padding: .1rem 0
					border-radius: .06rem
					border: .02rem solid #ccc
		.item-list
			.item
				line-height: .76rem
				color: #666
				padding-left: .2rem


</style>
