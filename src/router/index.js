import { createRouter, createWebHistory } from "vue-router";
// import { routes as projectsRoutes } from "../modules/projects";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  // ...projectsRoutes,
  {
    path: "/:catchAll(.*)",
    component: () => import("../views/Home.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
