<template>
  <div class="row">
    <label for="inlineFormInputName2">Quantity</label>
    <div class="col-3">
      <input type="number" v-model="quantity" class="form-control form-control-lg" />
    </div>
    <button
      type="button" class="btn btn-warning btn-lg col-4 mb-3"
      v-if="!isInCardProp" @click.stop="addCart({product, quantity})">ADD TO CART</button>
    <button
      type="button" class="btn btn-primary btn-lg btn-block col-3"
      v-else
      @click.stop="removeCart(product.id)">REMOVE FROM CART</button>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>