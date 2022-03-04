import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';

import Homepage from './components/Homepage.vue';
import ProductGrid from './components/products/ProductGrid.vue';

const routes = [
    { path: '/', component: Homepage},
    { path: '/products', component: ProductGrid},
];

const router = createRouter({
    "history": createWebHistory(),
    routes
})

const app = createApp(App);
app.use(router);
app.mount('#app');