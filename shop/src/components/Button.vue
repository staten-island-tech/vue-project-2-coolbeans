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
  background-color: rgba(0, 136, 169, 1);
  color: #fff;
  width: 30rem;
  height: 4rem;
  margin: 1.5rem;
  border: none;
  border-radius: 2rem;
  font-size: 1.6rem;
  text-transform: uppercase;
  font-family: 'Open Sans', sans-serif;
  transition: all 0.3s ease 0s;
}

.button:hover {
  background-color: rgba(0, 146, 179, 1);
  cursor: pointer;
}
</style>
