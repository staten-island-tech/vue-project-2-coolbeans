<template>
  <div class="fav">
    <h2>Liked Posts</h2>
    <!-- <h4>Favorite Posts</h4> -->
    <div class="grid"></div>
  </div>
</template>

<script>
import Card from "../components/Card.vue";

export default {
  components: {
    Card,
  },
  computed: {},

  methods: {},
};
</script>

<style scoped>
.fav {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0 4rem;
  padding-bottom: 2rem;
}

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
  color: #8a8a8a;
  padding-bottom: 1rem;
}
</style>
