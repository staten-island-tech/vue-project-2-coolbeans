<template>
  <div class="container">
    <div class="create">
      <h3>Create a Post</h3>
      <form class="form" @submit.prevent="onCreatePost">
        <div class="title">
          <input
            type="text"
            placeholder="Title"
            class="form-field"
            v-model="title"
            required
          />
        </div>
        <div class="image">
          <!-- <label class="imagetext">Image</label> -->
          <input
            type="text"
            placeholder="Image URL"
            class="form-field"
            v-model="imageUrl"
            required
          />
          <img :disabled="!isPicVaild" :src="imageUrl" alt="" />
        </div>
        <div class="location">
          <!-- <label class="locationtext">Location</label> -->
          <input
            id="autocomplete"
            type="text"
            placeholder="Location (optional)"
            class="form-field"
            v-model="location"
            required
          />
        </div>
        <div class="description">
          <!-- <label class="descriptiontext">Description</label> -->
          <input
            type="text"
            placeholder="Add a description (optional)"
            class="form-field"
            v-model="description"
          />
        </div>
        <div class="time">
          <p>
            {{ postDate }}
          </p>
        </div>
        <button :disabled="!isFormVaild" type="submit">Create Post</button>
      </form>
      <div class="back"></div>
    </div>
  </div>
</template>

<script>
export default {
  component: {},
  data() {
    return {
      location: "",
      imageUrl: "",
      description: "",
      postDate: this.reformatingDate(),
    };
  },
  computed: {
    isPicVaild() {
      return this.imageUrl !== "";
    },
    isFormVaild() {
      return this.location !== "" && this.imageUrl !== "";
    },
  },
  methods: {
    onCreatePost() {
      if (!this.isFormVaild) {
        return;
      }
      if (!this.isPicVaild) {
        return;
      }
      const postData = {
        location: this.location,
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
        // hour: "2-digit",
        // minute: "2-digit",
      });
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
.create {
  position: relative;
  width: auto;
  height: auto;
  /* max-height: 80vh; */
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* overflow-y: scroll; */
}
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

h3 {
  color: #8a8a8a;
  text-align: center;
  padding: 1rem;
  z-index: 5;
}

.title,
.location,
.image,
.description {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.title {
  padding-bottom: 2rem;
}
.location {
  padding-bottom: 2rem;
}
.image {
  padding-bottom: 1rem;
}
.description {
  padding: 0;
  padding-bottom: 1.5rem;
}

label {
  color: #a1a1a1;
  font-size: 0.8rem;
  text-transform: uppercase;
  font-family: "Kumbh Sans", sans-serif;
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
  border-bottom: 0.1rem solid #a1a1a1;
  font-family: "Kumbh Sans", sans-serif;
}

p {
  color: #a1a1a1;
  text-align: center;
  font-size: 0.8rem;
  text-transform: uppercase;
  padding-bottom: 0.5rem;
}

img {
  display: block;
  padding-top: 1rem;
  object-fit: cover;
  max-height: 15rem;
  max-width: 18rem;
}

img:disabled {
  display: none;
}

button {
  background-color: #73a5c9;
  color: #fff;
  width: 20rem;
  height: 2.5rem;
  margin: 0.8rem;
  border: none;
  border-radius: 2rem;
  font-size: 0.9rem;
  text-transform: uppercase;
  transition: 0.3s ease 0s;
  font-family: "Kumbh Sans", sans-serif;
}

button:hover {
  opacity: 0.9;
  cursor: pointer;
}

button:disabled {
  background-color: #a1a1a1;
  cursor: default;
  opacity: 1;
}
</style>
