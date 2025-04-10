// src/components/assets/Card/MangaCard.jsx
import React from "react";
import styles from "./MangaCard.module.css";

const MangaCard = ({ manga, isSaved, onSaveToggle }) => {
  return (
    <div className={styles.card}>
      <img src={manga.imgUrl} alt={manga.title} className={styles.cardImage} />
      <div className={styles.cardContent}>
        <h2 className={styles.cardTitle}>{manga.title}</h2>
        <p className={styles.cardText}>
          {manga.description || "No description available."}
        </p>
        <p className={styles.cardAuthor}>
          <strong>Author:</strong> {manga.author}
        </p>
      </div>
      <div className={styles.cardActions}>
        {isSaved ? (
          <button className={styles.button} onClick={() => onSaveToggle(manga.id)}>
            Unsave
          </button>
        ) : (
          <button className={styles.button} onClick={() => onSaveToggle(manga.id)}>
            Save To List
          </button>
        )}
      </div>
    </div>
  );
};

export default MangaCard;
