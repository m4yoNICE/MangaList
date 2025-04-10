const express = require("express");
const cors = require("cors");
const mangaRoutes = require("./routes/manga");

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/api/manga", mangaRoutes);

app.listen(3000, () => console.log("Server running on port 3000"));
