import { useState, useRef } from "react";
import Api from "../../../services/Api.js";
import styles from "./SearchBar.module.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const SearchBar = ({ onSearch, loading }) => {
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = inputRef.current.value;
    onSearch(query);
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.searchForm}>
        <input ref={inputRef} type="search" className={styles.inputField} />
        <button className={styles.button} type="submit">
          {loading ? <span>Loading...</span> : <SearchOutlinedIcon />}
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
