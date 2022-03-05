<template>
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
              v-bind:to="'/editProduct/' + product.product_ID"
              class="btn btn-warning m-1"
              role="button"
              >Edit</router-link
            >
            <button type="button" @click="this.delete()" class="btn btn-danger">Delete</button>
          </div>
          <button type="button" class="btn btn-secondary">Add to cart</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios';
export default {
  name: "ProductGridItem",
  props: {
    product: Object,
  },
  methods: {
    delete() {
      if (confirm("Do you really want to delete this " + this.product.category_Name + "?")) {
        // axios.delete('http://localhost/products/' + product.product_ID)
        //   .then((res) => {
        //     console.log(res);
        //   })
        //   .catch((error) => {
        //     console.log(error);
        //   });
      }
    },
  },
};
</script>

<style>
</style>