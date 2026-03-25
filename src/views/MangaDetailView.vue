<script setup>
import { onMounted } from "vue";
import { RouterLink } from "vue-router";

// import components
import Loadding from "../components/Loadding.vue";
import Error from "../components/Error.vue";

// import composables
import { useMangaDetail } from "../composables/useManga";
const { mangaData, listChapters, error, loading, fetchMagaDetail } = useMangaDetail();

const props = defineProps({
  book_ID: String,
});

onMounted(() => {
  fetchMagaDetail(props.book_ID);
});
</script>

<template>
  <Error v-if="error" :error="error" />

  <section v-else class="min-h-screen pt-8 pb-13 sm:pt-10 sm:pb-15">
    <div v-if="loading" class="flex h-screen items-center justify-center">
      <Loadding />
    </div>

    <div v-else>
      <div class="mx-auto max-w-330 px-4">
        <div class="flex flex-col gap-4">
          <div
            class="flex flex-col items-center gap-8 lg:flex-row lg:items-start"
          >
            <div class="max-h-[314px] max-w-[224px]">
              <img
                v-if="mangaData?.book_cover?.fileName"
                :src="`https://image.readrealm.co/${mangaData.book_cover.fileName}`"
                :alt="mangaData?.book_subject"
                class="h-full w-full rounded-lg"
              />
            </div>

            <div class="flex flex-col">
              <h1
                class="mb-6 text-center text-2xl font-bold text-white lg:text-left"
              >
                {{ mangaData.book_subject }}
              </h1>

              <div class="mb-4 flex justify-center gap-4 lg:justify-start">
                <span class="flex gap-1">
                  <span class="pi pi-list text-white"></span>
                  <p class="text-sm font-medium text-white">
                    {{ mangaData?.book_chapter_count }}
                  </p>
                </span>

                <span class="flex gap-1">
                  <span class="pi pi-eye text-white"></span>
                  <p class="text-sm font-medium text-white">
                    {{ mangaData?.book_views }}
                  </p>
                </span>
              </div>

              <p
                class="mb-4 text-center text-base font-medium text-white lg:text-start"
              >
                {{ mangaData?.book_synopsis }}
              </p>

              <div class="flex justify-center gap-2 lg:justify-start">
                <p
                  v-for="Tag in mangaData?.book_tag"
                  class="rounded-2xl border border-white px-4 text-center text-base font-medium text-white"
                >
                  # {{ Tag }}
                </p>
              </div>
            </div>
          </div>

          <div class="mt-8">
            <h2 class="text-xl font-bold text-white">สารบัญ</h2>
            <p class="text-[#9A9A9A]">{{ mangaData.book_chapter_count }} ตอน</p>

            <div
              class="scrollbar-custom mt-4 h-[500px] overflow-hidden overflow-y-scroll rounded-2xl border border-[#222222]"
            >
              <div
                v-for="listChapter in listChapters"
                class="group border-b border-b-[#9A9A9A] px-4 py-1.5 hover:bg-[#222222]"
              >
                <RouterLink to="/">
                  <p class="font-medium text-white group-hover:text-[#ffa31c]">
                    {{ listChapter.book_chapter_title }}
                  </p>
                  <p class="text-[#9A9A9A]">
                    {{ listChapter.book_chapter_publish }}
                  </p>
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
