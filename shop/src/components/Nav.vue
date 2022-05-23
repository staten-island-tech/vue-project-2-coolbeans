<template>
  <div :class="{ sticky: isActive }" class="views">
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

    <div class="user-name" v-if="user">{{ user.email }}</div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  name: "NavBar",
  components: {},
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },

  methods: {
    handleScroll() {
      if (window.scrollY > 0) {
        this.isActive = true;
      } else {
        this.isActive = false;
      }
    },
    isLoad() {
      this.isActive = true;
    },
  },
  data() {
    return {
      isActive: false,
    };
  },
};
</script>

<style scoped>
.views {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 5rem;
  z-index: 4;
  background-color: rgba(245,244,244, 0.85);
  /* background: linear-gradient(rgba(245,244,244, 0.7), rgba(0, 0, 0, 0)); */
}

.sticky {
  border-bottom: 0.08rem solid rgba(221,220,220, 0.9);
}

.plus {
  margin-left: 1rem;
  height: 2rem;
}
</style>
