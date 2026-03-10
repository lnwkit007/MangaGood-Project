<script setup>
import { RouterLink } from "vue-router";

defineProps({
  title: String,
  mangas: Array,
});
</script>

<template>
  <section>
    <div
      class="flex justify-between rounded-t-2xl border-b border-[#ffa31c] bg-[#0f0f0f] px-4 py-3"
    >
      <span class="inline-block">
        <h2 class="text-lg font-bold text-white">{{ title }}</h2>
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
        <RouterLink to="" v-for="manga in mangas" class="flex flex-col gap-1">
          <img
            :src="`https://image.readrealm.co/${manga.book_cover.fileName}`"
            :alt="manga.book_subject"
            class=" aspect-[2/3] rounded-sm object-cover"
          />
          <!-- aspect-[2/3] w-full -->
          <div>
            <h3 class="truncate font-medium text-white">
              {{ manga.book_subject }}
            </h3>

            <span class="flex items-center gap-1">
              <span class="pi pi-eye text-white"></span>
              <p class="truncate text-sm text-white">
                {{ manga.book_views_count }}
              </p>
            </span>
          </div>
        </RouterLink>
      </div>
    </div>
  </section>
</template>
