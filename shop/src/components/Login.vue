<template>
    <div class="login">
      <form @submit.prevent="handleSubmit">
        <h3>Welcome back,</h3>
        <div class="email">
          <label for="email">Email</label>
          <input
            type="email"
            name="email"
            v-model="email"
            required
          />
        </div>
        <div class="pass">
          <label for="password">Password</label>
          <input
            type="password"
            name="password"
            v-model="password"
            required
          />
        </div>
        <div class="error" v-if="error">{{ error }}</div>
        <div class="btn">
          <Button>Sign In</Button>
          <span></span><p>or</p><span></span>
          <router-link to="/signup"><Button>Sign Up</Button></router-link>
          
        </div>
      </form>
    </div>
</template>

<script>
import Button from "./Button.vue";
import iconClose from "./icons/IconClose.vue";
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  setup() {
    const email = ref("");
    const password = ref("");
    const error = ref(null);

    const store = useStore();
    const router = useRouter();
    const handleSubmit = async () => {
      try {
        await store.dispatch("login", {
          email: email.value,
          password: password.value,
        });
        router.push("/");
        store.dispatch("closeModal");
      } catch (err) {
        error.value = err.message;
      }
    };
    return { handleSubmit, email, password, error };
  },
  components: {
    Button,
    iconClose,
  },
  methods: {
    closeModal: function () {
      this.$store.dispatch("closeModal");
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');

.login {
  width: 35rem;
  height: auto;
  /* padding: 2rem; */
  display: flex;
  align-items: center;
  justify-content: center;
  color: #151515;
  overflow-y: none;
}

h3 {
  text-align: center;
  padding: 1.5rem;
}

.email,
.pass {
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.pass {
  padding-bottom: 2.5rem;
}

.btn {
  padding-top: 1.5rem;
}

label {
  font-size: 1rem;
  font-family: 'Open Sans', sans-serif;
  text-transform: uppercase;
}

input {
  display: block;
  width: 100%;
  height: 3rem;
  font-size: 1rem;
  padding: 1rem;
  background: none;
  border: none;
  outline: none;
  color: #151515;
  font-family: 'Open Sans', sans-serif;
  border-bottom: 0.1rem solid rgba(0,0,0,0.7);
}

p {
  text-align: center;
  font-family: 'Open Sans', sans-serif;
  font-size: 1rem;
  text-transform: uppercase;
}

span {
  background-color: #fff;
  width: 15rem;
  height: 0.2rem;
}

.error {
  position: absolute;
  padding-left: 1.5rem;
  color: red;
}
</style>
