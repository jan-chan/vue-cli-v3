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
      // eslint-disable-next-line
      false ? state : null;
      commit('setLang', { lang })
    },
    setLogin: ({ commit }, { login }) => {
      commit('setLogin', { login })
    },
  },
  getters: {
    activeLang: (state, getters, rootState, rootGetters) => {
      // eslint-disable-next-line
      false ? { rootState, rootGetters } : null;
      return state.lang
    },
    loggedIn: (state) => {
      return state.login
    },
  }
}
