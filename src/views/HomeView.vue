<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

// import components
import MangaGrid from "../components/MangaGrid.vue";
import RecommendedManga from "../components/RecommendedManga.vue";
import Loadding from "../components/Loadding.vue";

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
  <section
    v-if="error"
    class="flex min-h-screen items-center justify-center border"
  >
    <p class="rounded-sm bg-red-600 px-5 py-3 font-semibold text-white">
      {{ error }}
    </p>
  </section>

  <section v-else-if="!error" class="min-h-screen pt-8 pb-13 sm:pt-10 sm:pb-15">
    <div v-if="loading" class="flex h-screen items-center justify-center">
      <Loadding />
    </div>

    <div
      v-else-if="!loading"
      class="mx-auto grid max-w-330 gap-4 px-4 lg:grid-flow-col lg:gap-2"
    >
      <div class="col-span-9 flex flex-col gap-4">
        <MangaGrid :mangas="mangas" />
        <MangaGrid :mangas="mangas" />
      </div>

      <div class="col-span-9 lg:col-span-4">
        <RecommendedManga :mangas="mangas" />
      </div>
    </div>
  </section>
</template>
