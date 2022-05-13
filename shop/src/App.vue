<template>
  <div id="home">
    <div class="nav">
      <Nav>
        <template v-slot:logo>
          <router-link to="/" class="logo">HOME</router-link>
        </template>
        <template v-slot:page>
          <RouterLink to="/about" class="page">ABOUT</RouterLink>
          <RouterLink to="/places" class="page">PLACE</RouterLink>
          <RouterLink to="/favorite" class="page">FAVORTIVE</RouterLink>
          <Router-Link to="/addpost" class="page" v-if="user">
            ADD POST</Router-Link
          >
        </template>
      </Nav>
    </div>
    <div class="container">
      <div class="form-container">
        <Modal>
          <template v-slot:form> <logIn /> </template>
          <template v-slot:form2> <signUp /></template>
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
import signUp from "./components/Signup.vue";
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    return {
      user: computed(() => store.state.user),
      authIsReady: computed(() => store.state.authIsReady),
    };
  },
  components: {
    Nav,
    Button,
    Modal,
    logIn,
    signUp,
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
  color: var(--dark-white);
  text-decoration: none;
}
.page {
  display: inline;
  padding: 0.5rem;
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
