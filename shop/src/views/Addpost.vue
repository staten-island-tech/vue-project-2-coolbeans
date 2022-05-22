<template>
  <div>
    <div class="container">
      <Posticon
        class="post"
        v-for="(post, index) in posts"
        :key="index"
        :title="post.title"
        :image="post.image"
      />
      <Plus @click="openModal2" />
      <Modal2
        ><template v-slot:insert-image>
          <h2 class="heading">Submit Your Image</h2>
          <div class="imageUploading">
            <h5 class="top-label">Description</h5>
            <input
              type="title"
              placeholder="Title"
              class="form-field"
              required
            />
            <input
              type="file"
              @change="onFileSelected"
              ref="fileInput"
              class="input"
              accept="image/*"
            />
            <Button @button-click="$refs.fileInput.click()" class="button"
              >Select Image</Button
            >
            <img :src="imageUrl" alt="" class="image-preview" />
            <div class="form-group">
              <h5 class="top-label">Description</h5>
              <input
                type="description"
                placeholder="Description"
                class="form-field"
                required
              />
            </div>
            <Button @click="uploadPost">Upload Post</Button>
          </div>
        </template></Modal2
      >
    </div>
  </div>
</template>

<script>
import Plus from "../components/Plus.vue";
import Modal2 from "../components/Modal2.vue";
import Button from "../components/Button.vue";
import Posticon from "../components/Posticon.vue";

export default {
  setup() {
    return {};
  },
  components: {
    Plus,
    Modal2,
    Button,
    Posticon,
  },
  data() {
    return {
      imageUrl: "",
      image: null,
    };
  },
  computed: {
    posts() {
      return this.$store.state.loadPost;
    },
  },
  methods: {
    openModal2: function () {
      this.$store.dispatch("openModal2");
    },
    uploadPost: function () {
      const Post = {
        title: this.title,
        image: this.image,
        description: this.description,
      };
      this.$store.dispatch("createPost", Post);
      this.$router.push("/addpost");
    },
    // this function help change the image file into a base64 string, so user can have a preview
    onFileSelected: function (event) {
      const files = event.target.files;
      let filename = files[0].name;
      if (filename.lastIndexOf(".") <= 0) {
        return alert("Please add a valid file!");
      }
      const fileReader = new FileReader();
      fileReader.addEventListener("load", () => {
        this.imageUrl = fileReader.result;
      });
      fileReader.readAsDataURL(files[0]);
      this.image = files[0];
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
}
.imageUploading {
  margin-left: 2rem;
  display: flex;
  flex-direction: column;
}
.heading {
  text-align: left;
}
.input {
  display: none;
}
.button {
  border-radius: 2rem;
  width: fit-content;
}
.image-preview {
  object-fit: cover;
  height: 50rem;
  width: 30rem;
}
.form-group {
  margin-top: 1rem;
}
.top-label {
  text-align: left;
}
.form-field {
  width: 50rem;
}
input[type="description"],
input[type="title"] {
  padding: 1rem;
}
</style>
