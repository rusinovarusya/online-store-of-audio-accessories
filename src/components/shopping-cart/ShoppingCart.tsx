import { FC, memo, PropsWithChildren } from "react";
import styles from "./ShoppingCart.module.css";


interface ShoppingCartProps {}

const ShoppingCart: FC<PropsWithChildren<ShoppingCartProps>> = ({children}) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Корзина</h2>
      <div className={styles.content}>{children}</div>
    </div>
  )
}

export default memo(ShoppingCart);
