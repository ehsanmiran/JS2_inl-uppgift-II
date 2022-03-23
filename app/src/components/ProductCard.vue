<template>
  <div class="col">
    <div class="card h-100">
      <div class="bg-image ripple">
        <img :src="product.image" class="card-img-top"/>
          <router-link :to="{ name: 'productDetails', params: { id: product._id }}">
            <div class="mask" style="background-color: rgba(251, 251, 251, 0)"></div>
          </router-link>
      </div>
      <div class="card-body">
        <h5 class="card-title">{{ product.name }}</h5><hr>
        <p class="card-text">{{ product.short }}</p>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  props: ['product']
}
</script>

<style>

</style>