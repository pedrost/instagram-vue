<template>
  <v-app id="app">
    <v-row no-gutters justify-center>
      <v-flex xs12 class="sidenav"> 
          <span class="logo-desenho"></span>
          <img class="logo-escrito" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"/>
          <span class="logo-desenho"></span>
      </v-flex>
    </v-row>


    <div v-for="image in getImages">
      <instagram-card :imagemUrl="image[0].url"/>
    </div>


  </v-app>
</template>



<script>
  import { mapGetters, mapActions } from 'vuex';
  import InstagramCard from '@/components/InstagramCard.vue';

export default {
  name: 'App',

  components: {
    InstagramCard
  },

  data: () => ({
    //
  }),

  computed: {
    ...mapGetters([
      'getImages'
    ])
  },

  methods: {
    ...mapActions([
      'inserirImagemDeGato'
    ])
  },

  created() {
    for(let i=0; i<=10; i++) {
      this.inserirImagemDeGato()
    } 
  },

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
    display: inline-flex;
    justify-content: space-between;
  }

  .linha {
    display: inline-block;
    height: 16px;
    width: 1px;
    background-color: grey;
    position: absolute;
    top: 32px;
  }

  .logo-container {
    position: relative;
  }

  .logo-desenho {
    background-image: url('~@/assets/instagram-logo.png');
    background-size: 24px;
    background-position: center;
    height: auto;
    width: 48px;
    display: inline-block;

  }

  .logo-escrito {
    height: fit-content;
    margin: auto;
  }
</style>
