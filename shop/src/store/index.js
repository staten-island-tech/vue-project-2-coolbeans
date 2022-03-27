import { createStore } from "vuex";

export default createStore({
  state: {
    isHidden: false,
    isSignup: false,
  },
  mutations: {
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
