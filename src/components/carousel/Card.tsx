import Image from "next/image";
import styles from "./Carousel.module.css";

const Card = () => {
  return (
    <>
      <a className={styles.card}>
        <Image alt="news" src="" width={1000} height={500} className={styles.cardImg}/>
        <div>
            <p></p>
        </div>
      </a>
    </>
  );
};
export default Card;
