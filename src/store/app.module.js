export default {
  namespaced: true,
  state: {
    lang: 'hk',
    login: false
  },
  mutations: {
    setLang: (state, { lang }) => {
      state.lang = lang
    },
    setLogin: (state, { login }) => {
      state.login = login
    }
  },
  actions: {
    setLang: ({ commit, state }, { lang }) => {
      // console.log(state)
      commit('setLang', { lang })
    },
    setLogin: ({ commit }, { login }) => {
      commit('setLogin', { login })
    },
  },
  getters: {
    activeLang: (state, getters, rootState, rootGetters) => {
      // console.log(rootState)
      // console.log(rootGetters)
      return state.lang
    },
    loggedIn: (state) => {
      return state.login
    },
  }
}
