import { FC, memo, PropsWithChildren } from "react";
import { getHeadphonesData, getWirelessHeadphonesData } from "../../getData";
import InputNumber from "../input-number/InputNumber";
import styles from "./CardInShoppingCart.module.css";


interface CardInShoppingCartProps {
  index: number;
  type: string;
}

const CardInShoppingCart: FC<PropsWithChildren<CardInShoppingCartProps>> = ({ index, type }) => {
  const { img, name, price, rating } = (type === "wireless") ? getWirelessHeadphonesData(index) : getHeadphonesData(index);

  return (
    <div className={styles.card}>
      <div className={styles.initialBlock}>
        <div className={styles.mainBlock}>
          <img src={`/images/${img}`} alt="headphones img" className={styles.img} />
          <div className={styles.informationBlock}>
            <div className={styles.name}>{name}</div>
            <div className={styles.price}>{price} ₽</div>
          </div>
        </div>
        <InputNumber />
      </div>
      <div className={styles.finalBlock}>
        <div className={styles.delete}></div>
        <div className={styles.cost}>{price} ₽</div>
      </div>
    </div>
  )
}

export default memo(CardInShoppingCart);
