const mangaService = require("../services/mangaService");

// GET /api/manga - Retrieve all manga
exports.getAllManga = async (req, res) => {
  try {
    const data = await mangaService.fetchAllManga();
    res.json(data);
  } catch (error) {
    console.error("Error fetching manga data:", error);
    res.status(500).json({ error: "Failed to fetch manga data" });
  }
};

// GET /api/manga/:id - Retrieve manga by ID
exports.getMangaById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await mangaService.fetchMangaById(id);
    res.json(data);
  } catch (error) {
    console.error("Error fetching manga by ID:", error);
    res.status(500).json({ error: "Failed to fetch manga by ID" });
  }
};

// POST /api/manga - Create manga (Not supported)
exports.createManga = (req, res) => {
  res.status(405).json({
    error: "Create operation not supported. The Jikan API is read-only.",
  });
};

// PUT /api/manga/:id - Update manga (Not supported)
exports.updateManga = (req, res) => {
  res.status(405).json({
    error: "Update operation not supported. The Jikan API is read-only.",
  });
};

// DELETE /api/manga/:id - Delete manga (Not supported)
exports.deleteManga = (req, res) => {
  res.status(405).json({
    error: "Delete operation not supported. The Jikan API is read-only.",
  });
};
