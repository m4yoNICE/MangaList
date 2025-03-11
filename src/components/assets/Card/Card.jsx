import profilePic from "../pics/yunjincute.jpg";
import styles from "./Card.module.css";

function Card() {
  return (
    <div className={styles.card}>
      {/*<img src={profilePic} alt="profile pciture "></img> */}
      <img
        className={styles.cardImage}
        src="https://preview.redd.it/yunjin-by-%E3%81%BD%E3%81%88-v0-zeqxfmxsf9ne1.jpeg?width=1080&crop=smart&auto=webp&s=292e86b2229a01050d94a60678470c9186aeca22"
        alt="profile pciture "
      ></img>
      <h2 className={styles.cardTitle}>Yun Jin</h2>
      <p className={styles.cardText}>
        A famous figure in Liyue Harbor's opera scene, Yun Jin is the director
        of the Yun-Han Opera Troupe, and performs at Heyu Tea House from time to
        time. She is also a playwright, having written all the plays the Yun-Han
        Opera Troupe has performed in recent years, including a new ending for
        "The Divine Damsel of Devastation."
      </p>
    </div>
  );
}

export default Card;
