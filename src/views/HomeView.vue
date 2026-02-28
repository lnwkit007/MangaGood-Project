<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

// import components
import MangaGrid from "../components/MangaGrid.vue";
import RecommendedManga from "../components/RecommendedManga.vue";

const mangas = ref([]);
const loading = ref(true);
const error = ref(null);

onMounted(async () => {
  try {
    const responseMangaList = await axios.get(import.meta.env.VITE_API_MANGA);
    mangas.value = responseMangaList.data.data;
  } catch (err) {
    error.value = "Failed to fetch Mangas";
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <section class="min-h-screen pt-10 pb-15">
    <div class="mx-auto grid max-w-330 grid-flow-col gap-2">
      <div class="col-span-9">
        <MangaGrid :mangas="mangas" />
      </div>

      <div class="col-span-4">
        <RecommendedManga :mangas="mangas" />
      </div>
    </div>
  </section>
</template>
