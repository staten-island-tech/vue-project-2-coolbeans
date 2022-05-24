import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    // {
    //   path: "/",
    //   name: "splash",
    //   component: /*webpackChunkName:"Splash" */ () =>
    //     import("../views/Splash.vue"),
    // },
    {
      path: "/login",
      name: "login",
      component: /*webpackChunkName:"Login" */ () =>
        import("../views/Login.vue"),
    },
    {
      path: "/signup",
      name: "signup",
      component: /*webpackChunkName:"Signup" */ () =>
        import("../views/Signup.vue"),
    },
    {
      path: "/account",
      name: "account",
      component: /*webpackChunkName:"Account" */ () =>
        import("../views/Account.vue"),
    },
    {
      path: "/favorites",
      name: "favorites",
      component: /*webpackChunkName:"Fav" */ () => import("../views/Fav.vue"),
    },
    {
      path: "/create",
      name: "create",
      component: /*webpackChunkName:"Create" */ () =>
        import("../views/Create.vue"),
    },
    // {
    //   path: "/places",
    //   name: "places",
    //   component: /*webpackChunkName:"Places" */ () =>
    //     import("../views/Places.vue"),
    // },
    // {
    //   path: "/favorite",
    //   name: "favorite",
    //   component: /*webpackChunkName:"favorite" */ () =>
    //     import("../views/Favor.vue"),
    // },
    {
      path: "/addpost",
      name: "addpost",
      component: /*webpackChunkName:"addpost" */ () =>
        import("../views/Addpost.vue"),
    },
  ],
});

export default router;
