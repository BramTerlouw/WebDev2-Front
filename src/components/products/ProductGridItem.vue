<template>

  <!-- Column with card for product -->
  <div class="col-md-12 col-lg-4 mb-4 mb-lg-4">
    <div class="card">
      <img :src="product.image" class="card-img-top p-5" alt="product" />
      <div class="card-body">
        <p class="small">
          <a href="#!" class="text-muted">{{ product.category_Name }}</a>
        </p>

        <div class="d-flex justify-content-between mb-3">
          <h5 class="mb-0">{{ product.name }}</h5>
          <h5 class="text-dark mb-0">€ {{ product.price }}</h5>
        </div>

        <div class="d-flex justify-content-between mb-2">
          <p class="text-muted mb-0">
            Available: <span class="fw-bold">{{ product.amount }}</span>
          </p>
        </div>

        <div class="d-flex justify-content-between mb-2">
          <div>
            <router-link
              v-if="$store.state.role == 'Admin'"
              v-bind:to="'/editProduct/' + product.product_ID"
              class="btn btn-warning m-1"
              role="button"
              >Edit</router-link
            >
            <button v-if="$store.state.role == 'Admin'" type="button" @click="$emit('deleteProduct', product)" class="btn btn-danger">Delete</button>
          </div>
          <button type="button" class="btn btn-secondary">Add to cart</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductGridItem",
  props: {
    product: Object,
  },
};
</script>

<style>
</style>