<script setup>
import { RouterLink } from "vue-router";

const menulists = [
  {
    path: "/",
    style: "text-base font-bold text-white group-hover:text-[#ffa31c]",
    message: "หน้าหลัก",
  },
  {
    path: "/",
    style: "text-base font-bold text-white group-hover:text-[#ffa31c]",
    message: "อนิเมะญี่ปุ่น",
  },
  {
    path: "/",
    style: "text-base font-bold text-white group-hover:text-[#ffa31c]",
    message: "อนิเมะเกาหลี",
  },
  {
    path: "/",
    style: "text-base font-bold text-white group-hover:text-[#ffa31c]",
    message: "อนิเมะจีน",
  },
];
</script>

<template>
  <nav class="w-full bg-[#0f0f0f] px-4 py-4">
    <div
      class="mx-auto flex w-full max-w-330 items-center justify-between py-2"
    >
      <div class="flex items-center">
        <RouterLink to="/">
          <h1 class="px-4 py-2 text-2xl font-bold text-white md:text-4xl">
            MANGAGOOD
          </h1>
        </RouterLink>

        <ul class="ml-1 hidden lg:flex lg:gap-4">
          <li v-for="menulist in menulists" class="group px-4 py-2">
            <RouterLink :to="menulist.path" :class="menulist.style">
              {{ menulist.message }}
            </RouterLink>
          </li>
        </ul>
      </div>

      <div class="hidden lg:inline">
        <div class="flex items-center gap-2 rounded-3xl bg-[#1c1c1c] px-3 py-2">
          <span class="pi pi-search text-[#ffa31c]"></span>

          <input
            type="search"
            placeholder="ค้นหาเรื่องที่สนใจ"
            name=""
            id=""
            class="text-white outline-0"
          />
        </div>
      </div>

      <button
        class="flex items-center gap-2 rounded-sm px-4 py-2 outline-3 outline-[#ffa31c] lg:hidden"
      >
        <span class="pi pi-bars text-[#ffa31c]"></span>
        <p class="text-base font-bold text-[#ffa31c]">MEMU</p>
      </button>
    </div>
  </nav>
</template>
