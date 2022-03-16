<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>

    <div class="container">
      <RouterView />
    </div>
  </header>
</template>

<style>
/* @import '@/assets/base.css'; */
</style>
