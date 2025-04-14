import React, { useState, useEffect } from "react";
import Card from "../components/assets/Card/MangaCard.jsx";
import SearchBar from "../components/assets/SearchBar/SearchBar.jsx";
import Api from "../services/Api.js";

const Home = () => {
  const [mangaList, setMangaList] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchManga = async (title) => {
    setLoading(true);
    try {
      const res = await Api.getManga(title);
      setMangaList(res.data.mangaDetails);
    } catch (err) {
      console.error("Error fetching manga details:", err);
    } finally {
      setLoading(false);
    }
  };

  //supposedly what it does is to display all manga From The Start by laufey
  const fetchAllManga = async () => {
    try {
      const title = "";
      const res = await Api.getManga(title);
      setMangaList(res.data.mangaDetails);
    } catch (err) {
      console.error("Failed to fetch manga list:", err);
    }
  };

  const saveManga = async (manga) => {
    const controller = new AbortController();
    const mangaData = {
      title: manga.title,
      author: manga.author,
      description: manga.description,
      imageUrl: manga.imgUrl,
    };
    try {
      await Api.createManga(mangaData, controller);
      alert("Manga saved successfully!");
      console.log("Manga added to list!");
    } catch (error) {
      console.error("Error POST data:", error);
    }
  };

  useEffect(() => {
    fetchAllManga();
  }, []);

  return (
    <>
      <main>
        <SearchBar onSearch={searchManga} loading={loading} />
        <div>
          {mangaList.length > 0 ? (
            mangaList.map((manga) => (
              <Card key={manga.id} manga={manga} onSave={saveManga} />
            ))
          ) : (
            <p>No results found.</p>
          )}
        </div>
      </main>
    </>
  );
};

export default Home;
