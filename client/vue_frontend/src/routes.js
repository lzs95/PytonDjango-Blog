import { createRouter, createWebHistory } from "vue-router";
import Post from "./views/PostView";
import Login from "./views/LoginView";
const routes = [
  {
    path: "/",
    name: "post",
    component: Post,
    meta: {
      requiresLogin: true,
    },
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
