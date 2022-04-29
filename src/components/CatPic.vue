<template>
  <v-img v-if="picUrl" :src="picUrl" height="250">
    <template v-slot:placeholder>
      <v-row class="fill-height ma-0" align="center" justify="center">
        <v-progress-circular indeterminate color="blue"></v-progress-circular>
      </v-row>
    </template>
  </v-img>
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
