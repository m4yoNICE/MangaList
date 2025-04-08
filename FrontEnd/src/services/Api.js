// src/services/Api.js
import Http from "./Http";

const getManga = (controller) => {
  // Update the path to match your Vite proxy
  return Http.get("/api/manga/search", { signal: controller?.signal });
};

export default { getManga };
