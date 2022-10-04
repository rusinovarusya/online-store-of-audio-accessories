import { FC, memo, PropsWithChildren } from "react";
import styles from "./ShoppingCart.module.css";


interface ShoppingCartProps {}

const ShoppingCart: FC<PropsWithChildren<ShoppingCartProps>> = ({children}) => {
  return (
    <div className={styles.container}>{children}</div>
  )
}

export default memo(ShoppingCart);
