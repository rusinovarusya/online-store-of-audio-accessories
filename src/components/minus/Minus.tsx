import { FC, memo } from "react";
import styles from "./Minus.module.css";


const Minus: FC = () => {
  return (
    <div className={styles.minus}></div>
  );
}

export default memo(Minus);
