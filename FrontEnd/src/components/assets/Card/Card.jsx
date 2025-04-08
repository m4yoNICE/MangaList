import styles from "./Card.module.css";

const Card = ({ manga }) => {
  return (
    <div className={styles.card}>
      <img className={styles.cardImage} src={manga.imgUrl} alt={manga.title} />
      <h2 className={styles.cardTitle}>{manga.title}</h2>
      <p className={styles.cardText}>
        {manga.description || "No description available."}
      </p>
      <p className={styles.cardAuthor}>
        <strong>Author:</strong> {manga.author}
      </p>
    </div>
  );
};

export default Card;
