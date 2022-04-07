<template>
  <div class="home">
    <h1 class="title">hello world</h1>
  </div>
</template>

<script>
import gsap from "gsap";
import scrollTo from "gsap/ScrollToPlugin";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(scrollTo, ScrollTrigger);

export default {
  mounted() {
    gsap.to(".title", {
      scrollTrigger: ".title",
      y: 200,
      scale: 2,
    })
  }
}
</script>

<style>
.title {
  text-align: center;
}
</style>