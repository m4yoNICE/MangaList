const express = require("express");
const router = express.Router();
const mangaController = require("../controllers/mangaController");

// Read External Operations
router.get("/search", mangaController.getExternalMangaDetails);




// Read operations
router.get("/", mangaController.getAllManga); // Only one GET for /

// // Specific manga by ID
// router.get("/:id", mangaController.getMangaById);

// // // Write operations
router.post("/", mangaController.createManga); // POST /api/manga
// // router.put("/:id", mangaController.updateManga); // PUT /api/manga/:id
// // router.delete("/:id", mangaController.deleteManga); // DELETE /api/manga/:id

module.exports = router;
