<template>
  <div class="box">
    <h2 class="head"><slot name="head"></slot></h2>
    <h3 class="subhead" id="subhead1"><slot name="subhead1"></slot></h3>
    <h3 class="subhead" id="subhead2"><slot name="subhead2"></slot></h3>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style scoped>
.box {
  width: 50.625rem;
  height: 42.75rem;
  background-color: black;
}
</style>
