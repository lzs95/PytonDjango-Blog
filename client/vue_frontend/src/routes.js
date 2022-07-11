import { createRouter, createWebHistory } from "vue-router";
import Post from "./views/PostPage";

const routes = [
  {
    path: "/",
    name: "post",
    component: Post,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
