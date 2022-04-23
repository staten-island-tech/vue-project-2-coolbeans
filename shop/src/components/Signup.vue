<template>
  <div class="signup">
      <form @submit.prevent="handleSubmit">
        <h3>Join us,</h3>
        <div class="name">
          <label for="name">Name</label>
          <input
            type="name"
            name="name"
            v-model="name"
            required
          />
        </div>
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
          <Button>Sign Up</Button>
          <span></span><p>or</p><span></span>
          <router-link to="/login"><Button>Sign In</Button></router-link>
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
        await store.dispatch("signup", {
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

.signup {
  width: 40rem;
  height: 45rem;
  padding: 2rem;
  border-radius: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
}

h3 {
  font-family: 'Open Sans', sans-serif;
  margin: auto;
  padding: 1.5rem;
}

.name,
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
  font-size: 1.2rem;
  font-family: 'Open Sans', sans-serif;
  text-transform: uppercase;
}

input {
  display: block;
  width: 100%;
  height: 4rem;
  font-size: 1.5rem;
  padding: 1rem;
  background: none;
  border: none;
  outline: none;
  color: #fff;
  font-family: 'Open Sans', sans-serif;
  border-bottom: 0.1rem solid rgba(255,255,255,0.4);
}

p {
  text-align: center;
  font-family: 'Open Sans', sans-serif;
  font-size: 1.2rem;
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
