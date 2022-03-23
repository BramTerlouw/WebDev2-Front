<template>
  <div class="container">
    <h2 class="mt-3 mt-lg-5">Add product:</h2>
  </div>
  
  <!-- container for add form -->
  <div class="container">
    <div class="row">
      <div class="col-md-12 col-lg-4 mb-4 mb-lg-4">
        <form>
          
          <!-- labels and input fields -->
          <div class="form-group">
            <label for="productName">Product name:</label>
            <input
              type="text"
              class="form-control"
              id="productName"
              placeholder="Enter product name..."
              v-model="product.name"
              required
            />
          </div>

          <div class="form-group">
            <label for="productPrice">Price:</label>
            <input
              type="number"
              class="form-control"
              id="productName"
              placeholder="Enter product price..."
              v-model="product.price"
              min="0"
            />
          </div>

          <div class="form-group">
            <label for="productCat">Category:</label>
            <select class="form-control" id="productCat" v-model="product.category_ID">
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
             v-model="product.image"
            />
          </div>

          <div class="form-group">
            <label for="productPrice">How many in stock:</label>
            <input
              type="number"
              class="form-control"
              id="productName"
              placeholder="Enter stock amount..."
              v-model="this.stock.amount"
              min="0"
            />
          </div>

          <!-- Cancel button -->
          <div class="mt-2">
            <button
                type="button"
                class="btn btn-danger m-1"
                @click="this.$router.push('/products')">Cancel
            </button>

            <!-- Submit button -->
            <button
                type="button"
                class="btn btn-success"
                @click="this.add()">Add
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
            product: {
              name: "",
              price: 0,
              category_ID: 1,
              image: "",
            },
            stock: {
              product_ID: 0,
              amount: 0,
            }
        }
    },
    mounted() {
    axios
      .get("http://localhost/categories/")
      .then((res) => {
        this.categories = res.data;
        console.log(this.categories);
      })
      .catch((error) => console.log(error));
  },
  methods: {
    add() {
      axios
        .post('http://localhost/products', this.product)
        .then((res) => {
          console.log(res);
          this.stock.product_ID = res.data['product_ID'];
          
          axios
            .post('http://localhost/stocks', this.stock)
            .then((res) => console.log(res))
            .catch((error) => console.log(error));
            this.$router.push("/products");
        })
        .catch((error) => console.log(error));
    },
  }
}
</script>

<style>

</style>