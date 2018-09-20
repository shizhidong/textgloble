import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state:{
        count:false
    },
    mutations:{
        increase(state){
            state.count=true
        },
        hideLiser(state){
            state.count=false;
        }
    },
    actions:{
        actionIncrease({commit}){
            commit('increase')
        },
        actionIncreaseHIde({commit}){
            commit("hideLiser")
        }
    }
})
export default store;