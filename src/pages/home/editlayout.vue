<template>
<div class="main_counter">
  <div class="title_counter">
      <div class="left">dccc</div>
      <div class="right" @click="add"> + </div>
  </div>
  <div class="layout_counter" v-for="i in resarr">
   <item :content=content class="left"></item>
   <item :content=content1 class="right"></item>
  </div>
</div>

</template>

<script>
import item from "./item.vue"
export default {
    components: {
      item
    },
  name: 'editLayout',
  data () {
      return {
          content: {
              isshow: true,
              type: 0,
              name: "qq"
          },
          content1: {
              isshow: false,
              type: 1,
              name: "qq"
          },
          resarr:[0],
          index: 0,
          
      }
  },
  methods:{
    add(){
        this.index++;
       this.resarr.push(this.index);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main_counter{
    width: 100%;
    height: 50px;
    border-bottom: 1px solid #eee;
}
.left{
    float: left;
    width: 40%;
    height: 100%;
    line-height: 50px;
    text-align: center;
}
.right{
    float:right;
     width: 40%;
    height: 100%;
    line-height: 50px;
    text-align: center;
}
</style>
