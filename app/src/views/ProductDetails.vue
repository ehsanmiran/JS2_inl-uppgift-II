<template>
  <div class="row mt-5 align-items-center">
    <div class="col-lg-6">
      <h1>{{product.name}}</h1>
      <h4 class="text-danger mb-5">Price: {{ product.price }} SEK</h4>
      
      <!-- add or remove to or from the cart -->
      <div class="row">
        <label for="inlineFormInputName2">Quantity</label>
        <div class="col-3">
          <input type="number" v-model="quantity" class="form-control form-control-lg" />
        </div>
        <button
          type="button" class="btn btn-warning btn-lg col-4 mb-3" v-if="!isInCardProp" @click.stop="addToCard({product, quantity})">ADD TO CART</button>
        <button
          type="button" class="btn btn-primary btn-lg btn-block col-3" v-else @click.stop="removeCart(product.id)">REMOVE FROM CART</button>
      </div>
      <!-- end of add or remove here -->

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

export default {
  props: ['id'],
  data() {
    return {
      isInCardProp: false,
      quantity: 1,
    };
  },
  methods: {
    ...mapActions(['getProductById'])
  },
  computed: {
    ...mapGetters(['product'])
  },
  created() {
    this.getProductById(this.id)
  },
  
}
</script>

<style>


</style>