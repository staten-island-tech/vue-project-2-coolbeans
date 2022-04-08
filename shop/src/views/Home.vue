<template>
  <section>
    <div class="home"></div>
    <div class="test">
      <h1 class="title">hello world</h1>
    </div>
  </section>
</template>

<script>
import gsap from "gsap";
import scrollTo from "gsap/ScrollToPlugin";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(scrollTo, ScrollTrigger);

export default {
  mounted() {
    gsap.to(".title", {
      scrollTrigger: ".test",
      y: 200,
      scale: 2,
      delay: 0.5,
    });
  },
};
</script>

<style>
.home {
  height: 110vh;
}
.test {
  height: 100vh;
}
.title {
  text-align: center;
}
</style>
