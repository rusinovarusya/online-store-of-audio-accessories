import { FC, memo } from "react";
import InputNumber from "../input-number/InputNumber";
import styles from "./CardInShoppingCart.module.css";


const CardInShoppingCart: FC = () => {
  return (
    <div className={styles.card}>
      <div className={styles.initialBlock}>
        <div className={styles.mainBlock}>
          <img src="" alt="" className={styles.img} />
          <div className={styles.informationBlock}>
            <div className={styles.name}>Name</div>
            <div className={styles.price}>1 ₽</div>
          </div>
        </div>
        <InputNumber />
      </div>
      <div className={styles.finalBlock}>
        <div className={styles.delete}></div>
        <div className={styles.cost}>1 ₽</div>
      </div>
    </div>
  )
}

export default memo(CardInShoppingCart);
