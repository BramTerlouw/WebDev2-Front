import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';

import Homepage from './components/Homepage.vue';
import ProductGrid from './components/products/ProductGrid.vue';
import EditProduct from './components/products/editProduct.vue';
import AddProduct from './components/products/addProduct.vue';
import Login from './components/Login.vue';

const routes = [
    { path: '/', component: Homepage},
    { path: '/products', component: ProductGrid},
    { path: '/editProduct/:id', component: EditProduct},
    { path: '/addProduct', component: AddProduct},
    { path: '/login', component: Login},
];

const router = createRouter({
    "history": createWebHistory(),
    routes
})

const app = createApp(App);
app.use(router);
app.mount('#app');