<script>
import axios from 'axios';
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import Footer from './components/Footer.vue';
import Jumbotron from './components/Jumbotron.vue';
import CardGallery from './components/CardGallery.vue';

  export default {
    components:{
      Header,
      Jumbotron, 
      Main,
      Footer,
      CardGallery,
    }
  }
</script>

<template>
  <Header />
  <Jumbotron />
  <Main />
  <Footer />
</template>



<style lang="scss">
  @use './assets/scss/main.scss';
</style>
