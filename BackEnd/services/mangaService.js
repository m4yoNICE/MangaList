const axios = require("axios");

const baseURL = "https://api.mangadex.org/manga";

// Fetch all manga data from the external API
exports.fetchAllManga = async () => {
  const response = await axios.get(baseURL, {
    headers: { "User-Agent": "Mozilla/5.0" },
  });
  return response.data;
};

// Fetch a specific manga by its ID from the external API
exports.fetchMangaById = async (id) => {
  const url = `${baseURL}/${id}`;
  const response = await axios.get(url, {
    headers: { "User-Agent": "Mozilla/5.0" },
  });
  return response.data;
};
