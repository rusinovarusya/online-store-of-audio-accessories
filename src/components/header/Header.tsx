import { FC, memo } from "react";
import FavoriteGoodsWidget from "../favorite-goods-widget/FavoriteGoodsWidget";
import Logo from "../logo/Logo";
import ShoppingCartWidget from "../shopping-cart-widget/ShoppingCartWidget";
import Widget from "../widget/Widget";
import WidgetsContainer from "../widgets-container/WidgetsContainer";
import styles from "./Header.module.css";


const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <WidgetsContainer>
        <Widget count={0}>
          <FavoriteGoodsWidget />
        </Widget>
        <Widget count={0}>
          <ShoppingCartWidget />
        </Widget>
        </WidgetsContainer>
    </header>
  )
}

export default memo(Header);
