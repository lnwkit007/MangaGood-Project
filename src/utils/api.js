import axios from "axios";

const apiManga = axios.create({
  baseURL: import.meta.env.VITE_API_MANGA,
  timeout: 5000,
});

export { apiManga };