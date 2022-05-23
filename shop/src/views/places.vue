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
  created() {
    axios
      .get("https://auth-shop-994d6-default-rtdb.firebaseio.com/posts.json")
      .then(function (data) {
        console.log(data);
      });
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
