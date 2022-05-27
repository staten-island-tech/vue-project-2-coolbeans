<template>
  <div class="user">
    <h2>Hello, {{ userName }}</h2>
    <h4>Your Posts</h4>
    <div class="grid"></div>
    <router-link to="/create">
      <div class="create">
        <img class="plus" src="../components/icons/plus.svg" alt="plus" />
        <p>Create</p>
      </div>
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
      </Card>
    </router-link>
  </div>
</template>

<script>
import Card from "../components/Card.vue";

export default {
  components: {
    Card,
  },
  mounted() {
    console.log(this.$store);
    this.$store.dispatch("loadUsercreated");
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
  },

  computed: {
    userName() {
      return this.$store.state.user.displayName;
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

.grid {
  width: 100%;
  display: grid;
  grid-gap: 1.5rem;
  /* grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr)); */
  grid-template-columns: repeat(3, 1fr);
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
  color: #fff;
  padding-right: 0.3rem;
}
p {
  font-size: 1.2rem;
  color: #fff;
  text-decoration: none;
  padding-right: 0.3rem;
}
.create:hover {
  background-color: rgba(35, 35, 35, 1);
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
}
</style>
