<template>
  <transition name="fade">
    <div class="modal" v-show="isHidden">
      <div class="modal-backdrop" @click="closeModal" />
      <div class="modal-dialog">
        <div class="container">
          <div class="side-image">
            <img src="../assets/img/woods.jpg" alt="wood" class="image" />
          </div>
          <div class="form-container">
            <div class="modal-header">
              <slot name="header" />
              <iconClose class="modal__close" @click="closeModal"></iconClose>
            </div>

            <div class="modal-body">
              <slot name="modal-text-body" />
            </div>

            <div class="modal-footer">
              <slot name="footer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import iconClose from "./icons/IconClose.vue";
import Button from "./Button.vue";
export default {
  components: {
    iconClose,
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
  width: 75rem;
  margin: 5rem auto;
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  z-index: 2;
  @media screen and (max-width: 992px) {
    width: 90%;
  }
}

.modal-close {
  width: 3rem;
  height: 3rem;
}

.modal-header {
  padding: 2rem 2rem 1rem;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}

.modal-body {
  padding: 1rem 2rem 1rem;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}
.modal-footer {
  padding: 1rem 2rem 2rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.modal__close {
  width: 1rem;
  cursor: pointer;
}

.image {
  width: 100%;
  height: 100%;
  object-position: 50% 50%;
  object-fit: cover;
  border-radius: 1rem 0 0 1rem;
  display: block;
}

.side-image {
  width: 35rem;
  height: 60rem;
}
.container {
  display: flex;
  flex-direction: row;
}
</style>
