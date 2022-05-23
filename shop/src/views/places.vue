<template>
  <div class="wrapper">
    <Posticon
      class="post"
      v-for="(post, index) in posts"
      :key="index"
      :title="post.title"
      :image="post.image"
    />
  </div>
</template>

<script>
import Button from "../components/Button.vue";
import Posticon from "../components/Posticon.vue";

export default {
  name: "Home",
  components: {
    Button,
    Posticon,
  },
  methods: {},
  computed: {
    posts() {
      return this.$store.state.loadPost;
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
