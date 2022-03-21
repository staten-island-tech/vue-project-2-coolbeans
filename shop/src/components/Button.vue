<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<script>
export default {};
</script>

<style scoped>
.button {
  padding: 0.9rem;
  background-color: rgba(0, 136, 169, 1);
  border: none;
  border-radius: 5rem;
  cursor: pointer;
  transition: all 0.3s ease 0s;
}

.button:hover {
  background-color: rgba(0, 136, 169, 0.8);
}
</style>
