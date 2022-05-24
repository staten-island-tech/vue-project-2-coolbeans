import { createStore, storeKey } from "vuex";

//firebase import
import { auth } from "../firebase/config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

export default createStore({
  state: {
    user: null,
    isHidden: false,
    isSignup: false,
    authIsReady: false,
    loadedPost: [],
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
    add(state, payload) {
      state.cart.push(payload);
    },
    remove(state, payload) {
      state.cart.splice(payload, 1);
    },
    removeAll(state) {
      state.cart = [];
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
    add({ commit }) {
      commit("add");
    },
    remove({ commit }) {
      commit("remove");
    },
    removeAll({ commit }) {
      commit("removeAll");
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
