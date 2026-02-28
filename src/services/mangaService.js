import apiManga from "./api";

export default {
    getMangas() {
        return apiManga.get('/');
    },
    getManga(id) {
        return apiManga.get(`/{$id}`);
    }
};