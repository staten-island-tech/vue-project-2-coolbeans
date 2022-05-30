<template>
  <div>
    <div class="image">
      <img :src="image" alt="image" />
    </div>
    <div class="container">
      <h4 class="title">{{ title }}</h4>
      <!-- <h4 class="caption">{{ location }}</h4> -->
      <!-- <p class="location">Location</p> -->
      <p class="author">{{ author }}</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
