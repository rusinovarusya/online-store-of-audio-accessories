import { FC, memo, PropsWithChildren } from "react";
import styles from "./Card.module.css";


interface CardProps {
  img: string;
  name: string;
  price: number;
  rating: number;
}

const Card: FC<PropsWithChildren<CardProps>> = ({img, name, price, rating}) => {
  return (
    <div className={styles.card}>
      <img src={`../../assets/${img}`} alt="img" className={styles.img} />
      <div>
        <div className={styles.name}>{name}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <div>
        <div className={styles.rating}>{rating}</div>
        <button>Купить</button>
      </div>
    </div>
  )
}

export default memo(Card);
