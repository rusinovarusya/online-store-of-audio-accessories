import { FC, memo, PropsWithChildren } from "react";
import styles from "./StorePage.module.css";


const StorePage: FC<PropsWithChildren<{}>> =({ children }) => {
  return (
    <div className={styles.storePageBG}>
      <div className={styles.mainContainer}>
        {children}
      </div>
    </div>
  );
}

export default memo(StorePage);
