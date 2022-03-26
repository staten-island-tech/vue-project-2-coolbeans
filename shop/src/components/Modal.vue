<template>
  <transition name="fade">
    <div class="modal" v-show="isHidden">
      <div class="modal-backdrop" @click="closeModal" />
      <div class="modal-dialog">
        <div class="container">
          <div class="side-image">
            <img
              src="../assets/img/woods.jpg"
              alt="wood"
              class="nature-image"
            />
            <h4 class="typewriter">LET'S GO ON AN ADVENTURE</h4>
          </div>
          <div class="form-container">
            <div class="modal-form">
              <slot name="form" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import Button from "./Button.vue";

export default {
  components: {
    Button,
  },
  data() {
    return {};
  },

  methods: {
    closeModal: function () {
      this.$store.dispatch("closeModal");
    },
  },
  computed: {
    isHidden() {
      return this.$store.state.isHidden;
    },
  },
};
</script>

<style scoped>
.modal {
  overflow-x: hidden;
  overflow-y: auto;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9;
}

.modal-backdrop {
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
}

.modal-dialog {
  background-color: #ffffff;
  position: relative;
  width: 100rem;
  margin: 5rem auto;
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  z-index: 2;
  box-shadow: 5px 6px 10px 3px rgba(0, 0, 0, 0.79);
  @media screen and (max-width: 992px) {
    width: 90%;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.nature-image {
  width: 100%;
  height: 100%;
  object-position: 50% 50%;
  object-fit: cover;
  border-radius: 1rem 0 0 1rem;
  display: block;
}

.side-image {
  width: 60rem;
  height: 60rem;
}
.container {
  display: flex;
  flex-direction: row;
}
.typewriter {
  position: absolute;
  bottom: 30rem;
  left: 15rem;
  color: white;
  margin: 0;
  width: 10rem;
}
</style>
