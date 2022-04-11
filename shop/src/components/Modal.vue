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
            <div class="typing">
              <div class="animation-box">
                <h4 class="typewriter">LET'S GO ON AN</h4>
              </div>
              <div class="animation-box">
                <h4 class="typewriter2" id="lol">ADVENTURE</h4>
              </div>

              <div class="askthem">
                <h5 class="bringthem" v-if="this.signButton">
                  If you're new, then please join us
                </h5>
                <h5 class="bringthem" v-else>Welcome Back</h5>
              </div>
              <Button
                class="changeform"
                @button-click="signOpen"
                v-if="this.signButton"
                >Sign Up</Button
              >
              <Button class="changeform" @button-click="closeSign" v-else
                >Login</Button
              >
            </div>
          </div>
          <div class="form-container">
            <div class="modal-form">
              <div class="from1" v-if="isSignup"><slot name="form2" /></div>
              <div class="from1" v-else>
                <slot name="form" />
              </div>
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
    return {
      signButton: true,
    };
  },

  methods: {
    closeModal: function () {
      this.$store.dispatch("closeModal");
    },
    signOpen: function () {
      this.$store.dispatch("signOpen");
      if (this.isSignup === false) {
        this.signButton = true;
      } else {
        this.signButton = false;
      }
    },
    closeSign: function () {
      this.$store.dispatch("closeSign");
      if (this.isSignup === false) {
        this.signButton = true;
      } else {
        this.signButton = false;
      }
    },
  },
  computed: {
    isHidden() {
      return this.$store.state.isHidden;
    },
    isSignup() {
      return this.$store.state.isSignup;
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
  animation: bringup 1s;
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
  position: relative;
  z-index: 3;
}

.side-image {
  width: 60rem;
  height: 60rem;
}
.container {
  display: flex;
  flex-direction: row;
}

.typing {
  position: relative;
  z-index: 3;
  bottom: 40rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.animation-box {
  width: fit-content;
}

.typewriter {
  font-size: 7rem;
  position: relative;
  z-index: 4;
  color: #ffffff;
  /* animation */
  overflow: hidden;
  border-right: 0.15em solid orange;
  letter-spacing: none;
  white-space: nowrap;
  margin: 0 auto;
  animation: typing 6s steps(40, end) forwards,
    blink-caret 0.65s step-end infinite;
}

@keyframes typing {
  from {
    width: 0;
  }
  50% {
    width: 100%;
  }
  100% {
    border-right: none;
  }
}
@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: orange;
  }
}

.typewriter2 {
  color: #fff;
  overflow: hidden;
  opacity: 0;
  border-right: 0.15em solid orange;
  white-space: nowrap;
  margin: 0 auto;
  letter-spacing: 0.05em;
  animation: typing2 3.5s steps(40, end), blink-caret 0.5s step-end infinite;
}

@keyframes typing2 {
  from {
    width: 0;
  }
  100% {
    width: 100%;
  }
}

@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: orange;
  }
}

#lol {
  opacity: 0;
  animation: fadein 12s forward;
}

@keyframes fadein {
  from {
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  to {
    opacity: 1;
  }
}

.askthem {
  opacity: 0;
  animation: bringup 2s forwards;
}

@keyframes bringup {
  from {
    transform: translate3d(0, 40px, 0);
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

.bringthem {
  color: #ffffff;
  padding-bottom: 1rem;
}

.changeform {
  width: 10rem;

  border-radius: 2rem;
}

.form1 {
  position: relative;
  z-index: 4;
}
</style>
