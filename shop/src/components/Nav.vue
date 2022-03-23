<script>
import { RouterLink } from "vue-router";
import Button from "./Button.vue";
import Form from "./Modal.vue";
export default {
  components: {
    Button,
    Form,
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {},
};
</script>

<template>
  <div class="views">
    <RouterLink to="/" class="logo">HOME</RouterLink>
    <nav>
      <ul class="links">
        <li class="link">
          <RouterLink to="/about" class="page">ABOUT</RouterLink>
        </li>
      </ul>
    </nav>
    <div class="button">
      <slot></slot>
    </div>
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
</style>
