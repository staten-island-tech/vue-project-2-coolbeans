<template>
  <div class="fav">
    <div class="mask"></div>
    <h2>Favorites</h2>
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
import listitem from "../components/listitem.vue";
import Button from "../components/Button.vue";

export default {
  components: {
    listitem,
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
  height: 100vh;
  background: url(https://images.unsplash.com/photo-1528837516156-0a7225a43641?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1633&q=80);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 0;
}

.mask {
  position: absolute;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1;
}

h2 {
  color: #fff;
  font-family: 'Open Sans', sans-serif;
  z-index: 2;
}
</style>
