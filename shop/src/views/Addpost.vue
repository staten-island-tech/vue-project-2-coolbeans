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
      <div class="test">
        <h1>{{ postData.image }}</h1>
      </div>
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
              v-model="postData.title"
            />
            <input
              type="file"
              @change="previewImage"
              ref="fileInput"
              class="input"
              accept="image/*"
            />
            <Button @button-click="$refs.fileInput.click()" class="button"
              >Select Image</Button
            >
            <div v-if="imageData != null">
              <img class="preview" :src="picture" />
              <br />
              <button @click="onUpload">Upload</button>
            </div>
            <div class="form-group">
              <h5 class="top-label">Description</h5>
              <textarea
                type="description"
                placeholder="Description"
                class="form-field"
                required
                v-model="postData.description"
              />
            </div>
            <Button @button-click="uploadPost">Upload Post</Button>
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
import axios from "axios";
import firebase from "firebase/app";
import "firebase/storage";

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
      postData: { title: "", description: "" },
      imageUrl: "",
      imageData: null,
      picture: null,
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
      this.onUpload();
      console.log(this.postData);
      axios
        .post(
          "https://auth-shop-994d6-default-rtdb.firebaseio.com/posts.json",
          this.postData
        )
        .then(function (data) {
          console.log(data);
        });

      // this.$router.push("/addpost");
    },
    previewImage(event) {
      this.uploadValue = 0;
      this.picture = null;
      this.imageData = event.target.files[0];
    },
    onUpload() {
      this.picture = null;
      const storageRef = firebase
        .storage()
        .ref(`${this.imageData.name}`)
        .put(this.imageData);
      storageRef.on(
        `state_changed`,
        (snapshot) => {
          this.uploadValue =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
        (error) => {
          console.log(error.message);
        },
        () => {
          this.uploadValue = 100;
          storageRef.snapshot.ref.getDownloadURL().then((url) => {
            this.picture = url;
          });
        }
      );
    },

    // this function help change the image file into a base64 string, so user can have a preview
    /* onFileSelected: function (event) {
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
    }, */
  },
};
</script>

<style scoped>
img.preview {
  width: 20rem;
}
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
