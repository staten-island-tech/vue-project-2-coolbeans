import { createStore } from "vuex";

//firebase import
import { auth } from "../firebase/config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";

const store = createStore({
  state: {
    user: null,
    isHidden: false,
    isSignup: false,
    authIsReady: false,
    loadedPosts: [
      {
        name: "Tokyo, Japan",
        author: "Jason Chen",
        imageUrl:
          "https://images.unsplash.com/photo-1652785179637-2cf785eaa652?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique senectus et netus et malesuada fames ac turpis egestas. Morbi quis commodo odio aenean sed adipiscing diam. Consectetur purus ut faucibus pulvinar. Est pellentesque elit ullamcorper dignissim cras tincidunt. Consectetur adipiscing elit",
        postDate: "2022-05-24",
        id: "fibvdhksj",
      },
      {
        name: "France, Pairs",
        author: "Michael Chen",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg/1200px-Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg",
        description:
          "Cras sed felis eget velit aliquet. Nibh ipsum consequat nisl vel pretium lectus quam id leo. Amet consectetur adipiscing elit pellentesque habitant morbi tristique. Enim nulla aliquet porttitor lacus luctus. Vestibulum lorem sed risus ultricies tristique. Tortor at auctor urna nunc. Viverra accumsan in nisl nisi scelerisque eu ultrices vitae auctor. Pellentesque massa placerat duis ultricies lacus.",
        postDate: "2022-04-13",
        id: "csacvas",
      },
      {
        name: "Italy, Rome",
        author: "Jason Chen",
        imageUrl:
          "https://www.towerofpisa.org/wp-content/uploads/2015/04/pisa-leaning-tower1.jpg",
        description:
          "Elementum facilisis leo vel fringilla est ullamcorper eget. Vulputate eu scelerisque felis imperdiet proin fermentum leo. Quis hendrerit dolor magna eget est lorem. Diam in arcu cursus euismod quis viverra nibh cras. Vel turpis nunc eget lorem. Vehicula ipsum a arcu cursus vitae congue. Non enim praesent elementum facilisis leo vel fringilla est. Mi proin sed libero enim sed faucibus. ",
        postDate: "2022-03-09",
        id: "plmkjknbi",
      },
    ],
    tempStore: [],
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
      console.log("user state change:", state.user);
    },
    setAuthIsReady(state, payload) {
      state.authIsReady = payload;
    },
    openModal(state, loadedPost) {
      state.isHidden = true;
      state.tempStore.push(loadedPost);
    },
    closeModal(state) {
      state.isHidden = false;
      state.tempStore = [];
    },
    signOpen(state) {
      state.isSignup = true;
    },
    closeSign(state) {
      state.isSignup = false;
    },
  },
  actions: {
    async signup(context, { email, password, firstName }) {
      console.log("signup action");

      // async code
      const res = await createUserWithEmailAndPassword(auth, email, password);
      if (res) {
        context.commit("setUser", res.user);
        await updateProfile(res.user, {
          displayName: firstName,
        });
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
    openModal({ commit, loadedPost }) {
      commit("openModal", loadedPost);
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
  getters: {
    loadedPosts(state) {
      return state.loadedPosts.sort((postA, postB) => {
        return postA.postDate > postB.postDate;
      });
    },
    loadPost(state) {
      return (postId) => {
        return state.loadPosts.find((post) => {
          return post.id === postId;
        });
      };
    },
  },
  modules: {},
});
const unsub = onAuthStateChanged(auth, (user) => {
  store.commit("setAuthIsReady", true);
  store.commit("setUser", user);
  unsub();
});
export default store;
