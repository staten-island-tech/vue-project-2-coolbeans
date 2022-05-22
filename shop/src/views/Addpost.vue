<template>
  <div>
    <div class="post">
      <Plus @click="openModal2" /><Modal2
        ><template v-slot:insert-image>
          <div class="imageUploading">
            <h2 class="heading">Submit Your Image</h2>
            <input
              type="file"
              @change="onFileSelected"
              ref="fileInput"
              class="input"
              accept="image/*"
            />
            <Button @button-click="$refs.fileInput.click()" class="button"
              >Upload Image</Button
            >
            <img :src="imageUrl" alt="" class="image-preview" />
            <div class="form-group">
              <h5 class="top-label">Description</h5>
              <input
                type="description"
                placeholder="Description"
                class="form-field"
              />
            </div>
          </div> </template
      ></Modal2>
    </div>
  </div>
</template>

<script>
import Plus from "../components/Plus.vue";
import Modal2 from "../components/Modal2.vue";
import Button from "../components/Button.vue";
export default {
  setup() {
    return {};
  },
  components: {
    Plus,
    Modal2,
    Button,
  },
  data() {
    return {
      imageUrl: "",
      image: null,
    };
  },
  methods: {
    openModal2: function () {
      this.$store.dispatch("openModal2");
    },
    onFileSelected: function (event) {
      console.log(event);
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
input[type="description"] {
  padding: 1rem;
}
</style>
