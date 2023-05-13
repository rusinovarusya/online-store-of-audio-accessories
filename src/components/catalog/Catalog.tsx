import { FC, memo, PropsWithChildren } from "react";
import styles from "./Catalog.module.css";


const Catalog: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <main className={styles.catalog}>
      {children}
    </main>
  );
}

export default memo(Catalog);
