<template>
  <div>
    <NavbarComponent class="sticky top-0 z-50 shadow-sm" />
    <header class="bg-gray-300 shadow">
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold text-gray-900 text-center">
          What's on your mind
        </h1>
      </div>
    </header>
    <main>
      <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <!-- Replace with your content -->
        <input
          type="text"
          class="p-2.5 w-1/4 text-lg shadow-md text-gray-900 bg-gray-50 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Title"
        />
        <textarea
          id="message"
          rows="4"
          class="h-96 mt-4 p-2.5 w-full text-lg shadow-md text-gray-900 bg-gray-50 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write here..."
        ></textarea>
        <!-- /End replace -->
        <button
          type="submit"
          class="inline-flex items-center mt-4 shadow-sm px-5 py-2.5 text-md text-center text-white bg-blue-500 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
        >
          Publish Post
        </button>
      </div>
    </main>
  </div>
</template>

<script>
import NavbarComponent from "@/components/NavbarComp.vue";

// import getAPI from "../../axios-api";
// import store from "@/stores/store";

export default {
  name: "PostComp",
  components: {
    NavbarComponent,
  },
};
</script>

<style lang="scss" scoped></style>
