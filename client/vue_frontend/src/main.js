import { createApp } from "vue";
import router from "./routes.js";
import App from "./App.vue";
import store from "./stores/store";
import "./components/index.css";

const app = createApp(App);

app.use(router, store);
app.mount("#app");
