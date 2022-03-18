<script>
import { RouterLink } from "vue-router";
export default {
  name: "Nav",
};
</script>

<template>
  <div class="views">
    <RouterLink to="/" class="logo">Home</RouterLink>
    <RouterLink to="/about" class="page">About</RouterLink>
  </div>
</template>

<style scoped>
.logo {
  font-size: 4rem;

  padding: 1rem;
}
.page {
  font-size: 2rem;
  padding: 1rem;
  margin: auto;
  margin-right: 0;
}
.views {
  display: flex;
  justify-content: flex-end;
  padding: 3rem 1rem;
  align-items: baseline;
}
</style>
