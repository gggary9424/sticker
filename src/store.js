import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    user: {
      hasLogined: false,
      token: '',
    },
  },
  getters: {
    user: state => state.user,
  },
  mutations: {
    setUserInfo: (state, token) => {
      state.user.hasLogined = true
      state.user.token = token
    },
  },
})

export default store
