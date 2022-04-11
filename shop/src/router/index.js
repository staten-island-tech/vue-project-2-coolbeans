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
    {
      path: "/about",
      name: "about",
      component: /*webpackChunkName:"About" */ () =>
        import("../views/About.vue"),
    },
    {
      path: "/places",
      name: "places",
      component: /*webpackChunkName:"Places" */ () =>
        import("../views/places.vue"),
    },
    {
      path: "/favorite",
      name: "favorite",
      component: /*webpackChunkName:"favorite" */ () =>
        import("../views/favor.vue"),
    },
  ],
});

export default router;
