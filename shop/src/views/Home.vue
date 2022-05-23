<template>
  <div class="home">
    <h2>Home</h2>
    <h4>Explore</h4>
    <!-- <Modal/> -->
    <div class="grid">
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </div>
  </div>
</template>

<script>
import Card from "../components/Card.vue"
import Modal from "../components/BigCard.vue"
import { ref } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();

    return {};
  },
  components: {
    Card,
    Modal
  },
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0 4rem;
  padding-top: 1rem;
  padding-bottom: 2rem;
  
  /* @supports(display: grid) {
    display: block;
  } */
}

/* .section {
  display: block;
  padding: 2rem;
  
  @media screen and (min-width: 768px) {
    padding: 4rem;
  }
  
  @supports(display: grid) {
    display: block;
  }
} */

.grid {
  width: 100%;
  display: grid;
  grid-gap: 1.5rem;
  /* grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr)); */
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: auto;
  grid-auto-flow: row dense;
}

h2 {
  color: #151515;
  padding-bottom: 2rem;
}
h4 {
  color:#8a8a8a;
  padding-bottom: 1rem;
}
</style>
