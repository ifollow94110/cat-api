<template>
  <span v-if="catFact">{{ catFact }}</span>
</template>

<script>
import { getCatFact } from "@/services/cats.service";
export default {
  name: "CatFact",

  data: () => ({
    catFact: "",
  }),
  mounted() {
    getCatFact().then((response) => {
      this.catFact = response;
      console.log("fact", this.catFact);
    });
  },
};
</script>