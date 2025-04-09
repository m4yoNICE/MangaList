import { useState, useRef } from "react";
import axios from "axios";
import styles from "./SearchBar.module.css";
import { TextField, Button, Box, CircularProgress } from "@mui/material";
import { IconButton } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

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
