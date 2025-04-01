const express = require("express");
const router = express.Router();
const mangaController = require("../controllers/mangaController");

// Read operations
router.get("/", mangaController.getAllManga);
router.get("/:id", mangaController.getMangaById);

// Write operations (Not supported because the external API is read-only)
router.post("/", mangaController.createManga);
router.put("/:id", mangaController.updateManga);
router.delete("/:id", mangaController.deleteManga);

module.exports = router;
