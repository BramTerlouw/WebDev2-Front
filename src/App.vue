<template>
  <navigation/>
  <router-view></router-view>
</template>

<script>
import navigation from './components/Navigation.vue';

export default {
  name: 'App',
  components: {
    navigation
  },
  created() {
    this.$store.dispatch('autoLogin');
  }
}
</script>

<style>

</style>
