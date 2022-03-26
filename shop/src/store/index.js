import { createStore } from "vuex";

export default createStore({
  state: {
    isHidden: false,
    isSignup: false,
  },
  mutations: {
    openModal(state) {
      state.isHidden = true;
      console.log(state.isHidden);
    },
    closeModal(state) {
      state.isHidden = false;
    },
    openSign(state) {
      state.isSignup = true;
      console.log(state.isSignup);
    },
    closeSign(state) {
      state.isSignup = false;
    },
  },
  actions: {
    openModal({ commit }) {
      commit("openModal");
    },
    closeModal({ commit }) {
      commit("closeModal");
    },
    openSign({ commit }) {
      commit("openSign");
    },
    openSign({ commit }) {
      commit("closeSign");
    },
  },
  getters: {},
  modules: {},
});
