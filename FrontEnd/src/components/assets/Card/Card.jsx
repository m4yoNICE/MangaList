import { useEffect, useState } from "react";
import styles from "./Card.module.css";
import Api from "../../../services/Api";

const Card = () => {
  const [manga, setManga] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    Api.getManga(controller)
      .then((response) => {
        if (response.data.data.length > 0) {
          setManga(response.data.data[0]); // Fetch the first manga entry
        }
        setLoading(false);
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          setError("Failed to fetch manga data.");
          setLoading(false);
        }
      });
    return () => controller.abort();
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>failed</p>;

  return (
    <div className={styles.card}>
      <img
        className={styles.cardImage}
        src={manga.images.jpg.image_url}
        alt={manga.title}
      />
      <h2 className={styles.cardTitle}>{manga.title}</h2>
      <p className={styles.cardText}>
        {manga.synopsis || "No synopsis available."}
      </p>
    </div>
  );
};

export default Card;
