<template>
  <div class="wrapper">
    <Card
      v-for="(postData, index) in postDatas"
      :key="index"
      :name="postData.name"
      :image="postData.img"
      :description="postData.description"
      class="card"
    ></Card>
  </div>
</template>

<script>
import Button from "../components/Button.vue";
import Card from "../components/Card.vue";

export default {
  name: "Home",
  components: {
    Button,
    Card,
  },
  methods: {},
  computed: {
    postDatas() {
      return this.$store.state.place;
    },
  },

  data() {
    return {};
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
}
</style>
