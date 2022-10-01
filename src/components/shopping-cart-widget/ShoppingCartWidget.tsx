import { FC, memo } from "react";
import styles from "./ShoppingCardWidget.module.css";


const ShoppingCardWidget: FC = () => {
  return (
    <div className={styles.widget}></div>
  )
}

export default memo(ShoppingCardWidget);
