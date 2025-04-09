import React from "react";
import Card from "../components/assets/Card/MangaCard.jsx"; // Component for displaying a manga card
import Footer from "../components/Footer/Footer.jsx";

const Home = ({ mangaList }) => {
  return (
    <>
      <main>
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
