import { FC, memo } from "react";
import styles from "./Total.module.css";


const Total: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.div}>
        <span className={styles.title}>Итого</span>
        <div className={styles.totalCost}>₽ 1</div>
      </div>
      <button className={styles.button}>Перейти к оформлению</button>
    </div>
  )
}

export default memo(Total);
