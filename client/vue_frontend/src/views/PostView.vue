<template>
  <div>
    <NavbarComponent class="sticky top-0 z-50" />
    <div class="grid grid-cols-4 gap-10 mr-10 ml-10 mt-5 mb-5">
      <div v-for="posts in blogData" :key="posts.data">
        <div class="w-fit">
          <div class="rounded-lg shadow-lg bg-white max-w-sm">
            <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
              <img
                class="rounded-t-lg"
                src="https://mdbootstrap.com/img/new/standard/nature/182.jpg"
                alt=""
              />
              <div class="p-6">
                <h5 class="text-gray-900 text-xl font-medium mb-2">
                  {{ posts.title }}
                </h5>
                <p class="text-gray-700 text-base mb-4">
                  {{ posts.body }}
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarComponent from "@/components/NavbarComp.vue";

import getAPI from "../../axios-api";
import store from "@/stores/store";
export default {
  name: "PostComp",
  components: {
    NavbarComponent,
  },
  data() {
    return {
      blogData: store.state.APIData,
    };
  },

  created() {
    getAPI
      .get("/posts/", {
        headers: {
          Authorization: `Bearer ${store.state.accessToken}`,
        },
      })
      .then((response) => {
        store.state.APIData = response.data;
        this.blogData = store.state.APIData;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style scoped></style>
