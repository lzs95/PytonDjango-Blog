import getAPI from "../../axios-api";
import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      accessToken: "",
      refreshToken: "",
      APIData: "",
    };
  },
  mutations: {
    updateStorage(state, { access, refresh }) {
      (state.accessToken = access), (state.refreshToken = refresh);
    },
  },
  getters: {
    loggedIn(state) {
      return state.accessToken !== "";
    },
  },
  actions: {
    userLogin(context, userCredentials) {
      return new Promise((resolve, reject) => {
        getAPI
          .post("/api/token/", {
            username: userCredentials.username,
            password: userCredentials.password,
          })
          .then((response) => {
            context.commit("updateStorage", {
              access: response.data.access,
              refresh: response.data.refresh,
            });
            resolve();
          })
          .catch((err) => {
            console.log(err);
            reject();
          });
      });
    },
  },
});

export default store;
