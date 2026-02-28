<script setup>
import { RouterLink } from "vue-router";
// import { ref, onMounted } from "vue";
</script>

<template>
  <section class="text-white">
    <div
      class="flex justify-between rounded-t-2xl border-b border-white bg-[#0f0f0f] px-4 py-2"
    >
      <span class="inline-block">
        <h2 class="text-lg">โรแฟนมังงะ by MangaKimi</h2>
      </span>

      <span class="group inline-block">
        <RouterLink to="/" class="group-hover:text-[#ffa31c]">
          ดูทั้งหมด
        </RouterLink>
      </span>
    </div>

    <div class="rounded-b-2xl bg-[#0f0f0f] p-4">
      <div class="col-4 grid grid-cols-4 gap-2">
        <RouterLink to="" class="border border-white text-white">
          <img src="" alt="" />
          <h3>The Seven</h3>
        </RouterLink>
        <div class="border border-white text-white">items</div>
        <div class="border border-white text-white">items</div>
        <div class="border border-white text-white">items</div>
        <div class="border border-white text-white">items</div>
      </div>
    </div>
  </section>
</template>
