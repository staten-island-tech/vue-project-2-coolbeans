<script>
import { RouterLink, RouterView } from "vue-router";
export default {
  data() {
    return {
      name: "Vue.js",
    };
  },
  methods: {},
};
</script>

<template>
  <div>
    <div class="nav">
      <button class="sign-in">Sign In</button>
    </div>
  </div>
</template>

<style>
.nav {
  display: flex;
  justify-content: flex-end;
}
</style>
