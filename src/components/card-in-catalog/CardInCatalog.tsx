import { FC, memo, PropsWithChildren } from "react";
import Rating from "../rating/Rating";
import styles from "./CardInCatalog.module.css";


interface CardInCatalogProps {
  index: number;
  img: any; //string;
  name: string;
  price: number;
  rating: number;
}

const CardInCatalog: FC<PropsWithChildren<CardInCatalogProps>> = ({index, img, name, price, rating}) => {
  return (
    <div className={styles.card}>
      <img src={`../../assets/${img}`} alt="img" className={styles.img} />
      <div className={styles.info}>
        <div className={styles.row}>
          <div className={styles.name}>{name}</div>
          <div className={styles.price}>{price} ₽</div>
        </div>
        <div className={styles.row}>
          <div className={styles.rating}>
            <Rating rating={rating} />
          </div>
          <button className={styles.button}>Купить</button>
        </div>
      </div>
    </div>
  )
}

export default memo(CardInCatalog);
