import { FC, memo } from "react";
import styles from "./Total.module.css";
import { AppDataContextModel, useAppDataContext } from "../../context/app-data.provider";


const Total: FC = () => {
  const { countTotalCost } = useAppDataContext() as AppDataContextModel;

  return (
    <div className={styles.container}>
      <div className={styles.div}>
        <span className={styles.title}>Итого</span>
        <div className={styles.totalCost}>₽ {countTotalCost()}</div>
      </div>
      <button className={styles.button}>Перейти к оформлению</button>
    </div>
  )
}

export default memo(Total);
