export default {
  namespaced: true,
  state: {
    lang: 'hk',
    login: false,
    accessToken: '',
    refreshToken: '',
  },
  mutations: {
    setLang: (state, lang) => {
      state.lang = lang;
    },
    setLogin: (state, login) => {
      state.login = login;
    },
    setAccessToken: (state, token) => {
      localStorage.setItem('accessToken', token);
      state.accessToken = token;
    },
    setRefreshToken: (state, token) => {
      localStorage.setItem('refreshToken', token);
      state.refreshToken = token;
    },
  },
  actions: {
    setLang: ({ commit, state }, lang) => {
      // eslint-disable-next-line
      false ? state : null;
      commit('setLang', lang);
    },
    setLogin: ({ commit }, login) => {
      commit('setLogin', login);
    },
    setTokens: ({ commit }, { accessToken, refreshToken }) => {
      commit('setAccessToken', accessToken);
      commit('setRefreshToken', refreshToken);
    },
    setAccessToken: ({ commit }, token) => {
      commit('setAccessToken', token);
    },
    setRefreshToken: ({ commit }, token) => {
      commit('setRefreshToken', token);
    },
    logout: ({ commit }) => {
      commit('setLogin', false);
      commit('setAccessToken', '');
      commit('setRefreshToken', '');
    },
  },
  getters: {
    activeLang: (state, getters, rootState, rootGetters) => {
      // eslint-disable-next-line
      false ? { rootState, rootGetters } : null;
      return state.lang;
    },
    loggedIn: (state) => {
      return state.login;
    },
    accessToken: (state) => {
      return state.accessToken;
    },
    refreshToken: (state) => {
      return state.refreshToken;
    },
  },
};
