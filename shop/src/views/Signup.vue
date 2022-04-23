<template>
  <div class="container">
    <div class="mask">
    </div>
    <Signup class="signup"/>
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

.signup {
  z-index: 2;
}
</style>
