import {Router} from 'raect-router-dom'
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Manga from "./components/Manga/Manga.jsx";
import Card from "./components/Card/Card.jsx";

function App() {
  return (
    <>
    <Router>
      <Routes>
      <Header />
      <Card />
      <Card />
      <Card />
      <Footer />
      </Routes>
    </Router>
    </>
  );
}

export default App;
