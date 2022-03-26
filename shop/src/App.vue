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
            >SIGN IN
          </Button></template
        >
      </Nav>
    </div>
    <div class="container">
      <div class="form-container">
        <modal>
          <template v-slot:header>
            <h3>SIGN IN</h3>
          </template>

          <template v-slot:modal-text-body>
            <p>
              gbpernobnroibnweoirnboiwnrrbnmlkersnbolknerbnerbnoenroibneoirnboenrbonerobnernblkernlkbn
            </p>
          </template>

          <template v-slot:footer>
            <div></div>
          </template>
        </modal>
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
export default {
  components: {
    Nav,
    Button,
    Modal,
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
}
/* modal css*/
</style>
