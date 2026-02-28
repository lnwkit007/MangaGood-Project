<script setup>
import { RouterLink } from "vue-router";

defineProps({
  mangas: Array,
});
</script>

<template>
  <section>
    <div
      class="flex justify-between rounded-t-2xl border-b border-white bg-[#0f0f0f] px-4 py-2"
    >
      <span class="inline-block">
        <h2 class="text-lg text-white">โรแฟนมังงะ by MangaKimi</h2>
      </span>

      <span class="group inline-block">
        <RouterLink to="/" class="text-white group-hover:text-[#ffa31c]">
          ดูทั้งหมด
        </RouterLink>
      </span>
    </div>

    <div class="rounded-b-2xl bg-[#0f0f0f] p-4">
      <div class="col-4 grid grid-cols-4 gap-5">
        <RouterLink to="" v-for="manga in mangas" class="">
          <img
            :src="manga.images.jpg.image_url"
            alt="manga.title"
            class="w-full rounded-xl object-cover"
            />
            <!-- 296 -->
          <h3 class="text-white">{{ manga.title }}</h3>
        </RouterLink>
      </div>
    </div>
  </section>
</template>
