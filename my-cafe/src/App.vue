<!-- 여기서 실행 설정 -->

<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn to="/" text>
        <v-icon>mdi-home</v-icon>
        <span class="mr-2">Home</span>
      </v-btn>
      <v-btn to="/menus" text><span class="mr-2">Menus</span></v-btn>
      <v-btn to="/event" text><span class="mr-2">Events</span></v-btn>
      <v-btn to="/reviews" text><span class="mr-2">Reviews</span></v-btn>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',


  // 원래는 component로 실행하지만 Vuetify 사용할 경우 Router로 동작하기 때문에 주석 처리했음..
  
  // components: {
  //   HelloWorld,
  // },

  data: () => ({
    //
  }),
};
</script>
