import React, { useState } from "react";
import SearchBar from "../components/assets/SearchBar/SearchBar.jsx"; // Your search bar component
import Card from "../components/assets/Card/Card.jsx"; // Component for displaying a manga card
import Header from "../components/header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";

const Home = () => {
  const [mangaList, setMangaList] = useState([]);

  const handleSearchResults = (results) => {
    setMangaList(results);
  };

  return (
    <>
      <Header />
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
      <Footer />
    </>
  );
};

export default Home;
