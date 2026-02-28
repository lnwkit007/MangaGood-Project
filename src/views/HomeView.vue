<script setup>
// import components
import MangaGrid from '../components/MangaGrid.vue';
import RecommendedManga from '../components/RecommendedManga.vue';
</script>

<template>
  <section class="min-h-screen pt-10 pb-15">
    <div
      class="mx-auto grid max-w-330 grid-flow-col gap-4"
    >
      <div class="col-span-8">
        <MangaGrid />
      </div>
      <div class="col-span-4 border border-orange-600">
        <RecommendedManga />
      </div>
    </div>
  </section>
</template>
