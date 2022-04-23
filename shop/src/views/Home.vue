<template>
  <div class="home">
    <div class="mask">
    </div>
    <h2>Home</h2>
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
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');

.home {
  height: 100vh;
  background: url(https://images.unsplash.com/photo-1528837516156-0a7225a43641?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1633&q=80);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 0;
}

.mask {
  position: absolute;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1;
}

h2 {
  color: #fff;
  font-family: 'Open Sans', sans-serif;
  z-index: 2;
}
</style>
