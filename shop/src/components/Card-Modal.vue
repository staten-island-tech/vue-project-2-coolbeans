<template>
  <transition name="fade">
    <div class="modal" v-show="wantAdd">
      <div class="modal-backdrop" />
      <div class="modal-dialog">
        <div class="container">
          <Close class="close" @click="closeModal2" />
          <slot name="insert-image" />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import Button from "./Button.vue";
import Close from "./Close.vue";
export default {
  components: {
    Button,
    Close,
  },
  data() {
    return {};
  },
  methods: {
    closeModal2: function () {
      this.$store.dispatch("closeModal2");
    },
  },
  computed: {
    wantAdd() {
      return this.$store.state.wantAdd;
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
}

.close {
  position: relative;
  top: 4rem;
  right: 0;
  bottom: 0;
  left: 97.5rem;
  cursor: pointer;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
