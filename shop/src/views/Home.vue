<template>
  <div class="home">
    <h2>Explore</h2>
    <!-- <h4>Explore</h4> -->
    <Modal
      v-show="isHidden"
      v-for="(tempS, index) in tempStore"
      :key="index"
      :title="tempS.title"
      :location="tempS.location"
      :image="tempS.imageUrl"
      :author="tempS.author"
      :description="tempS.description"
      :postDate="tempS.postDate"
      :uuid="tempS.uuid"
      >s
    </Modal>
    <div class="grid">
      <Card
        @card-click="openModal(post)"
        v-for="(post, index) in posts"
        :key="index"
        :title="post.title"
        :location="post.location"
        :image="post.imageUrl"
        :author="post.author"
        :description="post.description"
        :postDate="post.postDate"
        :uuid="post.uuid"
      >
        <template v-slot:love>
          <div class="fav" @click="addTofav(post)">
            <img src="../components/icons/love.png" alt="favorite" />
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
      console.log(post.title);
      const postname = {
        title: post.title,
        location: post.location,
        imageUrl: post.imageUrl,
        author: post.author,
        description: post.description,
        postDate: post.postDate,
        uuid: post.uuid,
      };
      this.$store.dispatch("openModal", postname);
    },
    addTofav(post) {
      const favData = {
        title: post.title,
        location: post.location,
        imageUrl: post.imageUrl,
        author: post.author,
        description: post.description,
        postDate: post.postDate,
        uuid: post.uuid,
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
  bottom: 3.5rem;
  right: 1.5rem;
  cursor: pointer;
  width: auto;
  height: 1.8rem;
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
  grid-gap: 2.5rem;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: auto;
  grid-auto-flow: row dense;
  justify-items: center;
  overflow: visible;
}

h2 {
  color: #151515;
  padding-bottom: 2rem;
}
h4 {
  color: #8a8a8a;
  padding-bottom: 1rem;
}

@media only screen and (max-width: 650px) {
  .grid {
    display: flex;
    flex-direction: column;
  }
}
@media only screen and (max-width: 768px) {
}
@media only screen and (max-width: 1000px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media only screen and (max-width: 1200px) {
}
</style>
