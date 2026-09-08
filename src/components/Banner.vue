<script setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

const ImagesBanners = [
  {
    name: "Banner1",
    src: "/images/banner/banner-1.png",
  },
  {
    name: "Banner2",
    src: "/images/banner/banner-2.png",
  },
  {
    name: "Banner3",
    src: "/images/banner/banner-3.png",
  }
];
</script>

<template>
  <swiper :pagination="true" :autoplay="{ delay: 2000, disableOnInteraction: false, }" :modules="[Pagination, Autoplay]" class="mySwiper">
    <swiper-slide v-for="ImagesBanner in ImagesBanners">
      <img
        :src="ImagesBanner.src"
        :alt="ImagesBanner.name"
        class="h-full max-h-155 w-full rounded-2xl object-cover object-center"
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
