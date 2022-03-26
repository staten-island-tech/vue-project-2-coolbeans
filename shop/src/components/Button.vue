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
  background-color: rgba(0, 136, 169, 1);
  padding: 0.9rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease 0s;
}

.button:hover {
  background-color: rgba(0, 136, 169, 0.8);
}
</style>
