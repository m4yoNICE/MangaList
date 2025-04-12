const axios = require("axios");
const db = require("../config/db");

async function getAllManga() {
  const [rows] = await db.query("SELECT * FROM manga");
  return rows;
}

async function getManga(id){
  const [rows] = await db.query("SELECT * FROM manga WHERE id = ?", [id]);
  return rows;
}

module.exports = {getAllManga, getManga};
