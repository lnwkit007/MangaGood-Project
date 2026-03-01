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

    <div class="rounded-b-2xl bg-[#0f0f0f] p-5">
      <div
        class="col-4 grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4"
      >
        <RouterLink
          to=""
          v-for="manga in mangas"
          class="flex flex-col justify-between gap-1"
        >
          <img
            :src="manga.images.jpg.image_url"
            :alt="manga.title"
            class="aspect-[2/3] w-full rounded-sm object-cover"
          />
          <h3 class="truncate font-medium text-white">{{ manga.title }}</h3>
        </RouterLink>
      </div>
    </div>
  </section>
</template>
