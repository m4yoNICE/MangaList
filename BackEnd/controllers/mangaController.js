const mangaService = require("../services/mangaService");
const {
  fetchMangaIdsByTitle,
  fetchMangaDetailsByTitle,
} = require("../services/mangaExternalService");

// GET /api/manga/search
exports.getExternalMangaDetails = async (req, res) => {
  try {
    const { title } = req.query;
    if (!title) {
      return res.status(400).json({ error: "Title is required" });
    }

    const mangaDetails = await fetchMangaDetailsByTitle(title);
    res.json({ mangaDetails });
  } catch (error) {
    console.error("Error fetching manga details:", error);
    res.status(500).json({ error: "Failed to fetch manga details" });
  }
};

// GET /api/manga - Retrieve all manga from the database
exports.getAllManga = async (req, res) => {
  try {
    const data = await mangaService.fetchAllManga();
    res.json(data);
  } catch (error) {
    console.error("Error fetching manga data:", error);
    res.status(500).json({ error: "Failed to fetch manga data" });
  }
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

// POST /api/manga - Create a new manga in the database
exports.createManga = async (req, res) => {
  try {
    const { title, author, description, genres, imageUrl } = req.body;
    const sql =
      "INSERT INTO manga (title, author, description, genres, imageUrl) VALUES (?, ?, ?, ?, ?)";
    const values = [title, author, description, genres, imageUrl];

    db.query(sql, values, (err, result) => {
      if (err) {
        console.error("Error inserting manga:", err);
        return res.status(500).json({ error: "Failed to create manga" });
      }
      res.status(201).json({ message: "Manga created", id: result.insertId });
    });
  } catch (error) {
    console.error("Error in createManga:", error);
    res.status(500).json({ error: "Failed to create manga" });
  }
};


// PUT /api/manga/:id - Update a manga in the database
exports.updateManga = async (req, res) => {
  try {
    const id = req.params.id;
    const { title, author, description, genres, imageUrl } = req.body;
    const sql =
      "UPDATE manga SET title = ?, author = ?, description = ?, genres = ?, imageUrl = ? WHERE id = ?";
    const values = [title, author, description, genres, imageUrl, id];

    db.query(sql, values, (err, result) => {
      if (err) {
        console.error("Error updating manga:", err);
        return res.status(500).json({ error: "Failed to update manga" });
      }
      if (result.affectedRows === 0) {
        return res.status(404).json({ error: "Manga not found" });
      }
      res.json({ message: "Manga updated" });
    });
  } catch (error) {
    console.error("Error in updateManga:", error);
    res.status(500).json({ error: "Failed to update manga" });
  }
};

// DELETE /api/manga/:id - Delete a manga from the database
exports.deleteManga = async (req, res) => {
  try {
    const id = req.params.id;
    const sql = "DELETE FROM manga WHERE id = ?";

    db.query(sql, [id], (err, result) => {
      if (err) {
        console.error("Error deleting manga:", err);
        return res.status(500).json({ error: "Failed to delete manga" });
      }
      if (result.affectedRows === 0) {
        return res.status(404).json({ error: "Manga not found" });
      }
      res.json({ message: "Manga deleted" });
    });
  } catch (error) {
    console.error("Error in deleteManga:", error);
    res.status(500).json({ error: "Failed to delete manga" });
  }
};
