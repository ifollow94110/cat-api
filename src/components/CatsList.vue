<template>
  <v-container>
    <v-row class="text-center">
      <v-col v-for="(cat, i) in catsList" :key="i" md="4" sm="6" cols="12">
        <v-card>
          <v-card-text>
            <h2>{{ cat.breed }}</h2>
            <div>{{ cat.country }}</div>
            <div>{{ cat.coat }}</div>
          </v-card-text>
          <cat-pic />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { getCatsList } from "@/services/cats.service";
import CatPic from "@/components/CatPic";
export default {
  name: "CatsList",

  components: {
    CatPic,
  },

  data: () => ({
    catsList: [],
  }),
  mounted() {
    getCatsList().then((response) => {
      this.catsList = response;
    });
  },
};
</script>
