// src/components/assets/Card/MangaCard.jsx
import React from "react";
import styles from "./MangaCard.module.css";

const SavedMangaCard = ({ manga, isSaved, onSaveToggle }) => {
  return (
    <div className={styles.card}>
      <img
        src={manga.imageUrl}
        alt={manga.title}
        className={styles.cardImage}
      />
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
        <button className={styles.button} onClick={() => onEdit(manga.id)}>
          Edit
        </button>
        <button className={styles.button} onClick={() => onDelete(manga.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default SavedMangaCard;
