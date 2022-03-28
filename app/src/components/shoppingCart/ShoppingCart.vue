<template>
  <ShoppoingCartProduct v-for="item in shoppingCart" :key="item.product._id" .item="item" />
  <div v-if="shoppingCart.length < 1">
    <div>
      Your Shopping Cart is Empty.
    </div>
  </div>

  <h2 class="text-center mb-3 mt-3">Your Shopping Cart </h2><hr>
  <div class="container" style="padding: 30px">
    <div class="row d-flex justify-content-center">
      <div class="list-group col-8">
        <a v-for="product in cart" :key="product.id" href="#" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
          <img :src="product.image" height="60" width="60" />
          <p class="h4">{{ product.name }}</p>
          <div class="row">
            <div class="mr-2">
              <p>Unique Price</p>
              <p>${{ product.price }}</p>
            </div>
            <div class="mr-2">
              <p>Total Price</p>
              <p>${{ product.price * product.quantity }}</p>
            </div>
            <div>
              <p>Quantity</p>
              <p>{{ product.quantity }}</p>
            </div>
          </div>
        </a>
        <div class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
          <p class="h4">Total</p>
          <div>
            <p>Total Price</p>
            <p>{{ totalPrice }} SEK</p>
          </div>
        </div>
        <button @click="checkout()" type="button" class="btn btn-warning btn-lg btn-rounded btn-block mt-4">Checkout</button>
      </div>
    </div>
  </div>

</template>

<script>
// import { mapGetters } from 'vuex'
// export default {
//   computed: {
//     ...mapGetters(['shoppingCart'])
//   }

// }
import ShoppoingCartProduct from './ShoppingCartProduct.vue'
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    ShoppoingCartProduct
  },
  name: "ShoppingCart",
  data() {
    return {
      totalPrice: 0,
    };
  },
  computed: {
    ...mapGetters(['shoppingCart']),
    ...mapGetters("product", ["cart"]),
    // ...mapGetters("account", ["user"]),
  },
  methods: {
    ...mapActions("product", ["removeCart"]),
    calcPrice() {
      this.cart.forEach((element) => {
        this.totalPrice += element.price * element.quantity;
      });
    },
    checkout() {
      const vm = this;
      setTimeout(() => {
        vm.removeCart();
        alert("Purchase successful!");
        vm.$router.push("/");
      }, 500);
    },
  },
  mounted() {
    this.calcPrice();
  },
};
</script>

<style>

</style>