<template>
  <div class="container mt-5 p-5 col-10 col-md-6 col-lg-4 col-xl-3">
  <form>
  
  <!--header  -->
  <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
  
    <!-- labels and input fields -->
    <label for="inputuserName" class="sr-only">Username</label>
    <input 
        type="text" 
        v-model="this.username" 
        id="inputuserName" 
        class="form-control" 
        placeholder="Username" 
        required>
    
    <label for="inputPassword" class="sr-only">Password</label>
    <input 
        type="password" 
        v-model="this.password" 
        id="inputPassword" 
        class="form-control" 
        placeholder="Password" 
        required>

    <!-- submit button -->
    <button 
        @click="this.login()" 
        class="btn btn-lg btn-primary mt-5" 
        type="button">Sign in
    </button>

    <p class="mt-5 mb-3 text-muted">&copy; 2022-2023</p>

  </form>
  </div>
</template>

<script>
export default {
    name: "Login",
    data() {
        return {
            username: "bram_user",
            password: "wachtwoord",
        };
    },
    methods: {
        login() {
            this.$store.dispatch('login', {
                username: this.username,
                password: this.password
            }).then(() => {
                console.log('login should be succesfull');
                this.$router.push('/products')
            })
            .catch((error) => console.log(error))
        },
    }
}
</script>

<style>

</style>