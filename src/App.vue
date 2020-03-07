<template>
  <v-app id="app">
    <v-row no-gutters>
      <v-flex xs12 class="sidenav"> 
        sidenav
      </v-flex>
    </v-row>
  </v-app>
</template>



<script>

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    //
  }),
};
</script>

<style type="text/css">

  #app {
    background-color: rgba(var(--b3f,250,250,250),1);
    height: 100%;
    width: 100%;
  }

  .sidenav {
    height: 78px;
    background-color: white;
    border-bottom: 1px solid #dbdbdb;
  }
</style>
