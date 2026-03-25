<script setup>
import { provide, ref } from "vue";
import { RouterLink } from "vue-router";

// import components
import Sidebar from "./Sidebar.vue";

const stateNavbar = ref(false);

const UpdateSateNavbar = () => {
  stateNavbar.value = !stateNavbar.value;
  console.log(stateNavbar.value);
};

const menulists = [
  {
    path: "/",
    style:
      "font-base flex w-full justify-center py-2 text-base text-white group-hover:text-[#ffa31c] sm:py-0 lg:font-bold",
    message: "หน้าหลัก",
  },
  {
    path: "/",
    style:
      "font-base flex w-full justify-center py-2 text-base text-white group-hover:text-[#ffa31c] sm:py-0 lg:font-bold",
    message: "นิยาย",
  },
  {
    path: "/",
    style:
      "font-base flex w-full justify-center py-2 text-base text-white group-hover:text-[#ffa31c] sm:py-0 lg:font-bold",
    message: "มังงะ",
  },
  {
    path: "/",
    style:
      "font-base flex w-full justify-center py-2 text-base text-white group-hover:text-[#ffa31c] sm:py-0 lg:font-bold",
    message: "อนิเมะ",
  },
];

provide("StateNavbar", {
  stateNavbar,
  menulists,
});
</script>

<template>
  <nav class="w-full border-b border-[#ffa31c] bg-[#0f0f0f] px-4 py-4">
    <div
      class="mx-auto flex w-full max-w-330 items-center justify-between py-2"
    >
      <div class="flex items-center">
        <RouterLink to="/">
          <h1 class="px-4 py-2 text-2xl font-bold sm:text-4xl">
            <span class="text-white">MANGA</span>
            <span class="text-[#ffa31c]">GOOD</span>
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

      <div class="hidden sm:inline">
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
        @click="UpdateSateNavbar"
        class="flex items-center gap-2 rounded-sm px-4 py-2 outline-3 outline-[#ffa31c] sm:hidden"
      >
        <span v-if="!stateNavbar" class="pi pi-bars text-[#ffa31c]"></span>
        <span v-else-if="stateNavbar" class="pi pi-times text-[#ffa31c]"></span>
        <p class="text-base font-bold text-[#ffa31c]">MEMU</p>
      </button>
    </div>
  </nav>
  <Sidebar />
</template>
