import Vue from 'vue'
import Vuex from 'vuex'

import auth from './auth'
import settings from './settings'

Vue.use(Vuex)

const state = {
  token: null
}

const mutations = {
  SET_TOKEN (state, token) {
    state.token = token
  },
  REMOVE_TOKEN (state) {
    state.token = null
  }
}

export default new Vuex.Store({
  modules: {
    auth,
    settings
  },
  state,
  mutations
})
