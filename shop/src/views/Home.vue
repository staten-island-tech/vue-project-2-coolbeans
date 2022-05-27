<template>
  <div class="home">
    <h2>Explore</h2>
    <!-- <h4>Explore</h4> -->
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
        <!-- <template v-slot:love>
          <div class="fav" @click="addTofav">
            <img
              src="../components/icons/love.png"
              alt="favorite"
            />
          </div>
        </template> -->
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
  bottom: 11%;
  right: 6%;
  cursor: pointer;
  width: auto;
  height: 5%;
  aspect-ratio: 1/1;
  overflow: hidden;
  z-index: 6;
}

.fav > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50%, 50%;
}

.grid {
  width: 100%;
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: auto;
  grid-auto-flow: row dense;
  justify-items: center;
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
