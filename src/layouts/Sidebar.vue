<script setup>
import { RouterLink } from "vue-router";
import { inject } from "vue";

const { stateNavbar, menulists } = inject("StateNavbar");
</script>

<template>
  <aside
    v-if="stateNavbar"
    class="flex flex-col gap-4 border-b border-[#ffa31c] bg-[#0f0f0f] px-8 py-6 sm:py-4 lg:hidden"
  >
    <div class="sm:hidden">
      <div class="flex items-center gap-2 rounded-3xl bg-[#1c1c1c] px-3 py-2">
        <span class="pi pi-search text-[#ffa31c]"></span>

        <input
          type="search"
          placeholder="ค้นหาเรื่องที่สนใจ"
          name=""
          id=""
          class="w-full text-white outline-0"
        />
      </div>
    </div>

    <ul class="flex flex-col gap-3 sm:flex-row">
      <li v-for="menulist in menulists" class="w-full">
        <RouterLink :to="menulist.path" :class="menulist.style">{{
          menulist.message
        }}</RouterLink>
      </li>
    </ul>
  </aside>

  <aside
    v-else
    class="hidden flex-col gap-4 border-b border-[#ffa31c] bg-[#0f0f0f] px-8 py-6 sm:flex sm:py-4 lg:hidden"
  >
    <ul class="flex flex-col gap-3 sm:flex-row">
      <li v-for="menulist in menulists" class="w-full">
        <RouterLink :to="menulist.path" :class="menulist.style">
          {{ menulist.message }}
        </RouterLink>
      </li>
    </ul>
  </aside>
</template>
