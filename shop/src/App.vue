<template>
  <div class="home">
    <div class="nav">
      <Nav>
        <template v-slot:logo>
          <router-link to="/" class="logo">
            <img src="./components/icons/home.svg" alt="Home" />
          </router-link>
        </template>
        <template v-slot:page>
          <!-- <router-link to="/" class="logo"><HomeBtn/></router-link> -->
          <span>
            <RouterLink to="/favorites" class="page" @click="referSign">
              <img src="./components/icons/love-b.svg" alt="Favorites" />
            </RouterLink>
            <RouterLink to="/account" class="page" @click="referSign">
              <img src="./components/icons/user.svg" alt="Account" />
            </RouterLink>
          </span>
          <RouterLink to="/login" class="page" v-if="!user">
            <img src="./components/icons/login.svg" alt="Login" class="login" />
          </RouterLink>
          <span class="page" v-if="user" @click="handleClick">
            <img
              src="./components/icons/logout.svg"
              alt="Logout"
              class="logout"
            />
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
.logo:hover {
  opacity: 0.7;
}

.page {
  margin-left: 5rem;
  color: #151515;
  transition: opacity 0.2s ease-in-out;
}
.page:hover {
  opacity: 0.7;
}

.logout {
  cursor: pointer;
}

/* nav css */

/* modal css*/
</style>
