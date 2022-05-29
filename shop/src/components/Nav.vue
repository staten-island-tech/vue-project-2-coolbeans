<template>
  <div :class="{ sticky: isActive }" class="views">
    <!-- <div class="bg"></div> -->
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
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  components: {},
  setup() {
    const store = useStore();

    return {
      user: computed(() => store.state.user),
    };
  },
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
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 4rem;
  z-index: 4;
  overflow-y: hidden;
  /* background-color: rgba(245, 244, 244, 0.85); */
  /* background-color: #f5f4f4; */
}

/* .bg {
  position:absolute;
  top: 2rem;
  left: 0;
  background-image: url(./wave.svg);
  aspect-ratio: 960/200;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
} */

@media only screen and (max-width: 700px) {
  .views {
    position: fixed;
    top: auto;
    left: 0;
    bottom: 0;
    height: 4rem;
    background-color: #f5f4f4;
    justify-content: center;
    padding: 1rem 3rem;
  }
}
</style>
