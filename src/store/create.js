import Vue from 'vue'
import Vuex from 'vuex'

import moduleApp from './app.module'
import moduleMember from './member.module'

Vue.use(Vuex)

export function createStore() {
  return new Vuex.Store({
    state: {
      rootTest: false,
    },
    getters: {
      rootTest: state => {
        return state.rootTest
      },
    },
    modules: {
      app: moduleApp,
      member: moduleMember,
    }
  })
}
