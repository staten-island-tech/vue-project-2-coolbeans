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
    const store = useStore();

    return {};
  },
  components: {},
};
</script>

<style scoped>
.hometext {
  font-size: 5rem;
}
</style>
