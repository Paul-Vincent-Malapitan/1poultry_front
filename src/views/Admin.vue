<template>
    <NavAd />
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  
  // Components
  import NavAd from '../components/NavAd.vue';
  
  export default defineComponent({
    name: 'HomeView',
    components: {
      NavAd,
    },
  });
  </script>
  