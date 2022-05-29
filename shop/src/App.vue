<template>
  <div class="home">
    <div class="nav">
      <Nav>
        <template v-slot:logo>
          <router-link to="/" class="logo">
            <div class="logo-container">
              <!-- <img src="./components/icons/home.svg" alt="Home" /> -->
              <p>Home</p>
            </div>
          </router-link>
        </template>
        <template class="pages" v-slot:page>
          <span>
            <div class="fav">
              <RouterLink to="/favorites" class="page" @click="referSign">
                <p>Likes</p>
              </RouterLink>
            </div>
            <div class="acc">
              <RouterLink to="/account" class="page" @click="referSign">
                <!-- <img src="./components/icons/user.svg" alt="Account" /> -->
                <p>User</p>
              </RouterLink>
            </div>
          </span>
          <div class="in">
            <RouterLink to="/login" class="page" v-if="!user">
              <!-- <img
                src="./components/icons/login.svg"
                alt="Login"
                class="login"
              /> -->
              <p>Login</p>
            </RouterLink>
          </div>
          <span class="page" v-if="user" @click="handleClick">
            <!-- <img
              src="./components/icons/logout.svg"
              alt="Logout"
              class="logout"
            /> -->
            <p>Logout</p>
          </span>
        </template>
      </Nav>
    </div>
    <div class="container">
      <!-- <div class="form-container">
        <Modal>
          <template v-slot:form> <logIn/> </template>
          <template v-slot:form2> <signUp/> </template>
        </Modal>
      </div> -->
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script>
import { RouterView, RouterLink } from "vue-router";
import Nav from "./components/Nav.vue";
import Button from "./components/Button.vue";
import { useStore } from "vuex";
import { computed } from "vue";
import { useRouter } from "vue-router";

export default {
  components: {
    Nav,
    Button,
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const handleClick = () => {
      store.dispatch("logout");
      router.push("/");
    };

    return {
      handleClick,
      user: computed(() => store.state.user),
      authIsReady: computed(() => store.state.authIsReady),
    };
  },
  data() {
    return {
      router: useRouter(),
    };
  },
  methods: {
    referSign() {
      if (!this.user) {
        this.router.push("/login");
      }
    },
  },
};
</script>

<style>
.logo {
  color: #151515;
  transition: opacity 0.2s ease-in-out;
}
/* .logo:hover {
  opacity: 0.7;
} */

.pages {
  display: flex;
  align-items: center;
  justify-content: center;
}
.pages span {
  display: flex;
  align-items: center;
  justify-content: center;
}

.page {
  margin-left: 2.5rem;
  width: 5rem;
  height: 3rem;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: color 0.2s ease-in-out;
  cursor: pointer;
  z-index: 7;
}
.page:hover {
  text-decoration: underline;
  color: rgba(40, 40, 40, 1);
}

.logo-container {
  width: 5rem;
  height: 3rem;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: color 0.2s ease-in-out;
}
.logo-container:hover {
  text-decoration: underline;
  color: rgba(40, 40, 40, 1);
}

a {
  text-decoration: none;
  color: #151515;
}

/* @media only screen and (max-width: 800px) {
  .page {
    margin-left: 1rem;
  }
} */
</style>
