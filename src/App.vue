<script setup>
import { RouterView } from 'vue-router';

// import components
import Navbar from './layouts/Navbar.vue';
import Footer from './layouts/Footer.vue';

</script>

<template>
  <Navbar />
  <main>
    <RouterView />
  </main>
  <Footer />
</template>

