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
    //For When Opening the app
    if (!title || title.trim() === "") {
      const mangaDetails = await fetchMangaDetailsByTitle(title);
      return res.json({ mangaDetails });
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

// DELETE /api/manga - create a manga in the database
exports.deleteManga = async (req, res) => {
  const id = req.params.id;
  const query = "DELETE FROM manga WHERE id = ?";
  try {
    await pool.query(query, id);
    res.status(201).json({ message: "Manga added to list!" });
  } catch (error) {
    res.status(500).json({ error: "Error adding manga to list" });
  }
};

// PUT /api/manga/:id - Update a manga in the database
//also di jd ko nako ni i butang sa frontend for a couple of reasons:
/*  
1) It doesnt make sense oh having to edit a data from an external API
2) It loses data integrity 
3) It loses any meaning of having an external API when
  you're gonna change it anyways
4) Kapoy
5) Walay time
6) Di ko ka make sense unsay flow sa i edit ang data sa card
7) Kay miss nako siya nya di ko gusto ako siya ibiya 🥺🥺🥺🥺🥺
*/
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
