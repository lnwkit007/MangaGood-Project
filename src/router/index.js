import { createRouter, createWebHistory } from "vue-router";
// import views
import HomeView from "../views/HomeView.vue";
import MangaDetailView from "../views/MangaDetailView.vue";

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
  routes: [
    {
      path: "/",
      name: "HomeView",
      component: HomeView,
    },
    {
      path: "/manga/:book_ID",
      name: "MangaDetailView",
      component: MangaDetailView,
      props: true,
    },
  ],
});

export default router;
