import { FC, memo, PropsWithChildren, useState } from "react";
import { getHeadphonesData, getWirelessHeadphonesData } from "../../getData";
import Rating from "../rating/Rating";
import styles from "./CardInCatalog.module.css";


interface CardInCatalogProps {
  index: number;
  type: string;
}

const CardInCatalog: FC<PropsWithChildren<CardInCatalogProps>> = ({ index, type }) => {
  const { img, name, price, rating } = (type === "wireless") ? getWirelessHeadphonesData(index) : getHeadphonesData(index);
  
  const onClick = () => {
    sessionStorage.setItem(type + index, `${sessionStorage.getItem(type + index) || 0 + 1}`);
  }

  return (
    <div className={styles.card}>
      <img src={`/images/${img}`} alt="headphones img" className={styles.img} />
      <div className={styles.info}>
        <div className={styles.row}>
          <div className={styles.name}>{name}</div>
          <div className={styles.price}>{price} ₽</div>
        </div>
        <div className={styles.row}>
          <div className={styles.rating}>
            <Rating rating={rating} />
          </div>
          <button className={styles.button} onClick={onClick}>Купить</button>
        </div>
      </div>
    </div>
  )
}

export default memo(CardInCatalog);
