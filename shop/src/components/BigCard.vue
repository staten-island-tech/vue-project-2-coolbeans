<template>
  <div class="card">
    <div class="background">
      <div class="content">
        <div class="container">
          <h2 class="location">{{ location }}</h2>
          <img :src="image" alt="" class="image" />
          <h3 class="author">{{ author }}</h3>
          <p class="description">{{ description }}</p>
          <p class="date">{{ postDate }}</p>
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
export default {
  setup() {},
  props: {
    location: String,
    image: String,
    author: String,
    description: String,
    postDate: String,
  },
  components: {},
  methods: {
    closeModal: function () {
      this.$store.dispatch("closeModal");
    },
  },
  computed: {},
};
</script>

<style scoped>
.card {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  z-index: 9;
}
.background {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
.content {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.container {
  position: relative;
  width: 82%;
  height: 90%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.close {
  position: absolute;
  top: 0;
  right: 1.2rem;
  cursor: pointer;
}

.image {
  object-fit: cover;
  height: 20rem;
}

.close p {
  font-size: 2.5rem;
  color: #f5f4f4;
}
</style>
