import { createApp } from "vue";
import router from "./routes.js";
import App from "./App.vue";
import store from "./stores/store";

import "./components/index.css";

const app = createApp(App);

app.use(router, store);
app.mount("#app");

// router.beforeEach(async (to) => {
//   const access = await store.getters.loggedIn;
//   if (to.matched.some((record) => record.meta.requiresLogin)) {
//     //if no auth return to login page
//     if (!access && to.name !== "login") return { name: "login" };
//   }
// });
