import Vue from 'vue'
import Vuex from 'vuex'
import state from "./state"
import mutations from "./mutations"

Vue.use(Vuex)


export default new Vuex.Store ({
    state,
    // actions: {
    //     changeCity (ctx, city) {//上下文，传递过来的数据
    //         ctx.commit('changeCity', city)
    //     }
    // },
    mutations
}) 