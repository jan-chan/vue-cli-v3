export default {
  namespaced: true,
  state: {
    username: '',
    name: 'guest'
  },
  mutations: {
    setName: (state, { name }) => {
      state.name = name
    },
    setUsername: (state, { username }) => {
      state.username = username
    }
  },
  actions: {
    setInfo: ({ commit }, { username, name }) => {
      commit('setName', { name })
      commit('setUsername', { username })
    },
    clearInfo: ({ commit }) => {
      commit('setName', { name: 'guest' })
      commit('setUsername', { username: '' })
    },
    setName: ({ commit }, { name }) => {
      commit('setName', { name })
    },
    setUsername: ({ commit }, { username }) => {
      commit('setUsername', { username })
    }
  },
  getters: {
    info: (state) => {
      return state
    },
    name: (state) => {
      return state.name
    },
    username: (state) => {
      return state.username
    },
  }
}
