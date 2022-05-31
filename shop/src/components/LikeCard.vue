<template>
  <div class="modal">
    <div class="background" @click="closeModal">
      <div class="card">
        <div class="container">
          <div class="author">
            <h4>{{ author }}</h4>
            <p class="location">{{ location }}</p>
          </div>
          <div class="image">
            <img :src="image" alt="" class="image" />
          </div>
          <div class="info">
            <div class="hori">
              <h3 class="title">{{ title }}</h3>
              <Heartpink class="heart" />
            </div>
            <p class="description">{{ description }}</p>
          </div>
          <div class="date">
            <p>{{ postDate }}</p>
          </div>
          <slot name="deleteBtn" class="button"></slot>
        </div>
      </div>
      <!-- <img
        class="close"
        src="../components/icons/close.svg"
        alt="close"
        @click="closeModal"
      /> -->
      <div class="close" @click="closeModal">
        <p>X</p>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "./Button.vue";
import Heartpink from "../components/Heartpink.vue";
export default {
  setup() {},
  props: {
    title: String,
    location: String,
    image: String,
    author: String,
    description: String,
    postDate: String,
    uuid: String,
  },
  components: { Button, Heartpink },
  methods: {
    closeModal: function () {
      this.$store.dispatch("closeModal");
      document.documentElement.className = "";
    },
  },
  computed: {},
};
</script>

<style scoped>
.modal {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9;
  overflow-y: scroll;
}
.background {
  position: fixed;
  overflow-x: auto;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
.card {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.container {
  /* margin-top: 8rem;
  margin-bottom: 2rem;
  height: 48rem; */
  height: 93vh;
  width: auto;
  aspect-ratio: 4/5;
  background-color: #f5f4f4;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  position: relative;
  padding: 1.2rem;
}

.image {
  width: 100%;
  height: 100%;
  overflow: hidden;
  /* background-color: #151515; */
}

.image > img {
  width: 100%;
  height: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
  object-position: 50%, 50%;
  overflow: hidden;
}

.author {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  width: 100%;
  padding-bottom: 0.5rem;
  padding-left: 0.5rem;
}

.author h4,
.location,
.title,
.description,
.date p {
  overflow: hidden;
  transform: translate(0, -25%);
  padding-bottom: 0.2rem;
}

.info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  width: 100%;
  padding: 0.5rem;
  /* padding-left: 0.5rem; */
}

.date {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  width: 100%;
  padding-bottom: 0.5rem;
  padding-left: 0.5rem;
}
.date p {
  font-size: 0.8rem;
}
.close {
  position: absolute;
  top: 0;
  right: 1.2rem;
  cursor: pointer;
  opacity: 0.8;
  transition: opacity 0.2s ease-in-out;
}

.close p {
  font-size: 2rem;
  color: #f5f4f4;
}

.close:hover {
  opacity: 1;
}
.hori {
  display: flex;
  width: 100%;
  align-items: start;
  justify-content: space-between;
  overflow: hidden;
}

.heart {
  width: 2rem;
}
@media only screen and (max-width: 700px) {
  .container {
    /* max-width: 80vw;
    max-height: 80vh; */
    /* height: auto; */
    height: 75vh;
    max-width: 90vw;
  }
}
</style>
