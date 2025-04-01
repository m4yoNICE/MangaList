import { useState, useEffect, useRef } from "react";
import axios from "axios";
import styles from "./SearchBar.module.css";

const SearchBar = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchTerm = inputRef.current.value;
    setLoading(true);
  };

  return (
    <div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor="default-search" className={styles.hiddenLabel}>
          Search
        </label>
        <div className={styles.relativeContainer}>
          <div className={styles.iconContainer}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            ref={inputRef}
            type="search"
            id="search-input"
            placeholder="Search Mangas"
            aria-label="Search manga titles"
            required
            className={styles.input}
          />
          <button type="submit" className={styles.button}>
            Search Manga
          </button>
        </div>
      </form>

      {loading && <p>Loading...</p>}

      {data && (
        <div>
          <h3>Search Results:</h3>
          {data?.results?.length > 0 ? (
            <ul>
              {data.results.map((manga) => (
                <li key={manga.id}>
                  <h4>{manga.title}</h4>
                  <img src={manga.image_url} alt={manga.title} />
                </li>
              ))}
            </ul>
          ) : (
            <p>No results found</p>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
