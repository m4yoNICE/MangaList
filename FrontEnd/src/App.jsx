import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import HomePage from "./Pages/Home.jsx";
import AboutPage from "./Pages/About.jsx";
import MyList from "./Pages/MyList.jsx";


function App() {
  const [mangaList, setMangaList] = useState([]);

  const handleSearchResults = (results) => {
    setMangaList(results);
  };

  return (
    <BrowserRouter>
      <Header onResults={handleSearchResults} />
      <Routes>
        <Route path="/" element={<HomePage mangaList={mangaList} />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/myList" element={<MyList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
