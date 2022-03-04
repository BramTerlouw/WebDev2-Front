<template>
  <nav class="navbar navbar-expand navbar-dark bg-dark">
  <div class="container">

    <!-- Navbar items left -->
    <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/products" class="nav-link">Products</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/" class="nav-link">Cart</router-link>
        </li>
      </ul>
    </div>

    <!-- Navbar items right -->
    <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
      <ul class="navbar-nav ms-auto">

        <!-- only clickable when logged in -->
        <li class="nav-item">
          <router-link to="/" class="nav-link disabled">Admin</router-link>
        </li>

        <!-- when logged in, show logout butten and reverse -->
        <li class="nav-item">
          <router-link to="/" class="nav-link">Login</router-link>
        </li>
      </ul>
    </div>

  </div>
</nav>
</template>

<script>
export default {

}
</script>

<style>

</style>