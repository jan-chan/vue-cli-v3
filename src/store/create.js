import Vue from 'vue'
import Vuex from 'vuex'

import moduleApp from './app.module'

Vue.use(Vuex)

export function createStore() {
  return new Vuex.Store({
    state: {
      login: false,
    },
    getters: {
      login: state => {
        return state.login
      },
    },
    modules: {
      app: moduleApp
    }
  })
}
