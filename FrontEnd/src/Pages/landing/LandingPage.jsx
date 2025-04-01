import Card from "../../components/assets/Card/Card.jsx";
import Search from "../../components/assets/SearchBar/SearchBar.jsx";

const LandingPage = () => {
  return (
    <>
      <main>
        <Search />
        <h1>Welcome to Mangananggal</h1>
        <h2>The Manga List App</h2>
        <Card />
      </main>
    </>
  );
};

export default LandingPage;
