<template>
  <button class="button" @click="$emit('button-click')">
    <slot></slot>
  </button>
</template>

<script>
export default {};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');

.button {
  background-color: rgba(150, 150, 150, 1);
  color: #fff;
  width: 24rem;
  height: 3rem;
  margin: 1rem;
  border: none;
  border-radius: 2rem;
  font-size: 1.1rem;
  text-transform: uppercase;
  font-family: 'Open Sans', sans-serif;
  transition: 0.3s ease 0s;
}

.button:hover {
  background-color: rgba(160, 160, 160, 1);
  cursor: pointer;
}
</style>
