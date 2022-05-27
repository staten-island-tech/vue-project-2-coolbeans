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
  collectionGroup,
  where,
  deleteDoc,
} from "firebase/firestore";

const reformatingDate = function () {
  const date = new Date();
  return date.toLocaleString(["en-US"], {
    month: "short",
    day: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

const store = createStore({
  state: {
    user: null,
    userName: null,
    isHidden: false,
    isSignup: false,
    authIsReady: false,
    loadedPosts: [],
    tempStore: [],
    favorite: [],
    userCreated: [],
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
    createdUserpost(state, payload) {
      state.userCreated = payload;
    },
    setCreatedpost(state, payload) {
      state.userCreated.push(payload);
    },
    loadFavorite(state, payload) {
      state.favorite = payload;
    },
    addFavorpost(state, payload) {
      state.favorite.push(payload);
    },
    deletePosttemp() {
      console.log("you did it");
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
          uuid: payload.uuid,
          type: "post",
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
    async addFavorite({ commit }, payload) {
      try {
        const post = {
          location: payload.location,
          imageUrl: payload.imageUrl,
          description: payload.description,
          postDate: payload.postDate,
          uuid: payload.uuid,
          dateAdded: reformatingDate(),
          type: "favorite",
        };
        const userPath = doc(db, `allUser/${this.state.user.uid}`);
        const userPostPath = doc(userPath, "Userfavorites/favorites");
        const docRef = await addDoc(collection(userPostPath, "favorite"), post);
        console.log("Document written with ID: ", docRef.id);
        commit("addFavorpost", post);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    },
    loadFavor({ commit }) {
      const ovnwoen = this.state.user.uid;
      console.log(ovnwoen);
      async function queryForDocuments() {
        console.log("query");
        const pleasPlease = query(
          collection(
            db,
            "allUser",
            `${ovnwoen}`,
            "Userfavorites",
            "favorites",
            "favorite"
          ) // can insert limit of post here
        );
        const querySnapshot = await getDocs(pleasPlease);
        const postload = [];
        const allPublicpost = querySnapshot.forEach((snap) => {
          console.log(snap.data());
          postload.push(snap.data());
          snap.data();
        });
        commit("loadFavorite", postload);
      }
      queryForDocuments();
    },
    loadPost({ commit }) {
      async function queryForDocuments() {
        const thePost = query(
          collectionGroup(db, "post")
          /* can insert limit of post here
           */
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
    loadUsercreated({ commit }) {
      const userUid = this.state.user.uid;
      console.log(userUid);
      async function queryForDocuments() {
        console.log("query");
        const thePost = query(
          collection(
            db,
            "allUser",
            `${userUid}`,
            "UserPosts",
            "posts",
            "post"
          ) /* can insert limit of post here */
        );
        const querySnapshot = await getDocs(thePost);
        const postload = [];
        const allPublicpost = querySnapshot.forEach((snap) => {
          console.log(snap.data());
          postload.push(snap.data());
          snap.data();
        });
        commit("createdUserpost", postload);
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
        uuid: payload.uuid,
      };
      commit("openModal", popupPost);
    },
    deletePosttemp({ commit }, payload) {
      console.log(payload);
      const uidUser = this.state.user.uid;
      console.log(uidUser);
      async function deleteUserpost() {
        const docRef = doc(db, "allUser", `KeTEV8rKW0N0EJGoD2xKlhcmvEd2`,"UserPosts", "posts", "post", `43XNB6SFvxpoLlESrK2w`);
        await deleteDoc(docRef)
      }
      console.log(deleteUserpost());
      // commit("deletePosttemp", payload);
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
    userCreated(state) {
      return state.userCreated.sort((postA, postB) => {
        return postA.postDate > postB.postDate;
      });
    },
    favorite(state) {
      return state.favorite.sort((postA, postB) => {
        return postA.dateAdded > postB.dateAdded;
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
