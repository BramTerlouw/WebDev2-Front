<template>
  <div class="container">
    <h2 class="mt-3 mt-lg-5">Edit product:</h2>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-md-12 col-lg-4 mb-4 mb-lg-4">
        <form>
          <div class="form-group">
            <label for="productName">Product name:</label>
            <input
              type="text"
              class="form-control"
              id="productName"
              v-model="product.name"
            />
          </div>

          <div class="form-group">
            <label for="productPrice">Price:</label>
            <input
              type="number"
              class="form-control"
              id="productName"
              v-model="product.price"
            />
          </div>

          <div class="form-group">
            <label for="productCat">Category:</label>
            <select
              class="form-control"
              id="productCat"
              v-model="product.category_ID"
            >
              <option
                v-for="category in categories"
                :key="category.id"
                v-bind:value="category.category_ID"
              >
                {{ category.name }}
              </option>
            </select>
          </div>

          <div class="form-group">
            <label for="productName">Image:</label>
            <input
              type="text"
              class="form-control"
              id="productName"
              v-model="product.image"
            />
          </div>

          <div class="mt-2">
            <button
            type="button"
            class="btn btn-danger m-1"
            @click="this.$router.push('/products')">Cancel</button>
            <button
              type="button"
              class="btn btn-success"
              @click="this.update()">Update</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "EditProduct",
  data() {
    return {
      id: this.$route.params.id,
      product: {
        product_ID: 0,
        name: "",
        price: 0.0,
        image: "",
        category_ID: 0,
        category_Name: "",
        amount: 0,
      },
      categories: [],
    };
  },
  mounted() {
    axios
      .get("http://localhost/products/" + this.id)
      .then((res) => {
        this.product = res.data;
      })
      .catch((error) => console.log(error));

    axios
      .get("http://localhost/categories/")
      .then((res) => {
        this.categories = res.data;
      })
      .catch((error) => console.log(error));
  },
  methods: {
    update() {
      axios
        .put("http://localhost/products/" + this.product.product_ID, this.product)
        .then((res) => {
            console.log(res);
          this.$router.push("/products");
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>

<style>
</style>