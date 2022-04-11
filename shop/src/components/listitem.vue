<template>
  <div class="container">
    <div class="items">
      <img :src="image" alt="" class="img" />
      <h2 class="name">{{ name }}</h2>
      <h2 class="price">${{ price }}</h2>
      <span class="button-holder"><slot></slot></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "listitem",
  props: {
    name: String,
    image: String,
    price: Number,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.img {
  width: 20%;
}
.items {
  width: 70vw;
  display: flex;
  justify-content: space-between;
}

.name,
.price {
  margin-top: 0;
}
</style>
