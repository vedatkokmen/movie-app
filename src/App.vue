<template>
  <v-app>
    <v-app-bar color="deep-purple accent-4" dark>
      <router-link to="/">
        <v-btn color="success">Home</v-btn>
      </router-link>
      <router-link to="/latest-movie">
        <v-btn color="success">Latest Movie</v-btn>
      </router-link>
      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>

    <v-text-field label="search" name="search" textarea>Search Movie</v-text-field>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},
  data: () => ({
    //
  })
};
</script>
