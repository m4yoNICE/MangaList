import { useState, useRef } from "react";
import Api from "../../../services/Api.js";
import styles from "./SearchBar.module.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const SearchBar = ({ onResults }) => {
  const inputRef = useRef();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const query = inputRef.current.value;
    if (!query) return;

    setLoading(true);
    const controller = new AbortController();

    try {
      const resp = await Api.getManga(query, controller);
      onResults(resp.data.mangaDetails);
    } catch (error) {
      console.error("Error fetching manga details:", error);
      onResults([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.searchForm}>
        <input
          ref={inputRef}
          type="search"
          className={styles.inputField}
          required
        />
        <button type="submit" className={styles.button}>
          {loading ? <span>Loading...</span> : <SearchOutlinedIcon />}
        </button>
      </form>
    </div>
  );
};

export default SearchBar;