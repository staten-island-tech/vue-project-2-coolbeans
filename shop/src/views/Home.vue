<template>
  <div class="home">
    <h1>Explore</h1>
    <!-- <h4>Explore</h4> -->
    <!-- <Loading v-if="ifLoading" /> -->
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
    >
      <template v-slot:love>
        <div class="fav" @click="addTofav(post)">
          <Heart />
        </div>
      </template>
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
            <Heart />
          </div>
        </template>
      </Card>
    </div>
  </div>
</template>

<script>
import Card from "../components/Card.vue";
import Modal from "../components/BigCard.vue";
import Heart from "../components/Heart.vue";
export default {
  setup() {},
  components: {
    Card,
    Modal,
    Heart,
    // Loading,
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
      document.documentElement.className = "modal-open ";

      this.$store.dispatch("openModal", postname);
    },
    addTofav(post) {
      this.$store.dispatch("closeModal");
      const favData = {
        title: post.title,
        location: post.location,
        imageUrl: post.imageUrl,
        author: post.author,
        description: post.description,
        postDate: post.postDate,
        uuid: post.uuid,
        perDate: post.perDate,
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
    ifLoading() {
      console.log(this.$store.state.setLoading);
      return this.$store.state.setLoading;
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
  /* position: absolute;
  bottom: 6rem;
  right: 1.5rem; */
  padding-top: 0.6rem;
  cursor: pointer;
  width: auto;
  height: 1.8rem;
  aspect-ratio: 1/1;
  overflow: visible;
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

h1 {
  color: #151515;
  padding-bottom: 2rem;
}
h4 {
  color: #8a8a8a;
  padding-bottom: 1rem;
}

.noscroll {
  overflow: hidden;
}

/* .hori {
  display: flex;
  width: 100%;
  align-items: start;
  justify-content: space-between;
  overflow: visible;
} */

@media only screen and (max-width: 650px) {
  .grid {
    display: flex;
    flex-direction: column;
  }
}
@media only screen and (max-width: 700px) {
  .grid {
    margin-bottom: 4rem;
  }
}
@media only screen and (max-width: 1000px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media only screen and (max-width: 1200px) {
}
</style>
