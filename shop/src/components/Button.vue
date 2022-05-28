<template>
  <button class="button" @click="$emit('button-click')">
    <slot></slot>
  </button>
</template>

<script>
export default {};
</script>

<style scoped>
.button {
  background-color: #151515;
  /* background-color: #73a5c9; */
  color: #fff;
  width: 20rem;
  height: 2.5rem;
  margin: 0.8rem;
  border: none;
  border-radius: 2rem;
  font-size: 1rem;
  /* text-transform: uppercase; */
  transition: background-color 0.3s ease 0s;
  cursor: pointer;
  font-family: 'Gloria Hallelujah', cursive;
}

.button:hover {
  /* opacity: 0.9; */
  background-color: rgba(35, 35, 35, 1);
}
</style>
