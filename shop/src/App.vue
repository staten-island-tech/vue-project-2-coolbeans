<script>
import { RouterView } from "vue-router";
import Nav from "./Nav.vue";
export default {
  components: {
    Nav,
  },
};
</script>

<template>
  <div id="home">
    <div class="nav">
      <Navi />
    </div>
    <div class="container">
      <RouterView />
    </div>
  </div>
</template>

<style>
@import "@/assets/base.css";
</style>
