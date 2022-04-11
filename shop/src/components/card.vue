<template>
  <div class="card">
    <h2 class="item-name">{{ name }}</h2>
    <img :src="image" alt="" class="item-img" />
    <div class="container">
      <h3 class="item-price">{{ price }}</h3>
      <span class="button-holder"><slot></slot></span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    image: String,
    price: Number,
  },
  components: {},
};
</script>

<style scoped>
.card {
  width: 40.125rem;
  height: 26.125rem;
  border-radius: 1.25rem;
}
.item-img {
  width: 40rem;
  object-fit: cover;
  height: 20rem;
}
.item-name,
.item-price {
  width: fit-content;
  margin: 0 auto;
}
.item-name {
  margin-top: 0.313rem;
}
.item-price {
  margin-top: 0.625rem;
}

.container {
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
  margin-bottom: 0.625rem;
}
</style>
