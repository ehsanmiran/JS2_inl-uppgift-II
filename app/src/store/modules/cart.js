export default {
  state: {
    cart: []
  },
  getters: {
    shoppingCart: state => state.cart
  },
  mutations: {
    ADD_TO_CART: (state, { product, quantity }) => {
      state.cart.push({ product, quantity })
    }
  },
  actions: {
    addToCart: ({commit}, { product, quantity }) => {
      commit('ADD_TO_CART', { product, quantity })
    }
  }
}