import { createStore } from "vuex";

//firebase import
import { auth, db } from "../firebase/config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import {
  collection,
  addDoc,
  getDocs,
  setDoc,
  getDoc,
  doc,
  query,
} from "firebase/firestore";

const store = createStore({
  state: {
    user: null,
    userName: null,
    isHidden: false,
    isSignup: false,
    authIsReady: false,
    loadedPosts: [],
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
    createPost(state, payload) {
      state.loadedPosts.push(payload);
    },
    setLoadedPosts(state, payload) {
      state.loadedPosts = payload;
      console.log(payload);
    },
    openModal(state, payload) {
      state.isHidden = true;
      state.tempStore.push(payload);
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
    async signup(context, { email, password, firstName, lastName }) {
      console.log("signup action");
      // async code
      const res = await createUserWithEmailAndPassword(auth, email, password);
      if (res) {
        context.commit("setUser", res.user);
        await updateProfile(res.user, {
          displayName: `${firstName} ${lastName}`,
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
    async createPost({ commit }, payload) {
      try {
        const post = {
          location: payload.location,
          imageUrl: payload.imageUrl,
          description: payload.description,
          postDate: payload.postDate,
        };
        const userPath = doc(db, `allUser/${this.state.user.uid}`);
        const userPostPath = doc(userPath, "UserPosts/posts");
        const docRef = await addDoc(collection(userPostPath, "post"), post);

        console.log("Document written with ID: ", docRef.id);
        commit("createPost", post);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    },
    loadPost({ commit }) {
      async function queryForDocuments() {
        const thePost = query(
          collection(
            db,
            "publicPost",
            "allPost",
            "post"
          ) /* can insert limit of post here */
        );
        const querySnapshot = await getDocs(thePost);
        const st = [];
        const allPublicpost = querySnapshot.forEach((snap) => {
          console.log(snap.data());
          st.push(snap.data());
          snap.data();
        });
        commit("setLoadedPosts", st);
      }
      queryForDocuments();
    },
    openModal({ commit }, payload) {
      const popupPost = {
        location: payload.location,
        imageUrl: payload.imageUrl,
        author: payload.author,
        description: payload.description,
        postDate: payload.postDate,
      };
      commit("openModal", popupPost);
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
  },
  modules: {},
});
const unsub = onAuthStateChanged(auth, (user) => {
  store.commit("setAuthIsReady", true);
  store.commit("setUser", user);
  unsub();
});
export default store;

// database
//   .ref("createposts")
//   .push(post)
//   .then((data) => {
//     commit("createPost", post);
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
// function setUserData(post) {
//   const db = getDatabase();
//   set(ref(db, "users/"), {
//     post,
//   });
// }    setUserData();
