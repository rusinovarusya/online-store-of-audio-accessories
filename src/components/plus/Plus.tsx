import { FC, memo } from "react";
import styles from "./Plus.module.css";


const Plus: FC = () => {
  return (
    <div className={styles.plus}></div>
  );
}

export default memo(Plus);
