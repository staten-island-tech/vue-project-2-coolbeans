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
.signup {
  position: relative;
  width: auto;
  height: auto;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #151515;
  overflow-y: none;
}

h3 {
  text-align: center;
  padding: 0.5rem;
}
.name,
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

label {
  color: #a1a1a1;
  font-size: 0.8rem;
  text-transform: uppercase;
    font-family: 'Kumbh Sans', sans-serif;

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
  border-bottom: 0.1rem solid #a1a1a1;
    font-family: 'Kumbh Sans', sans-serif;

}

p {
  color: #a1a1a1;
  text-align: center;
  font-size: 0.8rem;
  text-transform: uppercase;
}


.error {
  position: absolute;
  padding-left: 1.5rem;
  color: red;
    font-family: 'Kumbh Sans', sans-serif;

}
</style>
