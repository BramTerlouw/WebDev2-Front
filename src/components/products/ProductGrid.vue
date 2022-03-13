<template>
  <div class="container">
      <h2 class="mt-3 mt-lg-5">Product catalogue:</h2>
      <p>Here you can find any item you are looking for. Some items might not be in stock but they will be restocked as soon as possible.</p>
  
      <div class="m-1">
        <router-link to="/addProduct">+ Add new product</router-link>
      </div>

      <div id="row" class="row">
        <product-grid-item 
          v-for="product in products" 
          :key="product.product_ID" 
          :product="product"
          @deleteProduct="deleteProduct">
        </product-grid-item>
      </div>
      <div class="container d-flex justify-content-center">
        <button class="btn btn-outline-primary m-1" @click="back(this.limit)">Back</button>
        <button class="btn btn-outline-primary m-1" @click="next(this.limit)">Next</button>
      </div>
  </div>
</template>

<script>
import ProductGridItem from './ProductGridItem.vue';
import axios from '../../axios-auth';

export default {
  name: "ProductGrid",
  components: { ProductGridItem },
  data() {
    return {
      products: [],
      offset: 0,
      limit: 3,
    };
  },
  methods: {
    deleteProduct(product) {
      if (confirm("Do you really want to delete this " + product.category_Name + "?")) {
        axios.delete('http://localhost/products/' + product.product_ID)
          .then((res) => {
            console.log(res);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    fetch() {
      axios.get('http://localhost/products?offset=' + this.offset + '&limit=' + this.limit)
      .then((res) => {
        var data = res.data;
        if (data.length == 0) {
          this.back(this.limit);
          this.fetch();
          return;
        }
        this.products = data;
      })
      .catch(error => console.log(error));
    },
    next(increase) {
        this.offset += increase;
        this.fetch();
      },
    back(decrease) {
      if (this.offset - decrease >= 0) {
        this.offset -= decrease;
        this.fetch();
      }
    },
  },
  mounted() {
      this.fetch();
  },
}
</script>

<style>

</style>