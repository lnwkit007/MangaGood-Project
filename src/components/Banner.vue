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
    src: "/images/5e6e271af5829b46e47946499986e7db.jpg",
  },
  {
    name: "Banner2",
    src: "/images/3cd4c52b983e92fd279af69483145209.jpg",
  },
  {
    name: "Banner3",
    src: "/images/9d884b77cd1ae9ab86e1995cf90d2439.jpg",
  },
  {
    name: "Banner4",
    src: "/images/ca484aa2563131f7d5d28d9d0fd7cbd4.jpg",
  },
  {
    name: "Banner5",
    src: "/images/e9cf92aa60f69a533ce2122776c43000.jpg",
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
