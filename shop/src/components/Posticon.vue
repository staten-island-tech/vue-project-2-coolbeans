<template>
  <div class="post">
    <img class="image" :src="image" alt="image" />
    <h5 class="title">{{ title }}</h5>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    image: String,
  },
  setup() {
    return {};
  },
};
</script>

<style scoped>
.post {
  width: fit-content;
}
.image {
  object-fit: cover;
  height: 20rem;
  width: 20rem;
}
.post {
  margin: 2rem;
}
</style>
