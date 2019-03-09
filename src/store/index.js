import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  // 异步方法actions
  // actions: {
  //   changeCity (ctx, city) {
  //     ctx.commit('changeCity', city)
  //   }
  // },
  // 当需要使用state数据算出新数据的时候使用getters, 类似computed计算属性
  getters: {
    doubleCity (state) {
      return state.city + ' ' + state.city
    }
  },
  // module: 将store分割成模块
})