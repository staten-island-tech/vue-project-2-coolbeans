<template>
  <div class="home">
    <div class="nav">
      <Nav>
        <template v-slot:logo>
          <router-link to="/" class="logo">
            <img src="./components/icons/home.svg" alt="Home">
          </router-link>
        </template>
        <template v-slot:page>
          <!-- <router-link to="/" class="logo"><HomeBtn/></router-link> -->
          <RouterLink to="/favorites" class="page">
            <img src="./components/icons/love-b.svg" alt="Favorites">
          </RouterLink>
          <RouterLink to="/account" class="page">
            <img src="./components/icons/user.svg" alt="Account">
          </RouterLink>
          <RouterLink to="/login" class="page">
            <img src="./components/icons/login.svg" alt="Login">
          </RouterLink>
          </template>
        </Nav>
    </div>
    <div class="container">
      <!-- <div class="form-container">
        <Modal>
          <template v-slot:form> <logIn/> </template>
          <template v-slot:form2> <signUp/> </template>
        </Modal>
      </div> -->
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script>
import { RouterView, RouterLink } from "vue-router";
import Nav from "./components/Nav.vue";
import Button from "./components/Button.vue";

export default {
  components: {
    Nav,
    Button,
  },

  data() {
    return {};
  },
  methods: {
    openModal: function () {
      this.$store.dispatch("openModal");
    },
    closeModal: function () {
      this.$store.dispatch("closeModal");
    },
    openSign: function () {
      this.$store.commit("openSign");
    },
  },
};
</script>

<style>
.logo {
  color: #151515;
  transition: opacity 0.2s ease-in-out;
}
.logo:hover{
  opacity: 0.7;
}

.page {
  margin-left: 5rem;
  color: #151515;
  transition: opacity 0.2s ease-in-out;
}
.page:hover {
  opacity: 0.7;
}
/* nav css */

/* modal css*/
</style>
