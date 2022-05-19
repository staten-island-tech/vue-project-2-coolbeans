<template>
  <div class="container">
    <Login class="login"/>
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
  width: 100%;
  height: 100%;
  padding: 0 4rem;
  padding-top: 5rem;
  padding-bottom: 2rem;
}

.login {
  z-index: 2;
}
</style>
