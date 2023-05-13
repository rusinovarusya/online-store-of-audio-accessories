import { FC, memo } from "react";
import styles from "./ShoppingCart.module.css";
import Total from "../total/Total";
import CardInShoppingCart from "../card-in-shopping-cart/CardInShoppingCart";
import { AppDataContextModel, useAppDataContext } from "../../context/app-data.provider";


const ShoppingCart: FC = () => {
  const { itemsInCart, countItems } = useAppDataContext() as AppDataContextModel;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Корзина</h2>
      <div className={styles.content}>
        <div className={styles.items}>
          {itemsInCart.map(item => <CardInShoppingCart index={item.index} type={item.type} />)}
        </div>
        {countItems() ? <Total /> : <></>}
      </div>
    </div>
  );
}

export default memo(ShoppingCart);
