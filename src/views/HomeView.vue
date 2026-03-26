<script setup>
import { onMounted } from "vue";

// import components
import MangaGrid from "../components/MangaGrid.vue";
import RecommendedManga from "../components/RecommendedManga.vue";
import Loadding from "../components/Loadding.vue";
import Banner from "../components/Banner.vue";
import Error from "../components/Error.vue";

// import composables
import { useMangas } from "../composables/useManga";
const { mangaMain, mangaList, recommended, loading, error, fetchMangas } =
  useMangas();

onMounted(() => {
  fetchMangas();
});
</script>

<template>
  <Loadding v-if="loading" />

  <section v-else class="min-h-screen pt-8 pb-13 sm:pt-10 sm:pb-15">
    <Error v-if="error" :error="error" />

    <div v-else>
      <div class="mx-auto max-w-330 px-4">
        <Banner class="mb-4" />

        <div class="grid gap-4 lg:grid-flow-col lg:gap-2">
          <div class="col-span-12 flex flex-col gap-4 lg:col-span-8">
            <MangaGrid :mangas="mangaMain" title="นิยายยอดนิยม" />
            <MangaGrid :mangas="mangaList" title="การ์ตูนยอดนิยม" />
          </div>

          <div class="col-span-12 lg:col-span-4">
            <RecommendedManga :mangas="recommended" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
