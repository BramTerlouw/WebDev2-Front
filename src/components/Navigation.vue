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
      </ul>
    </div>

    <!-- Navbar items right -->
    <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
      <ul class="navbar-nav ms-auto">
        <!-- when logged in, show logout butten and when not logged, show login -->
        <li class="nav-item">
          <a v-if="$store.state.logged_in" class="nav-link" @click="this.logout()">Logout</a>
          <router-link v-else to="/login" class="nav-link">Login</router-link>
          <!-- <router-link v-else to="/login" class="nav-link">login</router-link> -->
        </li>
      </ul>
    </div>

  </div>
</nav>
</template>

<script>
export default {
  name: 'Navigation',
  methods: {
    logout() {
      this.$store.dispatch('logout')
      .then(() => {
        this.$router.push('/')
      })
      .catch((error) => console.log(error))
    },
  }
}
</script>

<style>

</style>