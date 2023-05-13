import { FC, memo } from "react";
import { Link } from "react-router-dom";
import FavoriteGoodsWidget from "../favorite-goods-widget/FavoriteGoodsWidget";
import Logo from "../logo/Logo";
import ShoppingCartWidget from "../shopping-cart-widget/ShoppingCartWidget";
import Widget from "../widget/Widget";
import WidgetsContainer from "../widgets-container/WidgetsContainer";
import styles from "./Header.module.css";
import { AppDataContextModel, useAppDataContext } from "../../context/app-data.provider";


const Header: FC = () => {
  const { countItems } = useAppDataContext() as AppDataContextModel;
  
  return (
    <header className={styles.header}>
      <Link to={"/"}>
        <Logo />
      </Link>
      <WidgetsContainer>
        <Widget count={0}>
          <FavoriteGoodsWidget />
        </Widget>
        <Link to={"/shopping-cart"}>
          <Widget count={countItems()}>
            <ShoppingCartWidget />
          </Widget>
        </Link>
        </WidgetsContainer>
    </header>
  );
}

export default memo(Header);
