const axios = require("axios");

const baseURL = "https://api.mangadex.org/manga";

// Fetch all manga from the database
exports.fetchAllManga = async () => {
  return new Promise((resolve, reject) => {
    const sql = "SELECT * FROM manga";
    db.query(sql, (err, results) => {
      if (err) {
        return reject(err);
      }
      resolve(results);
    });
  });
};

// GET /api/manga/:id - Retrieve a specific manga by ID from the database
exports.getMangaById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await mangaService.fetchMangaById(id);
    if (!data) {
      return res.status(404).json({ error: "Manga not found" });
    }
    res.json(data);
  } catch (error) {
    console.error("Error fetching manga by ID:", error);
    res.status(500).json({ error: "Failed to fetch manga by ID" });
  }
};