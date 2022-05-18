<template>
  <div class="home">
    <div class="nav">
      <Nav>
        <template v-slot:logo>
          <router-link to="/home" class="logo"><HomeBtn/></router-link>
        </template>
        <template v-slot:page>
          <RouterLink to="/favorites" class="page"><FavBtn/></RouterLink>
          <RouterLink to="/account" class="page"><UserBtn/></RouterLink>
          <RouterLink to="/login" class="page"><LoginBtn/></RouterLink>
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
import Modal from "./components/Modal.vue";
import logIn from "./components/Login.vue";
import signUp from "./components/Signup.vue";
import HomeBtn from "./components/icons/HomeBtn.vue"
import UserBtn from "./components/icons/UserBtn.vue"
import LoginBtn from "./components/icons/LoginBtn.vue"
import FavBtn from "./components/icons/FavBtn.vue"

export default {
  components: {
    Nav,
    Button,
    Modal,
    logIn,
    signUp,
    HomeBtn,
    UserBtn,
    LoginBtn,
    FavBtn
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
}
.page {
  margin-left: 5rem;
  color: #151515;
}
/* nav css */

/* modal css*/
</style>
