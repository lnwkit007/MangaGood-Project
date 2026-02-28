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

    <div class="rounded-b-2xl bg-[#0f0f0f] p-4">
      <div class="flex flex-col">
        <RouterLink to="" v-for="manga in mangas" class="border border-white text-white">
          <img :src="manga.images.jpg.image_url" alt="" />
          <h3>{{ manga.title }}</h3>
        </RouterLink>
        <div class="border">asdf</div>
      </div>
    </div>
  </section>
</template>
