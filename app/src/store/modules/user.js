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
      state.userToken = token
      state.loggedIn = true
    }
  },
  actions: {
    login: async ({commit}, user) => {
      const res = await axios.post('users/login', user)
      console.log(res)
      if(res.status === 200) {
        commit('SET_USER', res.data.token)
      }
    }
  }
}
