import Image from "next/image";
import styles from "./Carousel.module.css";

const Card = () => {
  return (
    <>
      <a className={styles.card}>
        <Image alt="news" src="" className="w-1000 h-500" />
        <div>
          <p></p>
        </div>
      </a>
    </>
  );
};
export default Card;
