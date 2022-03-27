import axios from '@/axios'

export default {
  state: {
    products: [],
    product: null,
    cart: []
  },
  getters: {
    products: state => state.products,
    product: state => state.product,
    cart: state => state.cart
  },
  mutations: {
    SET_PRODUCTS: (state, products) => {
      state.products = products
    },
    SET_PRODUCT: (state, product) => {
      state.product = product
    },
    SET_CART: (state, cart) => {
      state.cart = cart
    }
  },
  actions: {
    getProducts: async ({commit}) => {
      const res = await axios.get('products')
      commit('SET_PRODUCTS', res.data)
    },
    getProductById: async ({commit}, id) => {
      const res = await axios.get('products/'+ id)
      commit('SET_PRODUCT', res.data)
    }
  }
}