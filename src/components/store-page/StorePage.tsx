import { FC, memo, PropsWithChildren } from "react";
import styles from "./StorePage.module.css";

interface StorePageProps {}

const StorePage: FC<PropsWithChildren<StorePageProps>> =({children}) => {
  return (
    <div className={styles.store}>{children}</div>
  )
}

export default memo(StorePage);
