<template>
  <shoppingCartProduct v-for="item in shoppingCart" :key="item.product._id" :item="item" />
  <div v-if="shoppingCart.length <1">
    <div class="p-2 d-flex justify-content-center align-items-center">
      <strong> Shopping Cart is empty</strong>
    </div>
      <div class="dropdown-divider"></div>
  </div>

  <div class="p-4 d-flex justify-content-between align-items-center">
    <!-- <div> -->
      <div><strong>TOTAL TO PAY:</strong></div>
      <div><strong>{{ shoppingCartTotal }} SEK</strong></div>
    <!-- </div> -->
  </div>
  <div class="p-2 d-grid gap-2">
    <button class="btn btn-success btn-rounded ">Check OUt</button>
  </div>

</template>

<script>
import shoppingCartProduct from './ShoppoingCartProduct.vue'
import { mapGetters } from 'vuex'
export default {
  components: {
    shoppingCartProduct
  },
  computed: {
    ...mapGetters(['shoppingCart', 'shoppingCartTotal'])
  }
}
</script>

<style>

</style>