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
    <div class="button">
      <Button
        class="signin"
        type="button"
        v-if="whatButton()"
        @button-click="openModal"
        >LOGIN
      </Button>
      <Button class="signin" type="button" v-else @button-click="handleClick"
        >LOGOUT
      </Button>
    </div>
    <div class="user-name" v-if="user">{{ user.email }}</div>
  </div>
</template>

<script>
import Button from "./Button.vue";
import Form from "./Modal.vue";
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
    return { handleClick, user: computed(() => store.state.user) };
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
  display: flex;
  justify-content: flex-end;
  padding: 1rem 1%;
  align-items: baseline;
  background-color: var(--gray-black);
}
.logo {
  font-size: 6rem;
  padding: 1rem;
  margin-right: auto;
  padding-top: 0;
}

.pages {
  font-size: 3rem;
  padding: 1rem;
  margin: auto;
  margin-right: 0;
  list-style-type: none;
}

.user-name {
  color: white;
  font-size: 2rem;
  margin-left: 1rem;
}
</style>
