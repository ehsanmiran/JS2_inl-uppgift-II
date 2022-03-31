import axios from "@/axios"

export default {
  state: {
    userToken: null,
    loggedIn: false
  },
  getters: {
    loggedIn: state => state.loggedIn
  },
  mutations: {
    SET_USER: (state, token) => {
      if(token) {
        state.userToken = token
        state.loggedIn = true
      } else {
        state.loggedIn = false,
        state.userToken = null
      }
    }
  },
  actions: {
    login: async ({commit}, user) => {
      const res = await axios.post('users/login', user)
      if(res.status === 200) {
        localStorage.setItem('item', res.data.token)
        commit('SET_USER', res.data.token)
      }
    },
    logout: ({commit}) => {
      try {
        localStorage.removeItem('token')
        commit('SET_USER', null)
      } catch {
        console.log('not logged in')
      }
    },
    checkUser: ({commit}) => {
      let token = localStorage.getItem('token')
      if(token) {
        commit('SET_USER', token)
      }
    }
  }
}
