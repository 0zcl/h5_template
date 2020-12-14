import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const PUSH = 'PUSH'
const POPLIST = 'POPLIST'
const EMPTYLIST = 'EMPTYLIST'
const store = new Vuex.Store({
  state: {
    footerList: []
  },
  mutations: {
    [PUSH](state, obj) {
      console.log('mutaion', state, obj)
      state.footerList.push(obj.choiceItem)
    },
    [POPLIST](state, obj) {
      state.footerList = state.footerList.filter(item => !(item.timeId === obj.timeId && item.week === obj.weekIndex))
    },
    [EMPTYLIST](state) {
      state.footerList = []
    }
  },
  actions: {
    pushList({ commit }, obj) {
      console.log('obj', obj)
      commit('PUSH', obj)
    },
    popList({ commit }, obj) {
      console.log('obj', obj)
      commit('POPLIST', obj)
    },
    emptyList({ commit }) {
      console.log('empty')
      commit('EMPTYLIST')
    }
  }
})

export default store
