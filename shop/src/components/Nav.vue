<script>
import { RouterLink } from "vue-router";
import Button from "./Button.vue";
export default {
  components: {
    Button,
  },
};
</script>

<template>
  <div class="views">
    <RouterLink to="/" class="logo">Home</RouterLink>
    <nav>
      <ul class="links">
        <li class="link">
          <RouterLink to="/about" class="page">About</RouterLink>
        </li>
      </ul>
    </nav>
    <Button class="Sign-in">Sign In</Button>
  </div>
</template>

<style scoped>
.views {
  display: flex;
  justify-content: flex-end;
  padding: 3rem 1%;
  align-items: baseline;
  background-color: var(--gray-black);
}
.logo {
  font-size: 4rem;
  padding: 1rem;
  color: var(--dark-white);
  text-decoration: none;
  margin-right: auto;
}
.link {
  list-style-type: none;
}

.page {
  font-size: 2rem;
  padding: 1rem;
  margin: auto;
  margin-right: 0;
  color: var(--dark-white);
  text-decoration: none;
  display: inline;
}

.Sign-in {
  font-size: 2rem;
}
</style>
