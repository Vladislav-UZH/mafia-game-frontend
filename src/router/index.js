import { VueRouter } from "vue-router";
const routes = [
  { name: "home", path: "/", component: import("../pages/HomePage.vue") },
  {
    name: "register",
    path: "/register",
    component: import("../pages/HomePage.vue"),
  },
  {
    name: "room",
    path: "room/:id",
    component: import("../pages/RegisterPage.vue"),
  },
  {
    name: "arena",
    path: "arena/:id",
    component: import("../pages/ArenaPage.vue"),
  },
  {
    name: "results",
    path: "/results",
    component: import("../pages/ResultsPage.vue"),
  },
  { name: "home", path: "/", component: import("../pages/HomePage.vue") },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

export default router;
