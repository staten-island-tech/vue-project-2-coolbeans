import { createStore } from "vuex";

//firebase import
import { auth } from "../firebase/config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const store = createStore({
  state: {
    user: null,
    isHidden: false,
    isSignup: false,
    authIsReady: false,
    place: [
      {
        name: "Reykjavík",
        img: "https://img1.10bestmedia.com/Images/Photos/384645/Over-view_54_990x660.jpg",
        description:
          "A very cool wonderfyl place where people can have a lot of fun. You can.....",
      },
      {
        name: "Akureyri",
        img: "https://www.icelandreview.com/wp-content/uploads/2020/03/akureyri_vetur_droni004.jpg",
        description:
          "A very cool wonderfyl place where people can have a lot of fun. You can.....",
      },
      {
        name: "Vík í Mýrdal",
        img: "https://adventures.com/media/10846/s-iceland-town-summer-vik-i-myrdal.jpg",
        description:
          "A very cool wonderfyl place where people can have a lot of fun. You can.....",
      },
    ],
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
      console.log("user state change:", state.user);
    },
    setAuthIsReady(state, payload) {
      state.authIsReady = payload;
    },
    openModal(state) {
      state.isHidden = true;
    },
    closeModal(state) {
      state.isHidden = false;
    },
    signOpen(state) {
      state.isSignup = true;
    },
    closeSign(state) {
      state.isSignup = false;
    },
  },
  actions: {
    async signup(context, { email, password }) {
      console.log("signup action");

      // async code
      const res = await createUserWithEmailAndPassword(auth, email, password);
      if (res) {
        context.commit("setUser", res.user);
      } else {
        throw new Error("could not complete sign up");
      }
    },
    async login(context, { email, password }) {
      console.log("login action");

      // async code
      const res = await signInWithEmailAndPassword(auth, email, password);
      if (res) {
        context.commit("setUser", res.user);
      } else {
        throw new Error("could not complete login");
      }
    },
    async logout(context) {
      console.log("logout action");

      // async code
      await signOut(auth);
      context.commit("setUser", null);
    },
    openModal({ commit }) {
      commit("openModal");
    },
    closeModal({ commit }) {
      commit("closeModal");
    },
    signOpen({ commit }) {
      commit("signOpen");
    },
    closeSign({ commit }) {
      commit("closeSign");
    },
  },
  getters: {},
  modules: {},
});
const unsub = onAuthStateChanged(auth, (user) => {
  store.commit("setAuthIsReady", true);
  store.commit("setUser", user);
  unsub();
});
export default store;
