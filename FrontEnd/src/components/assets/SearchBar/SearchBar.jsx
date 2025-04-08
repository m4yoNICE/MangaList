import { useState, useRef } from "react";
import axios from "axios";
import styles from "./SearchBar.module.css";

const SearchBar = ({ onResults }) => {
  const inputRef = useRef();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const query = inputRef.current.value;
    if (!query) return;

    setLoading(true);
    try {
      const resp = await axios.get(
        `/api/manga/search?title=${encodeURIComponent(query)}`
      );
      onResults(resp.data.mangaDetails); // adjust if your API returns differently
    } catch (error) {
      console.error("Error fetching manga details:", error);
      onResults([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.searchBar}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          ref={inputRef}
          type="search"
          placeholder="Search Mangas"
          className={styles.input}
          required
        />
        <button type="submit" className={styles.button}>
          Search Manga
        </button>
      </form>
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default SearchBar;
