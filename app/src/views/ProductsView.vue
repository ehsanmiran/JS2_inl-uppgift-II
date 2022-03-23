<template>
  <h2 class="text-center mb-3">Our Products</h2><hr>
  <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
  </div>
</template>

<script>
import ProductCard from '../components/ProductCard.vue'
export default {
  components: { ProductCard },

}
</script>

<style>

</style>