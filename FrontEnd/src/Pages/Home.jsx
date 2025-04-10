import React, { useState } from "react";
import Card from "../components/assets/Card/MangaCard.jsx";
import SearchBar from "../components/assets/SearchBar/SearchBar.jsx";

const Home = () => {
  const [mangaList, setMangaList] = useState([]);

  const handleSearchResults = (results) => {
    setMangaList(results);
  };

  return (
    <>
      <main>
        <SearchBar onResults={handleSearchResults} />
        <div>
          {mangaList.length > 0 ? (
            mangaList.map((manga) => <Card key={manga.id} manga={manga} />)
          ) : (
            <p>No results found.</p>
          )}
        </div>
      </main>
    </>
  );
};

export default Home;
