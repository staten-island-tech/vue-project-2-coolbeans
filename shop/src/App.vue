<script>
import { RouterView } from "vue-router";
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
    return {
      isHidden: false,
    };
  },
  methods: {
    dropForm: function () {
      if (this.isHidden === false) {
        this.isHidden = true;
      } else if (this.isHidden === true) {
        this.isHidden = false;
      }
    },
  },
};
</script>

<template>
  <div id="home">
    <div class="nav">
      <Nav>
        <Button class="signin" @button-click="dropForm">SIGN IN</Button>
      </Nav>
    </div>
    <div class="container">
      <div class="form-container">
        <Modal v-show="this.isHidden"></Modal>
      </div>
      <RouterView></RouterView>
    </div>
  </div>
</template>

<style>
@import "@/assets/base.css";

.signin {
  font-size: 2rem;
}
.form-container {
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999999;
}
</style>
