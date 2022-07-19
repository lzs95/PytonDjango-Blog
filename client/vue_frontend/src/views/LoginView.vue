<template>
  <div class="flex flex-row h-screen w-screen">
    <div class="flex flex-col items-center bg-gray-400 h-screen w-4/5">
      <div
        class="bg-orange-200 flex flex-col items-start justify-center h-full w-full ml-5"
      >
        <div class="mb-12 text-cyan-900">
          <h1 class="text-7xl font-extrabold ml-5">WELCOME TO MY SITE!!</h1>
          <div class="text-5xl mt-5 ml-5">Hello World</div>
        </div>
        <form
          v-on:submit.prevent="login"
          class="bg-teal-100 w-full flex justify-center"
        >
          <div class="w-full flex flex-col justify-start ml-5">
            <p v-if="invalidAuth" class="text-red-500 absolute">
              * Incorrect email or password
            </p>
            <input
              required
              type="text"
              class="rounded-md w-7/12 mt-6 h-10 text-2xl placeholder:italic placeholder:text-zinc-400 indent-5 shadow-md align-middle"
              placeholder="email"
              v-model="username"
            />
            <input
              required
              type="text"
              class="rounded-md md w-7/12 h-10 text-2xl placeholder:italic placeholder:text-zinc-400 indent-5 mt-10 shadow-md"
              placeholder="password"
              v-model="password"
            />
            <div class="form-check flex flex-row mt-4">
              <input
                class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 float-left mr-2 cursor-pointer"
                type="checkbox"
              />
              <label class="text-lg">Remember me</label>
              <label htmlFor="" class="ml-28 text-lg"> Forgot Password? </label>
            </div>
            <button
              class="bg-emerald-500 rounded-md w-4/12 h-10 text-2xl mt-5 hover:text-white hover:outline-white hover:shadow-md transition-all duration-100 shadow-lg align-middle outline-black outline cursor-pointer"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
      </div>
      <div class="mb-3 text-lg">
        <h2>all rights reserved :)</h2>
      </div>
    </div>
    <div
      class="bg-[url('../assets/placeholder.jpg')] w-screen overflow-auto"
    ></div>
  </div>
</template>

<script>
import store from "@/stores/store";
export default {
  name: "LoginView",
  data() {
    return {
      username: "",
      password: "",
      invalidAuth: false,
    };
  },
  methods: {
    login() {
      store
        .dispatch("userLogin", {
          username: this.username,
          password: this.password,
        })
        .then(() => {
          this.$router.push({ name: "post" });
        })
        .catch((err) => {
          console.log(err);
          this.invalidAuth = true;
        });
    },
  },
};
</script>

<style></style>
