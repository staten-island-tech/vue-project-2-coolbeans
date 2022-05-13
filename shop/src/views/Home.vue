<template>
  <div class="home">
    <h1 class="hometext">Where</h1>
  </div>
</template>

<script>
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
  components: {},
};
</script>

<style scoped>
.hometext {
  font-size: 5rem;
}
</style>
