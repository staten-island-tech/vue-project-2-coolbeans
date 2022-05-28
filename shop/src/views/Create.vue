<template>
  <div class="container">
    <div class="content">
      <div class="create">
        <h3>Create a Post</h3>
        <form class="form" @submit.prevent="onCreatePost">
          <button class="useFile" @click="onFileup(), isUpfile()">
            Upload Image File
          </button>
          <input
            type="file"
            class="inputfile"
            ref="fileInput"
            accept="image/*"
            @change="onFilepick"
          />
          <h5>Or</h5>
          <div class="image">
            <input
              type="text"
              placeholder="Image URL"
              class="form-field"
              v-model="imageUrl"
              @keyup="isTexton"
            />
          </div>
          <div class="title">
            <input
              type="text"
              placeholder="Title"
              class="form-field"
              maxlength="25"
              v-model="title"
            />
          </div>
          <div class="location">
            <input
              id="autocomplete"
              type="text"
              placeholder="Location"
              class="form-field"
              v-model="location"
            />
          </div>
          <div class="description">
            <input
              type="text"
              placeholder="Description"
              class="form-field"
              v-model="description"
            />
          </div>
          <div class="time">
            <p class="date">
              {{ postDate }}
            </p>
          </div>
          <!-- <button :disabled="!isFormValid" type="submit">Post</button> -->
        </form>
      </div>
      <div v-show="isPreviewValid" class="preview">
        <div class="card">
          <div class="card-image" v-show="isPicValid">
            <img :src="pickImage || imageUrl" alt="" />
          </div>
          <div class="card-noimage" v-show="!isPicValid">
            <h5>Add an Image</h5>
          </div>
          <div class="card-container">
            <h4 class="card-title" v-show="istitle">Title</h4>
            <h4 class="card-title">{{ title }}</h4>
            <p class="card-author">{{ userName }}</p>
          </div>
        </div>
      </div>
    </div>
    <RouterLink to="/account">
      <div class="back">
        <p>&lt;--</p>
        <p>Back</p>
      </div>
    </RouterLink>
    <button
      class="post"
      :disabled="!isFormValid"
      type="submit"
      @click="onCreatePost"
    >
      Post
    </button>
  </div>
</template>

<script>
// import Card from "../components/Card.vue"

export default {
  component: {
    // Card
  },
  data() {
    return {
      title: "",
      location: "",
      imageUrl: "",
      description: "",
      postDate: this.reformatingDate(),
      notClicked: true,
      imageFile: null,
      pickImage: "",
    };
  },
  computed: {
    userName() {
      return this.$store.state.user.displayName;
    },
    isPicValid() {
      return this.imageUrl !== "" || this.pickImage !== "";
    },
    isPreviewValid() {
      return this.title !== "" || this.imageUrl !== "" || this.pickImage !== "";
    },
    istitle() {
      return this.title === "";
    },
    isFormValid() {
      return (
        this.title !== "" &&
        this.description !== "" &&
        this.location !== "" &&
        (this.imageUrl !== "" || this.pickImage !== "")
      );
    },
    userName() {
      return this.$store.state.user.displayName;
    },
  },
  methods: {
    onCreatePost() {
      if (!this.isFormValid) {
        return;
      }
      if (!this.isPicValid) {
        return;
      }
      if (!this.isPreviewValid) {
        return;
      }
      console.log(this.userName);
      const postData = {
        title: this.title,
        location: this.location,
        imageUrl: this.imageUrl,
        description: this.description,
        postDate: this.postDate,
        author: this.userName,
        image: this.pickImage,
        imageFile: this.imageFile,
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
        // hour: "2-digit",
        // minute: "2-digit",
      });
    },
    onFileup() {
      this.$refs.fileInput.click();
    },
    onFilepick(event) {
      const files = event.target.files;
      let filename = files[0].name;
      if (filename.lastIndexOf(".") <= 0) {
        return alert("Please add a valid file!");
      }
      const fileReader = new FileReader();
      fileReader.addEventListener("load", () => {
        this.pickImage = fileReader.result;
      });
      fileReader.readAsDataURL(files[0]);
      this.imageFile = files[0];

      this.imageUrl = "";
    },
    isTexton() {
      this.pickImage = "";
    },
    isUpfile() {
      if (this.pickImage !== "") {
        this.imageUrl = "";
      }
    },
  },

  setup() {},
  /*  async created() {
    const response = await fetch(
      "https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places&callback=initAutocomplete"
    );
    const { data: location } = await response.json();
    this.location = location;
    let autocomplete;
    function initAutocomplete() {
      autocomplete = new google.maps.places.Autocomplete(
        document.getElementById("autocomplete"),
        {
          types: ["establishments"],
          fields: ["place_id", "geometry", "name"],
        }
      );
      // autocomplete.addListener('place_changed', onPlaceChanged)
    }

    // function onPlaceChanged() {
    //   const place = autocomplete.getPlace();

    //   if (!place.geometry) {
    //     document.getElementById('autocomplete').placeholder = 'Location'
    //   } else {
    //     document.getElementById('details').innerHTML = place.name
    //   }
    // }
  }, */
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100vh;
}

.content {
  display: flex;
  justify-content: center;
  align-items: center;
}
.create {
  position: relative;
  width: auto;
  height: auto;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

h3 {
  color: #151515;
  text-align: center;
  padding: 1rem;
  z-index: 5;
}

.title,
.location,
.image {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.inputfile {
  display: none;
}

.title {
  padding-bottom: 2rem;
}
.location {
  padding-bottom: 2rem;
}
.image {
  padding-bottom: 2rem;
}
.description {
  padding: 0;
  padding-bottom: 1.5rem;
}

input {
  display: block;
  width: 20rem;
  height: 3rem;
  font-size: 1rem;
  padding: 0.7rem;
  background: none;
  border: none;
  outline: none;
  color: #151515;
  border-bottom: 0.1rem solid #242424;
  font-family: "Gloria Hallelujah", cursive;
}

::placeholder {
  color: #242424;
}

.date {
  color: #242424;
  text-align: center;
  font-size: 0.8rem;
  /* text-transform: uppercase; */
  padding-bottom: 0.5rem;
}

button {
  background-color: #151515;
  color: #fff;
  width: 20rem;
  height: 2.5rem;
  margin: 0.8rem;
  border: none;
  border-radius: 2rem;
  font-size: 0.9rem;
  /* text-transform: uppercase; */
  transition: background-color 0.3s ease 0s;
  font-family: "Gloria Hallelujah", cursive;
  cursor: pointer;
}

button:hover {
  background-color: rgba(35, 35, 35, 1);
}

button:disabled {
  background-color: #404040;
  cursor: default;
  opacity: 1;
}

.post {
  margin-bottom: 3rem;
}
.back {
  position: fixed;
  bottom: 2rem;
  right: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.back p {
  color: #151515;
  transition: color 0.2s ease-in-out;
  padding: 0.3rem;
}

.back p:hover {
  color: rgba(40, 40, 40, 1);
}


.preview{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 2rem;
  margin-left: 2rem;
}

.card {
  background-color: #f5f4f4;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: auto;
  height: 30rem;
  aspect-ratio: 4/5;
  grid-column-start: auto;
  grid-row-start: auto;
  position: relative;
  padding: 1rem;
}

.card-image {
  width: 100%;
  height: 100%;
  aspect-ratio: 1/1;
  overflow: hidden;
  background-color: #151515;
}

.card-noimage {
  width: 100%;
  height: 100%;
  aspect-ratio: 1/1;
  overflow: hidden;
  background-color: #151515;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-noimage h5 {
  color: #f5f4f4;
}

.card-image > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50%, 50%;
  overflow: hidden;
  opacity: 0.8;
  transition: opacity 0.2s ease-in-out;
}

.card-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  padding: 0.5rem;
}
.card-title,
.card-author {
  overflow: hidden;
  padding-bottom: 0.2rem;
}

@media only screen and (max-width: 700px) {
  .post {
    margin-bottom: 6rem;
  }
  .back {
    position: absolute;
    top: 1rem;
    right: 2rem;
    bottom: auto;
  }
}
@media only screen and (max-width: 800px) {
  .container {
    flex-direction: column;
    height: 100%;
    overflow-y: scroll;
  }

  .content {
    flex-direction: column;
  }
  .create {
    margin-top: 2rem;
  }
  .preview {
    margin-top: 0.5rem;
    margin-left: 0;
    margin-bottom: 1.2rem;
  }

  /* .back {
    right: 2rem;
    bottom: 1rem;
  } */
}
@media only screen and (max-width: 1000px) {
}
@media only screen and (max-width: 1200px) {
}
</style>
