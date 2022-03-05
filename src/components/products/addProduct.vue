<template>
  <div class="container">
    <h2 class="mt-3 mt-lg-5">Add product:</h2>
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
              placeholder="Enter product name..."
            />
          </div>

          <div class="form-group">
            <label for="productPrice">Price:</label>
            <input
              type="number"
              class="form-control"
              id="productName"
              placeholder="Enter product price..."
            />
          </div>

          <div class="form-group">
            <label for="productCat">Category:</label>
            <select class="form-control" id="productCat">
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
             placeholder="Enter image url..."
            />
          </div>

          <div class="form-group">
            <label for="productPrice">How many in stock:</label>
            <input
              type="number"
              class="form-control"
              id="productName"
              placeholder="Enter stock amount..."
            />
          </div>

          <div class="mt-2">
            <button
                type="button"
                class="btn btn-danger m-1"
                @click="this.$router.push('/products')">Cancel
            </button>
            <button
                type="button"
                class="btn btn-success">Add
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    name: "AddProduct",
    data() {
        return {
            categories: [],
        }
    },
    mounted() {
    axios
      .get("http://localhost/categories/")
      .then((res) => {
        this.categories = res.data;
      })
      .catch((error) => console.log(error));
  },

}
</script>

<style>

</style>