<template>
  <div class="views">
    <span class="logo">
      <slot name="logo" />
    </span>

    <nav>
      <ul class="links">
        <li class="pages">
          <slot name="page" />
        </li>
      </ul>
    </nav>

    <!-- <div class="button">
      <Button
        class="signin"
        type="button"
        v-if="!user"
        @button-click="openModal"
        >LOGIN
      </Button>
      <Button
        class="signin"
        type="button"
        v-if="user"
        @button-click="handleClick"
        >LOGOUT
      </Button>
    </div>
    <div class="user-name" v-if="user">{{ user.email }}</div> -->
  </div>
</template>

<script>
import Button from "../components/Button.vue";
import Form from "../components/Modal.vue";
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  components: {
    Button,
    Form,
  },
  setup() {
    const store = useStore();
    const handleClick = () => {
      store.dispatch("logout");
    };
    return {
      handleClick,
      user: computed(() => store.state.user),
      authIsReady: computed(() => store.state.authIsReady),
    };
  },
  data() {
    return {};
  },
  computed: {
    isNull() {
      return this.$store.state.user;
    },
  },

  methods: {
    whatButton: function () {
      if (this.isNull === null) {
        return true;
      } else {
        return false;
      }
    },
    openModal: function () {
      this.$store.dispatch("openModal");
    },
  },
};
</script>

<style scoped>
.views {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 5rem;
  z-index: 2;
}
</style>
