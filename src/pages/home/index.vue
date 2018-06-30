<template>
  <div>
   <item :content=content></item>
   <item :content=content1></item>
   <item :content=content2></item>
   <item :content=content3></item>
   <itemin :content=content4></itemin>
   <editlayout class="edit"></editlayout>
  </div>
</template>

<script>
import item from "./item.vue"
import itemin from "./itemin.vue"
import editlayout from "./editlayout.vue"

export default {
    components: {
      item,
      itemin,
      editlayout
    },
  name: 'home',
  data () {
      return {
          content: {
              isshow: true,
              type: 0,
              name: "qq"
          },
          content1: {
              isshow: false,
               type: 2,
               name: "qqd"
          },
          content2: {
              isshow: false,
               type: 1,
               name: "qqa"
          },
          content3: {
              isshow: false,
               type: 1,
               name: "qqq"
          },
           content4: {
               add: true,
               type: 3,
               name: "qqq"
          }




      }
  },
  methods:{
    handlerclick(){

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.border {
    overflow: hidden;
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
.edit{
    margin-top: 150px;
}
</style>
