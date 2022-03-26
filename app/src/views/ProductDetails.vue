<template>
  <div class="row mt-5 align-items-center">
    <div class="col-lg-6">
      <h1>{{product.name}}</h1>
      <h4 class="text-danger mb-5">Price: {{ product.price }} SEK</h4>
      <AddToCart :product="product" />
    </div>
    <div class="col-lg-6">
      <img :src="product.image" class="img-fluid">
    </div>
  </div>
  <div>
    <hr><p>{{ product.desc }}</p>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import AddToCart from "../components/AddToCart.vue"
export default {
  props: ['id'],
  methods: {
    ...mapActions(['getProductById'])
  },
  computed: {
    ...mapGetters(['product'])
  },
  created() {
    this.getProductById(this.id)
  },
  components: { AddToCart }
}
</script>

<style>


</style>