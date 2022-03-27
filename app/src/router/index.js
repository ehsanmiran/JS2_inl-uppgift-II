import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductsView from '../views/ProductsView.vue'
import ProductDetails from '../views/ProductDetails.vue'
import ShoppingCartView from '../views/ShoppingCartView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/products',
    name: 'products',
    component: ProductsView
  },
  {
    path: '/product/details/:id',
    name: 'productDetails',
    component: ProductDetails,
    props: true
  },
  {
    path: '/ShoppingCart',
    name: 'ShoppingCart',
    component: ShoppingCartView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
