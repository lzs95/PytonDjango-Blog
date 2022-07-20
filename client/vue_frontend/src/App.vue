<template>
  <div
    id="app"
    class="bg-gradient-to-t from-blue-200 to-slate-300 w-screen h-screen"
  >
    <router-view />
    <button class="bg-orange-500 ml-9">Create New Post</button>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style></style>
