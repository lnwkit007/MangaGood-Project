import { ref } from "vue";

// import utils
import { apiManga } from "../utils/api";

export const useMangas = () => {
  const mangaMain = ref([]);
  const mangaList = ref([]);
  const recommended = ref([]);
  const loading = ref(true);
  const error = ref(null);

  const fetchMangas = async () => {
    try {
      const [mangaMainRes, mangaListRes, recommendedRes] = await Promise.all([
        apiManga.get(
          `/getSearchBook?searchText=&searchType=comic&searchCategory=&searchStatus=&searchRating=&searchComicType=&searchSort=update&page=1`,
        ),
        apiManga.get(
          `/getSearchBook?searchText=&searchType=comic&searchCategory=&searchStatus=&searchRating=&searchComicType=&searchSort=update&page=2`,
        ),
        apiManga.get(
          `/getSearchBook?searchText=&searchType=comic&searchCategory=&searchStatus=&searchRating=&searchComicType=&searchSort=update&page=3`,
        ),
      ]);
      mangaMain.value = mangaMainRes.data;
      mangaList.value = mangaListRes.data;
      recommended.value = recommendedRes.data;
    } catch (err) {
      error.value = "ไม่สามารถแสดงข้อมูลได้";
    } finally {
      loading.value = false;
    }
  };

  return { mangaMain, mangaList, recommended, loading, error, fetchMangas };
};

export const useMangaDetail = () => {
  const mangaData = ref([]);
  const listChapters = ref([]);
  const loading = ref(true);
  const error = ref(null);

  const fetchMagaDetail = async (book_ID) => {
    try {
      const [mangaDataRes, listChaptersRes] = await Promise.all([
        apiManga.get(
          `/getBookHomePage?book_type=comic&book_id=${book_ID}`,
        ),
        apiManga.get(
          `/getListChaptersSectionPage?book_type=comic&book_id=${book_ID}&start_index=1&sort=asc`,
        ),
      ]);
      mangaData.value = mangaDataRes.data;
      listChapters.value = listChaptersRes.data.data;
    } catch (err) {
      error.value = "ไม่สามารถแสดงข้อมูลได้";
    } finally {
      loading.value = false;
    }
  };

  return { mangaData, listChapters, error, loading, fetchMagaDetail };
};
