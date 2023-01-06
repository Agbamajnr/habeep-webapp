import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

export default createStore({
  state: {
      isAuthenticated: false,
      user: [],
      sessionId: '',
  },
  mutations: {
    setAuthState(state, data) {
        state.isAuthenticated = data.authState;
        state.sessionId = data.token;
        state.user = data.userDetails
    },
    setUserProfile(state, data) {
        state.user = data
    },
    unsetUserAuth(state) {
        state.isAuthenticated = false;
        state.sessionId = '';
        state.user = []
    }
  },
  actions: {
    setAuth({commit}, data) {
        commit('setAuthState', data)
    },
    setProfile({commit}, data) {
        commit('setUserProfile', data)
    },
    unsetAuth({commit}) {
        commit('unsetUserAuth')
    }
  },
  modules: {
  },

  plugins: [createPersistedState()]
})