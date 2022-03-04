<template>
  <div class="col-md-12 col-lg-4 mb-4 mb-lg-4">
        <div class="card">
          <img
            :src="product.image"
            class="card-img-top p-5"
            alt="Laptop"
          />
          <div class="card-body">
            <p class="small"><a href="#!" class="text-muted">{{product.category_Name}}</a></p>

            <div class="d-flex justify-content-between mb-3">
              <h5 class="mb-0">{{product.name}}</h5>
              <h5 class="text-dark mb-0">€ {{product.price}}</h5>
            </div>

            <div class="d-flex justify-content-between mb-2">
              <p class="text-muted mb-0">Available: <span class="fw-bold">6</span></p>
            </div>
            
            <div class="d-flex flex-row-reverse mb-2">
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

}
</script>

<style>

</style>