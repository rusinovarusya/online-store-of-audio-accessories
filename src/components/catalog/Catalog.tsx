import { FC, memo, PropsWithChildren } from "react";
import styles from "./Catalog.module.css";


interface CatalogProps {}

const Catalog: FC<PropsWithChildren<CatalogProps>> = ({children}) => {
  return (
    <main className={styles.catalog}>{children}</main>
  )
}

export default memo(Catalog);
