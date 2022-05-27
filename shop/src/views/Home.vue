<template>
  <div class="home">
    <h2>Home</h2>
    <h4>Explore</h4>
    <Modal
      v-show="isHidden"
      v-for="(tempS, index) in tempStore"
      :key="index"
      :location="tempS.location"
      :image="tempS.imageUrl"
      :author="tempS.author"
      :description="tempS.description"
      :postDate="tempS.postDate"
    />
    <div class="grid">
      <Card
        @card-click="openModal(post)"
        v-for="(post, index) in posts"
        :key="index"
        :location="post.location"
        :image="post.imageUrl"
        :author="post.author"
        :description="post.description"
        :postDate="post.postDate"
      >
        <template v-slot:love>
          <div class="fav" @click="addTofav(post)">
            <img
              class="love"
              src="../components/icons/love-w.svg"
              alt="favorite"
            />
          </div>
        </template>
      </Card>
    </div>
  </div>
</template>

<script>
import Card from "../components/Card.vue";
import Modal from "../components/BigCard.vue";

export default {
  setup() {},
  components: {
    Card,
    Modal,
  },
  mounted() {
    this.$store.dispatch("loadPost");
  },
  data() {
    return {};
  },
  methods: {
    openModal(post) {
      const postname = {
        location: post.location,
        imageUrl: post.imageUrl,
        author: post.author,
        description: post.description,
        postDate: post.postDate,
      };
      this.$store.dispatch("openModal", postname);
    },
    addTofav(post) {
      const favData = {
        location: post.location,
        imageUrl: post.imageUrl,
        author: post.author,
        description: post.description,
        postDate: post.postDate,
      };
      this.$store.dispatch("addFavorite", favData);
    },
  },
  computed: {
    isHidden() {
      return this.$store.state.isHidden;
    },
    posts() {
      return this.$store.getters.loadedPosts;
    },
    tempStore() {
      return this.$store.state.tempStore;
    },
  },
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0 4rem;
  padding-top: 1rem;
  padding-bottom: 2rem;

  /* @supports(display: grid) {
    display: block;
  } */
}

/* .section {
  display: block;
  padding: 2rem;
  
  @media screen and (min-width: 768px) {
    padding: 4rem;
  }
  
  @supports(display: grid) {
    display: block;
  }
} */

.fav {
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
}

.grid {
  width: 100%;
  display: grid;
  grid-gap: 1.5rem;
  /* grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr)); */
  grid-template-columns: repeat(3, 1fr);
  /* grid-auto-rows: minmax(min-content, max-content); */
  grid-auto-rows: auto;
  grid-auto-flow: row dense;
}

h2 {
  color: #151515;
  padding-bottom: 2rem;
}
h4 {
  color: #8a8a8a;
  padding-bottom: 1rem;
}
</style>
