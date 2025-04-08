import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import HomePage from "./Pages/Home.jsx";
import AboutPage from "./Pages/About.jsx";
import MyList from "./Pages/MyList.jsx";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/myList" element={<MyList />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
