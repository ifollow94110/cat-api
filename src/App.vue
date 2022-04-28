<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Cats Logo"
          class="shrink mr-2"
          contain
          src="./assets/cat.png"
          transition="scale-transition"
          width="40"
        />
        Cats-API
      </div>
    </v-app-bar>

    <v-main>
      <cats-list />
    </v-main>
  </v-app>
</template>

<script>
import CatsList from "./components/CatsList";

export default {
  name: "App",

  components: {
    CatsList,
  },

  data: () => ({
    //
  }),
};
</script>
