<script setup>
const props = defineProps({
  error: String,
});
</script>

<template>
  <section
    class="flex min-h-screen flex-col items-center justify-center gap-4"
  >
    <img
      src="/images/status/ServerError.png"
      alt="ServerError.png"
      class="ml-2 w-[120px] sm:w-[220px]"
    />
    <p class="text-2xl font-semibold text-amber-300 sm:text-3xl">
      {{ props.error }}
    </p>
  </section>
</template>
