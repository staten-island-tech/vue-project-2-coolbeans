<template>
  <div class="login">
    <form @submit.prevent="handleSubmit">
      <h3>Welcome back,</h3>
      <div class="email">
        <label for="email">Email</label>
        <input id="email" type="email" name="email" v-model="email" placeholder="your email" required />
      </div>
      <div class="pass">
        <label for="password">Password</label>
        <input id="password" type="password" name="password" v-model="password" placeholder="cool password bro" required />
      </div>
      <div class="error" v-if="error">{{ error }}</div>
      <div class="btn">
        <Button>Sign In</Button>
        <span></span>
        <p>or</p>
        <span></span>
        <router-link to="/signup"><Button>Sign Up</Button></router-link>
      </div>
    </form>
  </div>
</template>

<script>
import Button from "./Button.vue";
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
        router.push("/account");
        store.dispatch("closeModal");
      } catch (err) {
        error.value = err.message;
      }
    };
    return { handleSubmit, email, password, error };
  },
  components: {
    Button,
  },
  methods: {
    closeModal: function () {
      this.$store.dispatch("closeModal");
    },
  },
};
</script>

<style scoped>
.login {
  position: relative;
  width: 22rem;
  height: auto;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

h3 {
  color: #151515;
  text-align: center;
  padding: 1rem;
}

.email,
.pass {
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.pass {
  padding-bottom: 1rem;
}

.btn {
  padding-top: 1rem;
}

input {
  display: block;
  width: 100%;
  height: 3rem;
  font-size: 1rem;
  padding: 0.7rem;
  background: none;
  border: none;
  outline: none;
  color: #151515;
  border-bottom: 0.1rem solid #242424;
  font-family: 'Gloria Hallelujah', cursive;
}

::placeholder {
  color: #242424;
  opacity: 0.9;
}

p {
  color: #242424;
  text-align: center;
  font-size: 0.8rem;
  text-transform: uppercase;
}

.error {
  position: absolute;
  padding-left: 1rem;
  color: red;
  font-size: 0.8rem;
  font-family: 'Gloria Hallelujah', cursive;
}
</style>
