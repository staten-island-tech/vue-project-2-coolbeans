<script>
import { RouterView } from "vue-router";
import Nav from "./components/Nav.vue";
export default {
  components: {
    Nav,
  },
};
</script>

<template>
  <div id="home">
    <div class="nav">
      <Nav />
    </div>
    <div class="container">
      <RouterView />
    </div>
  </div>
</template>

<style>
@import "@/assets/base.css";

.test {
  font-size: 10rem;
}
</style>
