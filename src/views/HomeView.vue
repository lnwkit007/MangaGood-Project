<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

// import components
import MangaGrid from "../components/MangaGrid.vue";
import RecommendedManga from "../components/RecommendedManga.vue";
import Loadding from "../components/Loadding.vue";
import Banner from "../components/Banner.vue";
import Error from "../components/Error.vue";

const MangaMain = ref([]);
const MangaList = ref([]);
const Recommended = ref([]);
const loading = ref(true);
const error = ref(null);

onMounted(async () => {
  try {
    const [MangaMainRes, MangaListRes, RecommendedRes] = await Promise.all([
      axios.get(`${import.meta.env.VITE_API_MANGA}&page=1`),
      axios.get(`${import.meta.env.VITE_API_MANGA}&page=2`),
      axios.get(`${import.meta.env.VITE_API_MANGA}&page=3`),
    ]);
    MangaMain.value = MangaMainRes.data;
    MangaList.value = MangaListRes.data;
    Recommended.value = RecommendedRes.data;
  } catch (err) {
    error.value = "ไม่สามารถแสดงข้อมูลได้";
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <Error v-if="error" :error="error" />

  <section v-else class="min-h-screen pt-8 pb-13 sm:pt-10 sm:pb-15">
    <div v-if="loading" class="flex h-screen items-center justify-center">
      <Loadding />
    </div>

    <div v-else>
      <div class="mx-auto max-w-330 px-4">
        <Banner class="mb-4" />

        <div class="grid gap-4 lg:grid-flow-col lg:gap-2">
          <div class="col-span-12 flex flex-col gap-4 lg:col-span-8">
            <MangaGrid :mangas="MangaMain" title="นิยายยอดนิยม" />
            <MangaGrid :mangas="MangaList" title="การ์ตูนยอดนิยม" />
          </div>

          <div class="col-span-12 lg:col-span-4">
            <RecommendedManga :mangas="Recommended" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
