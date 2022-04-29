<template>
  <v-container>
    <v-row>
      <template v-if="catsList.length">
        <v-col v-for="(cat, i) in catsList" :key="i" md="4" sm="6" cols="12">
          <v-tooltip max-width="250" bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-card v-bind="attrs" v-on="on">
                <v-card-text>
                  <h2>{{ cat.breed }}</h2>
                  <div class="text-truncate">
                    {{ cat.country ? cat.country : "no country information" }}
                  </div>
                  <div>{{ cat.coat ? cat.coat : "no coat information" }}</div>
                </v-card-text>
                <cat-pic />
              </v-card>
            </template>
            <cat-fact />
          </v-tooltip>
        </v-col>
      </template>
      <v-col v-else>No cats data available ;_;</v-col>
    </v-row>
  </v-container>
</template>

<script>
import { getCatsList } from "@/services/cats.service";
import CatPic from "@/components/CatPic";
import CatFact from "@/components/CatFact";
export default {
  name: "CatsList",

  components: {
    CatPic,
    CatFact,
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
