import axios from "axios";

const apiManga = axios.create({
    baseURL: import.meta.env.VITE_API_VITE_API_MANGA
});

export default apiManga;