import { FC, memo, PropsWithChildren } from "react";
import styles from "./Catalog.module.css";


interface CatalogProps {}

const Catalog: FC<PropsWithChildren<CatalogProps>> = ({children}) => {
  return (
    <div className={styles.catalog}>{children}</div>
  )
}

export default memo(Catalog);
