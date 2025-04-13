import SavedCard from "../components/assets/Card/SavedMangaCard.jsx";
import React, { useState, useEffect } from "react";
import Api from "../services/Api.js";

const MyList = () => {
  const [mangaList, setMangaList] = useState([]);

  const fetchManga = async (controller) => {
    try {
      console.log("useEffect triggered for MyList");
      const res = await Api.getAllSavedManga(controller);
      console.log("Fetched data:", res.data);
      setMangaList(res.data);
    } catch (err) {
      if (err.code !== "ERR_CANCELED") {
        console.error("Failed to fetch manga list:", err);
      } else {
        console.log("Fetch was cancelled by cleanup.");
      }
    }
  };

  const DeleteManga = async (id) => {
    const controller = new AbortController();
    try {
      await Api.deleteManga(id, controller);
      console.log("Manga Removed!");
      fetchManga(controller);
    } catch (error) {
      console.error("Error POST data:", error);
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    fetchManga();
    return () => controller.abort();
  }, []);

  return (
    <>
      <h1>Your Saved Manga</h1>
      <div>
        {mangaList.length > 0 ? (
          mangaList.map((manga) => (
            <SavedCard
              key={manga.id}
              manga={manga}
              onDelete={() => DeleteManga(manga.id)}
            />
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </>
  );
};

export default MyList;
