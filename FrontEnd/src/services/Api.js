import Http from "./Http";

const getManga = (title = "") => {
  if (title.trim() === "") {
    return Http.get("/api/manga/search");
  }
  return Http.get(`/api/manga/search?title=${encodeURIComponent(title)}`); // Search by title if provided
};

const getAllSavedManga = (controller) => {
  return Http.get("/api/manga", { signal: controller?.signal });
};

const createManga = (mangaData, controller) => {
  return Http.post("/api/manga", mangaData, {
    signal: controller?.signal,
  });
};

const deleteManga = (id, controller) => {
  return Http.delete("/api/manga/" + id, {
    signal: controller?.signal,
  });
};

const updateManga = (id, controller) => {
  return Http.put("/api/manga/" + id, { signal: controller?.signal });
};
export default {
  getManga,
  getAllSavedManga,
  createManga,
  deleteManga,
  updateManga,
};
