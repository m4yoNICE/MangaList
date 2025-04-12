const mysql = require("mysql2");

const pool = mysql
  .createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "mangaDB",
  })
  .promise();

module.exports = pool;
