import SavedCard from "../components/assets/Card/SavedMangaCard.jsx";
import React, { useState, useEffect } from "react";
import Api from "../services/Api.js";

const MyList = () => {
  const [mangaList, setMangaList] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const fetchManga = async () => {
      try {
        const res = await Api.getAllSavedManga(controller);
        setMangaList(res.data);
      } catch (err) {
        console.error("Failed to fetch manga list:", err);
      }
    };
    fetchManga();
    return () => controller.abort();
  }, []);

  return (
    <>
      <h1>Your Saved Manga</h1>
      <div>
        {mangaList.length > 0 ? (
          mangaList.map((manga) => <SavedCard key={manga.id} manga={manga} />)
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </>
  );
};

export default MyList;
