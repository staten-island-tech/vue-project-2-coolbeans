<template>
  <div class="container">
    <Signup/>
  </div>
</template>

<script>
import Signup from "../components/Signup.vue"
export default {
  components: {
    Signup
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100vh;
}
</style>
