<template>
  <div class="home">
    <div class="grid">
      <Card/>
      <Card/>
    </div>
  </div>
</template>

<script>
import Card from "../components/Card.vue"
import { ref } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const blogs = [
      {
        title: "why tea is better than coffe.",
        id: 1,
      },
      {
        title: "why running is fun.",
        id: 2,
      },
      {
        title: "why is school hard?",
        id: 3,
      },
    ];

    const store = useStore();

    return { blogs };
  },
  components: {
    Card
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');

.home {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
  padding: 1rem 0;
  padding-top: 5rem;
  background: #f5f4f4;
  font-family: 'Open Sans', sans-serif;
  
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
  width: 90vw;
  display: grid;
  grid-gap: 1rem;
  /* grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr)); */
  grid-template-columns: 3;
  grid-auto-rows: auto;
  grid-auto-flow: row dense;
}

</style>
