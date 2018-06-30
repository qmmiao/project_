<template>
  <div class="border" @click="handleclick">
    <p class="name">{{content.name}}</p>
    <div class="box">
          <input class="content" type="text" placeholder="dddd"/>
         <span class="jt" v-if="content.isshow" >></span>
    </div>
  </div>
</template>

<script>
export default {
  props:{
      content: Object
  },
  name: 'item',
  data () {
   return {
       
   }
  },
  methods:{
    handleclick(){
        switch(this.content.type) {
            case 0: alert();
            break;
            case 1: console.log('1');
            break;
            case 2: this.content.isshow = !this.content.isshow;
            break;
        }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.border {
    height: 20px;
    border-bottom: 1px solid red;
}
.name {
    float: left;
    height: 20px;
    margin: 0;
}
.box {
    height: 20px;
    float: right;
    width: 150px;
}
.content {
    height: 20px;
    float: left;
   
   
}
.jt {
    float: right;
}
</style>
