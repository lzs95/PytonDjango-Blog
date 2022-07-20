<template>
  <nav
    class="w-full flex flex-wrap items-center justify-between py-4 bg-gray-100 text-gray-500 shadow-lg navbar navbar-expand-lg navbar-light select-none"
  >
    <div
      class="container-fluid w-full flex flex-wrap items-center justify-between px-6"
    >
      <div class="collapse flex-grow flex-row">
        <ul class="navbar-nav flex flex-row pl-0 list-style-none mr-auto">
          <a class="text-xl text-black mr-7" href="#">My Blog</a>
          <li class="px-2 text-xl">
            <a
              class="nav-link active text-gray-500 hover:text-gray-700 focus:text-gray-700"
              aria-current="page"
              href="#"
              >Home</a
            >
          </li>
          <li class="px-2 text-xl">
            <a
              class="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0"
              href="#"
              >About</a
            >
          </li>
        </ul>
      </div>
      <div
        class="px-2 text-xl text-gray-500 hover:text-gray-700 focus:text-gray-700 cursor-pointer"
        @click="logout"
        v-if="accessToken !== ''"
      >
        Logout
      </div>
      <div
        class="px-2 text-xl text-gray-500 hover:text-gray-700 focus:text-gray-700 cursor-pointer"
        v-else
      >
        Sign Up
      </div>
    </div>
  </nav>
</template>

<script>
import store from "@/stores/store";

export default {
  name: "NavbarComponent",
  data() {
    return {
      accessToken: store.state.accessToken,
    };
  },
  methods: {
    logout() {
      store
        .dispatch("userLogout")
        .then(() => {
          this.$router.push({ name: "login" });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
