<template>
  <div class="container">
    <div class="card">
      <h2 class="name">{{ name }}</h2>
      <div class="center">
        <img :src="image" alt="" class="img" />
      </div>
      <div class="text">
        {{ description }}
      </div>
      <Button class="button">Add</Button>
    </div>
  </div>
</template>

<script>
import Button from "../components/Button.vue";
export default {
  components: {
    Button,
  },
  props: {
    name: String,
    image: String,
    description: String,
  },
};
</script>

<style scoped>
.container {
  border: aquamarine 1rem solid;
  width: 60rem;
  margin: 1rem;
  position: relative;
}
.card {
  margin-bottom: 1rem;
}
.center {
  display: flex;
  justify-content: center;
}
.img {
  object-fit: cover;
  width: 40rem;
  min-height: 30rem;
}
.text {
  margin-top: 1rem;
  text-align: center;
}
.button {
  position: absolute;
  left: 36rem;
  top: 1rem;
}
</style>
