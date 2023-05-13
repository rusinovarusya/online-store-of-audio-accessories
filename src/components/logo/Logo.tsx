import { FC, memo } from "react";
import styles from "./Logo.module.css";


const Logo: FC = () => {
  return (
    <h1 className={styles.logo}>QPICK</h1>
  );
}

export default memo(Logo);
