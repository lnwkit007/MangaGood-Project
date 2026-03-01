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
        <h2 class="text-lg text-white">มังงะแนะนำ</h2>
      </span>
    </div>

    <div class="rounded-b-2xl bg-[#0f0f0f] p-5">
      <div class="grid grid-cols-1 gap-5">
        <RouterLink to="" v-for="manga in mangas" class="flex gap-2 text-white">
          <img
            :src="manga.images.jpg.image_url"
            :alt="manga.title"
            class="aspect-[2/3] rounded-xl object-cover lg:max-h-40"
          />
          <h3 class="truncate font-medium text-white">{{ manga.title }}</h3>
        </RouterLink>
      </div>
    </div>
  </section>
</template>
