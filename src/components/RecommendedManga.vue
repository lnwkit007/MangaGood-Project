<script setup>
import { RouterLink } from "vue-router";

const props = defineProps({
  mangas: Array,
});
</script>

<template>
  <section>
    <div
      class="flex justify-between rounded-t-2xl border-b border-[#ffa31c] bg-[#0f0f0f] px-4 py-3"
    >
      <span class="inline-block">
        <h2 class="text-lg font-bold text-white">นิยายและการ์ตูนที่แนะนำ</h2>
      </span>
    </div>

    <div class="rounded-b-2xl bg-[#0f0f0f] p-5">
      <div
        class="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-1"
      >
        <RouterLink
          :to="`/manga/${manga.book_ID}`"
          v-for="manga in props.mangas"
          class="flex flex-col gap-1 lg:flex-row lg:gap-2"
        >
          <img
            :src="`https://image.readrealm.co/${manga?.book_cover?.fileName}`"
            :alt="manga?.book_subject"
            class="aspect-[2/3] rounded-xl object-cover lg:max-h-40"
          />

          <div class="flex flex-col gap-1 truncate">
            <h3 class="truncate font-medium text-white">
              {{ manga.book_subject }}
            </h3>

            <span class="flex items-center gap-1">
              <span class="pi pi-eye text-white"></span>
              <p class="truncate text-sm text-white">{{ manga.book_views_count }}</p>
            </span>
          </div>
        </RouterLink>
      </div>
    </div>
  </section>
</template>
