<template>
  <div id="home">
    <div class="nav">
      <Nav>
        <template v-slot:logo>
          <router-link to="/" class="logo">HOME</router-link>
        </template>
        <template v-slot:page>
          <RouterLink to="/about" class="page">ABOUT</RouterLink></template
        >
        <template v-slot:clicky>
          <Button class="signin" @button-click="openModal" type="button"
            >LOGIN
          </Button></template
        >
      </Nav>
    </div>
    <div class="container">
      <div class="form-container">
        <Modal>
          <template v-slot:form> <logIn /> </template>
        </Modal>
      </div>
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
export default {
  components: {
    Nav,
    Button,
    Modal,
    logIn,
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
  },
};
</script>

<style>
.logo {
  color: var(--dark-white);
  text-decoration: none;
}
.page {
  display: inline;
  color: var(--dark-white);
  text-decoration: none;
}
/* nav css */

.signin {
  font-size: 2rem;
  border-radius: 5rem;
}
/* modal css*/
</style>
