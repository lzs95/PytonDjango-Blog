<template>
  <div>
    <NavbarComponent class="sticky top-0 z-50" />
    <div class="grid grid-cols-4 gap-10 mr-10 ml-10 mt-5 mb-5">
      <div v-for="posts in APIData" :key="posts.data">
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
import getAPI from "../../axios-api";
import NavbarComponent from "@/components/NavbarComp.vue";
export default {
  name: "PostComp",
  data() {
    return {
      APIData: [],
    };
  },
  components: {
    NavbarComponent,
  },
  created() {
    getAPI
      .get("posts/")
      .then((response) => {
        console.log("Post Api has Recived Data");
        this.APIData = response.data;
      })
      .catch((err) => {
        console.log("ERROR");
        console.log(err);
      });
  },
};
</script>

<style scoped></style>
