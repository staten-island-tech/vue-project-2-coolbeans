<template>
  <div class="like">
    <h1>Liked Posts</h1>
    <!-- <h4>Favorite Posts</h4> -->
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
          <div class="fav">
            <Heartpink />
          </div>
        </template>
      </Card>
    </div>
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
          <Heartpink />
        </div>
      </template>
    </Modal>
  </div>
</template>

<script>
import Card from "../components/Card.vue";
import Modal from "../components/BigCard.vue";
import Heartpink from "../components/Heartpink.vue";
export default {
  components: {
    Card,
    Modal,
    Heartpink,
  },
  mounted() {
    this.$store.dispatch("loadFavor");
  },
  methods: {
    openModal(post) {
      const exportname = {
        title: post.title,
        location: post.location,
        imageUrl: post.imageUrl,
        author: post.author,
        description: post.description,
        postDate: post.postDate,
        uuid: post.uuid,
      };
      this.$store.dispatch("openModal", exportname);
      document.documentElement.className = "modal-open ";
    },
  },
  computed: {
    posts() {
      return this.$store.getters.favorite;
    },
    tempStore() {
      return this.$store.state.tempStore;
    },
    isHidden() {
      return this.$store.state.isHidden;
    },
  },
};
</script>

<style scoped>
.like {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0 4rem;
  padding-bottom: 2rem;
}

.grid {
  width: 100%;
  display: grid;
  grid-gap: 3rem;
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
