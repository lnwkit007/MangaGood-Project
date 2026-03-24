<script setup>
defineProps({
  error: String,
});
</script>

<template>
  <section
    class="flex min-h-screen flex-col items-center justify-center gap-4 border"
  >
    <img
      src="/images/status/ServerError.png"
      alt="ServerError.png"
      class="ml-2 w-[120px] sm:w-[220px]"
    />
    <p class="text-2xl font-semibold text-amber-300 sm:text-3xl">
      {{ error }}
    </p>
  </section>
</template>
