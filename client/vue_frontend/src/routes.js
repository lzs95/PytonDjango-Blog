import { createRouter, createWebHistory } from "vue-router";
import Post from "./views/PostView";
import Login from "./views/LoginView";
import NewPost from "./views/NewPostView";
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
  {
    path: "/new",
    name: "newPost",
    component: NewPost,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
