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
  /* background-color: #151515; */
  background-color: #73a5c9;
  color: #fff;
  width: 20rem;
  height: 2.5rem;
  margin: 0.8rem;
  border: none;
  border-radius: 2rem;
  font-size: 0.9rem;
  text-transform: uppercase;
  transition: 0.3s ease 0s;
  font-family: 'Kumbh Sans', sans-serif;

}

.button:hover {
  opacity: 0.9;
  cursor: pointer;
}
</style>
