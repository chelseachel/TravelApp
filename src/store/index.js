import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)



export default new Vuex.Store({
  state: state,
  // actions: {
  //   changeCity (ctx, city) {
  //     ctx.commit('changeCity', city)
  //   }
  // },
  mutations: mutations
})

// 组件通过dispatch方法调用actions，
// actions通过commit方法调用mutations，
// mutations去改变数据
