<template>
  <div class="card" @click="$emit('card-click')">
    <div class="image">
      <img :src="image" alt="image" />
    </div>
    <div class="container">
      <h4 class="title">{{ title }}</h4>
      <!-- <h4 class="caption">{{ location }}</h4> -->
      <!-- <p class="location">Location</p> -->
      <p class="author">{{ author }}</p>
      <slot name="love" class="love"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    location: String,
    image: String,
    author: String,
    postDate: String,
    uuid: String,
  },
  components: {},
  mounted() {
    const cards = document.querySelectorAll(".card");
    cards.forEach((item) => {
      const randomRotation = Math.floor(Math.random() * (2 - -2 + 1) + -2);
      item.style.transform = `rotate(${randomRotation}deg)`;
    });
  },
};
</script>

<style scoped>
.card {
  background-color: #f5f4f4;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 100%;
  height: 100%;
  aspect-ratio: 4/5;
  grid-column-start: auto;
  grid-row-start: auto;
  position: relative;
  padding: 1.2rem;
  cursor: zoom-in;
}

.image {
  width: 100%;
  height: 100%;
  aspect-ratio: 1/1;
  overflow: hidden;
  background-color: #151515;
}

.image > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50%, 50%;
  overflow: hidden;
  opacity: 0.8;
  transition: opacity 0.2s ease-in-out;
}

.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  padding: 0.5rem;
}
.title,
.author {
  overflow: hidden;
  /* padding-bottom: 0.3rem; */
}

.card:hover img {
  opacity: 1;
}

.card:hover {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 12px;
}
</style>
