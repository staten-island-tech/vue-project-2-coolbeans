import { createStore } from "vuex";

export default createStore({
  state: {
    isHidden: false,
  },
  mutations: {
    openModal(state) {
      state.isHidden = true;
      console.log(state.isHidden);
    },
    closeModal(state) {
      state.isHidden = false;
    },
  },
  actions: {
    openModal({ commit }) {
      commit("openModal");
    },
    closeModal({ commit }) {
      commit("closeModal");
    },
  },
  getters: {},
  modules: {},
});
