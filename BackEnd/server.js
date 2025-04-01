const express = require("express");
const cors = require("cors");
const mangaRoutes = require("./routes/manga");

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Configure CORS to allow requests from your frontend
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// Mount the manga routes on /api/manga
app.use("/api/manga", mangaRoutes);

app.listen(3000, () => console.log("Server running on port 3000"));
