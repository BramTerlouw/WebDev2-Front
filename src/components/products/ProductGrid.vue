<template>
  <div class="container">
      <h2 class="mt-3 mt-lg-5">Product catalogue:</h2>
      <p>Here you can find any item you are looking for. Some items might not be in stock but they will be restocked as soon as possible.</p>

      <select class="mb-2" id="dropdown" onchange="filterProducts()">
        <option value="default"></option>
        <option value="Motherboard">Motherboard</option>
        <option value="CPU">CPU</option>
        <option value="SSD">SSD</option>
      </select>

      <div id="row" class="row">
        <product-grid-item 
          v-for="product in products" 
          :key="product.product_ID" 
          :product="product">
        </product-grid-item>
      </div>
  </div>

</template>

<script>
import ProductGridItem from './ProductGridItem.vue';
import axios from 'axios';

export default {
  name: "ProductGrid",
  components: { ProductGridItem },
  data() {
    return {
      products: [],
    };
  },
  mounted() {
      axios.get('http://localhost/products')
      .then((res) => {
        this.products = res.data;
      })
      .catch(error => console.log(error));
  },
}
</script>

<style>

</style>