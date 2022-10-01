import { FC, memo, PropsWithChildren } from "react";
import styles from "./StorePage.module.css";

interface StorePageProps {}

const StorePage: FC<PropsWithChildren<StorePageProps>> =({children}) => {
  return (
    <div className={styles.storePageBG}>
      <div className={styles.mainContainer}>{children}</div>
    </div>
  )
}

export default memo(StorePage);
