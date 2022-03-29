<template>
  <div class="p-2 d-flex justify-content-between align-items-center">
    <div class="d-flex align-items-center">
      <div class="img-container">
        <img :src="item.product.image" class="img-fluid">
      </div>
      <div>
        <div>
          <strong>{{ item.product.name }}</strong>
        </div>
        <div>
          {{ item.quantity }} x {{ item.product.price }}
        </div>
      </div>
    </div>
    <div>
      <button class="btn btn-outline-danger btn-rounded" data-mdb-ripple-color="dark">remove</button>
    </div>
  </div>
  <div class="dropdown-divider"></div>
</template>

<script>
export default {
  props: ['item']

}
</script>

<style scoped>
  .img-container {
    width: 100px;
  }

</style>