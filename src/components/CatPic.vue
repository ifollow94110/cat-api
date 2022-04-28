<template>
  <v-img v-if="picUrl" :src="picUrl" height="250"></v-img>
</template>

<script>
import { getCatPic } from "@/services/cats.service";
export default {
  name: "CatPic",

  data: () => ({
    picUrl: "",
  }),
  mounted() {
    getCatPic().then((response) => {
      this.picUrl = response;
    });
  },
};
</script>
