<template>
  <div class="create">
    <h2>Create</h2>
    <h4>Create a Post</h4>
    <form class="form" @submit.prevent="onCreatePost">
      <div class="title">
        <h5 class="titletext">Title</h5>
        <input
          type="text"
          placeholder="Title"
          class="form-field"
          v-model="name"
          required
        />
      </div>
      <div class="image">
        <h5 class="imagetext">Image-Url</h5>
        <input
          type="text"
          placeholder="imageUrl"
          class="form-field"
          v-model="imageUrl"
          required
        />
        <img :src="imageUrl" alt="" class="image" />
      </div>
      <div class="description">
        <h5 class="descriptiontext">Description</h5>
        <textarea
          type="text"
          placeholder="Description"
          class="form-field"
          v-model="description"
          required
        />
      </div>
      <div class="time">Time: {{ postDate }}</div>
      <button class="check" @click="time">check me out</button>
      <button :disabled="!isFormVaild" type="submit">Create Post</button>
    </form>
    <div class="back"></div>
  </div>
</template>

<script>
import Button from "../components/Button.vue";
export default {
  component: {},
  data() {
    return {
      name: "",
      imageUrl: "",
      description: "",
      postDate: this.reformatingDate(),
    };
    z;
  },
  computed: {
    isFormVaild() {
      return (
        this.name !== "" && this.imageUrl !== "" && this.description !== ""
      );
    },
  },
  methods: {
    onCreatePost() {
      if (!this.isFormVaild) {
        return;
      }
      const postData = {
        name: this.name,
        imageUrl: this.imageUrl,
        description: this.description,
        postDate: this.postDate,
      };
      this.$store.dispatch("createPost", postData);
      // just figure this out, no need to import useRouter anymore
      this.$router.push("/");
    },
    reformatingDate() {
      const date = new Date();
      return date.toLocaleString(["en-US"], {
        month: "short",
        day: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    },
  },
  setup() {},
};
</script>

<style scoped>
.create {
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
}
h2 {
  color: #151515;
  padding-bottom: 2rem;
}
h4 {
  color: #8a8a8a;
  padding-bottom: 1rem;
}
.form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.image {
  object-fit: cover;
  height: 25rem;
  width: 25rem;
}
</style>
