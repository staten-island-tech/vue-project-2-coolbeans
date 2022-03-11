<script setup>
import { RouterLink, RouterView } from "vue-router";
import loginsign from "./components/loginsign.vue";
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
