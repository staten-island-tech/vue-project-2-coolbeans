<template>
  <div class="holder">
    <div class="views">
      <RouterLink to="/" class="page">Home</RouterLink>
      <RouterLink to="/about" class="page">About</RouterLink>
    </div>
    <h1 class="random">vdsvmedvknenveik</h1>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";
export default {
  name: "Nav",
};
</script>

<style scoped>
.page {
  font-size: 10rem;
}
.random {
  font-size: 10000rem;
}
</style>
