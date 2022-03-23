<template>
  <form class="form">
    <div class="container">
      <slot name="header"> </slot>

      <slot name="body"> </slot>

      <slot name="footer"> </slot>
    </div>
  </form>
</template>

<script>
export default {};
</script>

<style scoped>
.form {
  width: 81.029rem;
  height: 68.4rem;
  background-color: var(--gray-black);
}
</style>
