export default {
  namespaced: true,
  state: {
    lang: 'hk'
  },
  mutations: {
    SET_LANG: (state, { lang }) => {
      state.lang = lang
    }
  },
  actions: {
    setLang: ({ commit, state }, { lang }) => {
      // console.log(state)
      commit('SET_LANG', { lang })
    },
  },
  getters: {
    activeLang (state, getters, rootState, rootGetters) {
      // console.log(rootState)
      // console.log(rootGetters)
      return state.lang
    },
  }
}
