<template>
  <div class="create">
    <h2>Create</h2>
    <h4>Create a Post</h4>

    <div class="back"></div>
  </div>
</template>

<script>
export default {
  setup() {},
};
</script>

<style scoped>
.create {
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
