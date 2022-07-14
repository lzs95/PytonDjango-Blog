import { createRouter, createWebHistory } from "vue-router";
import Post from "./views/PostPage";
import Login from "./views/LoginPage";
const routes = [
  {
    path: "/",
    name: "post",
    component: Post,
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
