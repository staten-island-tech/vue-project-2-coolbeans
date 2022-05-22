<template>
  <div class="container">
    <Login/>
  </div>
</template>

<script>
import Login from "../components/Login.vue"
export default {
  components: {
    Login
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
  width: auto;
  height: auto;
  padding: 0 4rem;
  padding-top: 7rem;
  padding-bottom: 2rem;
}

</style>
