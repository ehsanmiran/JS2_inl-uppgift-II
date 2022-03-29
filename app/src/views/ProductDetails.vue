<template>
  <div v-if="product">
    <div class="row mt-5 align-items-center">
      <div class="col-lg-6">
        <h1>{{product.name}}</h1>
        <h4 class="text-danger mb-5">Price: {{ product.price }} SEK</h4>
        <div class="d-grid gap-2 col-6">
          <button @click="addToCart({ product, quantity })" class="btn btn-warning btn-rounded">Add to cart</button>
        </div>
      </div>
      <div class="col-lg-6">
        <img :src="product.image" class="img-fluid">
      </div>
    </div>
    <div>
      <hr><p>{{ product.desc }}</p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  props: ['id'],
  data() {
    return {
      quantity: 1
    }
  },
  methods: {
    ...mapActions(['getProductById', 'addToCart'])
  },
  computed: {
    ...mapGetters(['product'])
  },
  created() {
    this.getProductById(this.id)
  }
}
</script>

<style>


</style>