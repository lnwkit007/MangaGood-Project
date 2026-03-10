<script setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const ImagesBanners = [
  {
    name: "Banner1",
    src: "/images/59a52771a2613071728a2079184b22e9.jpg",
  },
  {
    name: "Banner2",
    src: "/images/5e6e271af5829b46e47946499986e7db.jpg",
  },
  {
    name: "Banner3",
    src: "/images/611eaAr2hQL.jpg",
  },
  {
    name: "Banner4",
    src: "/images/922fb40d153d4498eb81e53e82fc5bc8.jpg",
  },
  {
    name: "Banner5",
    src: "/images/fb56aa52d65f39f3a6d2b68fc003d471.jpg",
  },
];
</script>

<template>
  <swiper :pagination="true" :modules="[Pagination]" class="mySwiper">
    <swiper-slide v-for="ImagesBanner in ImagesBanners">
      <img
        :src="ImagesBanner.src"
        :alt="ImagesBanner.name"
        class="h-full max-h-[420px] w-full rounded-2xl object-cover object-center"
      />
    </swiper-slide>
  </swiper>
</template>

<style>
.swiper-pagination-bullet-active {
  background-color: #ffa31c;
  border: 1px solid black;
}
</style>
