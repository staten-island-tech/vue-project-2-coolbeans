<template>
  <div class="Cart">
    <listitem
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
    <h2 v-if="this.carts.length > 0">Price: ${{ sum }}</h2>
  </div>
</template>

<script>
import listitem from "../components/listitem.vue";
import Button from "../components/button.vue";

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

<style scoped></style>
