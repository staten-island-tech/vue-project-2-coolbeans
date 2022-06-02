<template>
  <div class="user">
    <h1>Hello, {{ userName }}</h1>
    <!-- <h4>You created no post!</h4> -->
    <!-- <h4>Your Posts</h4> -->
    <div class="grid">
      <Card
        @card-click="openModal(post)"
        v-for="(post, cardIndex) in posts"
        :key="cardIndex"
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
    <router-link to="/create">
      <div class="create">
        <p class="plus">+</p>
        <!-- <img class="plus" src="../components/icons/plus.svg" alt="plus" /> -->
        <p>Create</p>
      </div>
    </router-link>
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
      <template v-slot:deleteBtn>
        <button class="button" @click="deletePost(tempS)">Remove</button>
      </template>
    </Modal>
  </div>
</template>

<script>
import Card from "../components/Card.vue";
import Modal from "../components/BigCard.vue";
export default {
  data() {
    return {};
  },
  components: {
    Card,
    Modal,
  },
  mounted() {
    this.$store.dispatch("loadUsercreated");
  },
  methods: {
    openModal(post) {
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
      document.documentElement.className = "modal-open ";
    },
    deletePost(tempS) {
      const onluUuid = tempS.uuid;
      this.$store.dispatch("deletePosttemp", onluUuid);
      this.$store.dispatch("closeModal");
      // tomor make sure where cut
      // make link from store
      // make edit
    },
  },
  computed: {
    userName() {
      return this.$store.state.user.displayName.split(" ")[0];
    },
    posts() {
      return this.$store.getters.userCreated;
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
.user {
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
.create {
  position: fixed;
  background-color: rgba(21, 21, 21, 1);
  /* background-color: #73a5c9; */
  bottom: 2rem;
  right: 3rem;
  height: 3rem;
  width: 8rem;
  border-radius: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}

.plus {
  font-size: 1.2rem;
  color: #fff;
  padding-right: 0.7rem;
}
p {
  font-size: 1.2rem;
  color: #fff;
  text-decoration: none;
  /* padding-right: 0.3rem; */
}
.create:hover {
  background-color: rgba(35, 35, 35, 1);
  /* box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px; */
}
.button {
  position: absolute;
  bottom: 1.2rem;
  right: 1.6rem;
  background: none;
  border: none;
  font-family: "Gloria Hallelujah", cursive;
  font-size: 1rem;
  color: red;
  cursor: pointer;
  opacity: 0.8;
  transition: opacity 0.1s ease-in-out;
}

.button:hover {
  text-decoration: underline;
  opacity: 1;
}

@media only screen and (max-width: 650px) {
  .grid {
    display: flex;
    flex-direction: column;
  }
}
@media only screen and (max-width: 700px) {
  .create {
    bottom: 5rem;
    right: 1rem;
  }
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
