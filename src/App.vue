<script setup>
import { RouterView } from 'vue-router';

// import components
import Navbar from './components/Navbar.vue';
import Footer from './components/footer.vue';
</script>

<template>
  <Navbar />
  <main>
    <RouterView />
  </main>
  <Footer />
</template>

