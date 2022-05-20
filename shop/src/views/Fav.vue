<template>
  <div class="fav">
    <!-- <h2>FAVORITES</h2> -->
    <div class="grid">
      <Card/>
      <Card/>
    </div>
    <!-- <listitem
      class="listitem"
      v-for="(cart, index) in carts"
      :key="index"
      :name="cart.name"
      :price="cart.price"
      :image="cart.img"
    >
      <Button @button-click="removeCard(index)">Remove</Button>
    </listitem>
    <Button v-if="this.carts.length > 0" @button-click="removeAll()"
      >Remove All</Button
    >
    <h2 v-if="this.carts.length === 0">Price: $0 (BUY SOMETHING PLZ)</h2>
    <h2 v-if="this.carts.length > 0">Price: ${{ sum }}</h2> -->
  </div>
</template>

<script>
import Card from "../components/Card.vue"
import Button from "../components/Button.vue";

export default {
  components: {
    Card,
    Button,
  },
  computed: {
    carts() {
      return this.$store.state.cart;
    },
    total() {
      return this.$store.state.total;
    },
    sum() {
      return this.$store.state.cart.reduce(
        (total, vanguard) => total + vanguard.price,
        0
      );
    },
  },

  methods: {
    removeCard(index, price) {
      this.$store.commit("remove", index, price);
    },
    removeAll() {
      this.$store.commit("removeAll");
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');

.fav {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0 4rem;
  padding-top: 6rem;
  padding-bottom: 2rem;
}

.grid {
  width: 100%;
  display: grid;
  grid-gap: 1.5rem;
  /* grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr)); */
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: auto;
  grid-auto-flow: row dense;
}

h2 {
  color: #151515;
  padding-bottom:1rem;
  letter-spacing: 0.1rem;
}
</style>
