import React from "react";
import styles from "./MangaCard.module.css";
import Api from "../../../services/Api.js";

const MangaCard = ({ manga }) => {
  const SaveClick = async (e) => {
    const controller = new AbortController();
    const mangaData = {
      title: manga.title,
      author: manga.author,
      description: manga.description,
      imageUrl: manga.imgUrl,
    };
    try {
      const resp = await Api.createManga(mangaData, controller);
      console.log("Manga added to list!");
    } catch (error) {
      console.error("Error POST data:", error);
    }
  };
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
        <button className={styles.button} onClick={SaveClick}>
          Save To List
        </button>
      </div>
    </div>
  );
};

export default MangaCard;
