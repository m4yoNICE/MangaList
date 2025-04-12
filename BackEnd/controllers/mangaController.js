const { getAllManga, getManga } = require("../services/mangaService");
const pool = require("../config/db");
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
    const [rows] = await pool.query("SELECT * FROM manga");
    res.json(rows);
  } catch {
    res.status(500).json({ error: "Server error" });
  }
};

// POST /api/manga - create a manga in the database
exports.createManga = async (req, res) => {
  const { title, author, description, imageUrl } = req.body;
  const query =
    "INSERT INTO manga (title, author, description, imageUrl) VALUES (?, ?, ?, ?)";
  try {
    await pool.query(query, [title, author, description, imageUrl]);
    res.status(201).json({ message: "Manga added to list!" });
  } catch (error) {
    res.status(500).json({ error: "Error adding manga to list" });
  }
};

// // GET /api/manga/:id - Retrieve a specific manga by ID from the database
// exports.createManga = (title, author, description, genres, imageUrl) => {
//   return new Promise((resolve, reject) => {
//     const sql =
//       "INSERT INTO manga (title, author, description, genres, imageUrl) VALUES (?, ?, ?, ?, ?)";
//     const values = [title, author, description, genres, imageUrl];
//     db.query(sql, values, (err, result) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(result.insertId);
//       }
//     });
//   });
// };

// // PUT /api/manga/:id - Update a manga in the database
// exports.updateManga = async (req, res) => {
//   try {
//     const id = req.params.id;
//     const { title, author, description, genres, imageUrl } = req.body;
//     const sql =
//       "UPDATE manga SET title = ?, author = ?, description = ?, genres = ?, imageUrl = ? WHERE id = ?";
//     const values = [title, author, description, genres, imageUrl, id];

//     db.query(sql, values, (err, result) => {
//       if (err) {
//         console.error("Error updating manga:", err);
//         return res.status(500).json({ error: "Failed to update manga" });
//       }
//       if (result.affectedRows === 0) {
//         return res.status(404).json({ error: "Manga not found" });
//       }
//       res.json({ message: "Manga updated" });
//     });
//   } catch (error) {
//     console.error("Error in updateManga:", error);
//     res.status(500).json({ error: "Failed to update manga" });
//   }
// };

// // DELETE /api/manga/:id - Delete a manga from the database
// exports.deleteManga = async (req, res) => {
//   try {
//     const id = req.params.id;
//     const sql = "DELETE FROM manga WHERE id = ?";

//     db.query(sql, [id], (err, result) => {
//       if (err) {
//         console.error("Error deleting manga:", err);
//         return res.status(500).json({ error: "Failed to delete manga" });
//       }
//       if (result.affectedRows === 0) {
//         return res.status(404).json({ error: "Manga not found" });
//       }
//       res.json({ message: "Manga deleted" });
//     });
//   } catch (error) {
//     console.error("Error in deleteManga:", error);
//     res.status(500).json({ error: "Failed to delete manga" });
//   }
// };
