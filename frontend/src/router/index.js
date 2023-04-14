import Vue from "vue";
import VueRouter from "vue-router";

import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

// //
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Account/LoginView.vue"),
  },
  {
    path: "/forgotPassword",
    name: "forgotPassword",
    component: () => import("../views/Account/ForgotPasswordView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
