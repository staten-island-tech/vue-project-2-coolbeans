<template>
  <div class="views">
    <span class="logo">
      <slot name="logo" />
    </span>
    <nav>
      <ul class="links">
        <li class="pages">
          <slot name="page" />
        </li>
      </ul>
    </nav>
    <div class="button">
      <slot name="clickly" />
    </div>
  </div>
</template>

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

<style scoped>
.views {
  display: flex;
  justify-content: flex-end;
  padding: 3rem 1%;
  align-items: baseline;
  background-color: var(--gray-black);
}
.logo {
  font-size: var(--h1);
  padding: 1rem;
  color: var(--dark-white);
  text-decoration: none;
  margin-right: auto;
}

.pages {
  font-size: 2rem;
  padding: 1rem;
  margin: auto;
  margin-right: 0;
  color: var(--dark-white);
  text-decoration: none;
  display: inline;
  list-style-type: none;
}
</style>
