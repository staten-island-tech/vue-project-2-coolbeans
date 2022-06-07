<template>
  <div class="signup">
    <form @submit.prevent="handleSubmit">
      <h3>Join us,</h3>
      <div class="name">
        <label for="name">Name</label>
        <div class="name-field">
          <div class="first-name">
            <!-- <label v-show="firstName" for="first-name">First Name</label> -->
            <input
              id="name"
              type="first-name"
              name="first-name"
              v-model="firstName"
              placeholder="first"
              required
            />
          </div>
          <div class="last-name">
            <!-- <label for="last-name">Last Name</label> -->
            <input
              id="name"
              type="last-name"
              name="last-name"
              v-model="lastName"
              placeholder="last"
              required
            />
          </div>
        </div>
      </div>
      <div class="email">
        <label for="email">Email</label>
        <input id="email" type="email" name="email" v-model="email" placeholder="wow email" required />
      </div>
      <div class="pass">
        <label for="password">Password</label>
        <input id="password" type="password" name="password" v-model="password" placeholder="a good password" required />
      </div>
      <div class="error" v-if="error">{{ error }}</div>
      <div class="btn">
        <Button>Sign Up</Button>
        <span></span>
        <p>or</p>
        <span></span>
        <router-link to="/login"><Button>Sign In</Button></router-link>
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
  data() {
    return {
      // email: "",
      // password: "",
      // firstName: "",
      // lastName: "",
    }
  },
  setup() {
    const email = ref("");
    const password = ref("");
    const firstName = ref("");
    const lastName = ref("");

    // cap firdt letter of name

    const error = ref(null);
    const store = useStore();
    const router = useRouter();

    const handleSubmit = async () => {
      try {
        await store.dispatch("signup", {
          email: email.value,
          password: password.value,
          firstName: firstName.value,
          lastName: lastName.value,
        });

        router.push("/account");
        store.dispatch("closeModal");
      } catch (err) {
        error.value = err.message;
        console.log(error);
      }
    };
    return {
      handleSubmit,
      email,
      password,
      firstName,
      lastName,
      error,
    };
  },
  computed: {
    // firstName() {
    //   return this.firstName !== ""
    // },
  },
  components: {
    Button,
  },
  methods: {
    // handleSubmit() {
    //   if (!this.firstName) {
    //     return;
    //   }
    // }
  },
  
};
</script>

<style scoped>
.signup {
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

.name-field {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.first-name  {
  width: 49%;
  display: flex;
  justify-content: start;
  align-items: center;
}
.last-name  {
  width: 49%;
  display: flex;
  justify-content: start;
  align-items: center;
}

.first-name input {
  z-index: 2;
}
.last-name input {
  z-index: 2;
}

.first-name label {
  position: absolute;
  font-family: 'Gloria Hallelujah', cursive;
  padding: 0.7rem;
  /* transform: translateX(-1); */
}
.last-name label {
  position: absolute;
  font-family: 'Gloria Hallelujah', cursive;
  padding: 0.7rem;
}

p {
  color: #242424;
  text-align: center;
  font-size: 0.8rem;
  text-transform: uppercase;
}

.error {
  position: absolute;
  padding-left: 1.5rem;
  color: red;
  font-family: 'Gloria Hallelujah', cursive;
}
</style>
