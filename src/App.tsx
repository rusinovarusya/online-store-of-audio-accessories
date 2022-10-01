import "./App.css";
import StorePage from "./components/store-page/StorePage";
import Catalog from "./components/catalog/Catalog";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import GroupOfGoods from "./components/group-of-goods/GroupOfGoods";
import Card from "./components/card/Card";
import Logo from "./components/logo/Logo";
import FavoriteGoodsWidget from "./components/favorite-goods-widget/FavoriteGoodsWidget";
import ShoppingCartWidget from "./components/shopping-cart-widget/ShoppingCartWidget";
import WidgetsContainer from "./components/widgets-container/WidgetsContainer";
import Widget from "./components/widget/Widget";
//import i from "./assets/apple-bvz-58521.png";
import favoriteGoodsWidget from "./assets/favorite-goods.svg";
import shoppingCard from "./assets/shopping-cart.svg";
import LinksContainer from "./components/links-container/LinksContainer";
import Navigation from "./components/nav-2/Nav2";
import LanguageSwitcher from "./components/language-switcher/LanguageSwitcher";
import SocialNetworks from "./components/social-networks/SocialNetworks";
import Nav1 from "./components/nav-1/Nav1";
import Nav2 from "./components/nav-2/Nav2";



function App() {
  return (
    <div className="App">
      <StorePage>
        <Header>
          <Logo />
          <WidgetsContainer>
            <Widget count={0}>
              {favoriteGoodsWidget}
            </Widget>
            <Widget count={0}>
              {shoppingCard}
            </Widget>
            <FavoriteGoodsWidget count={0} />
            <ShoppingCartWidget count={0} />
          </WidgetsContainer>
        </Header>
        <Catalog>
          <GroupOfGoods title="Наушники">
            <Card img="apple-bvz-58521.png" name="Name" price={1} rating={1} />
            <Card img=".png" name="Apple aerpods" price={1} rating={1} />
            <Card img=".png" name="Apple aerpods" price={1} rating={1} />
          </GroupOfGoods>
        </Catalog>
        <Footer>
          <Logo />
          <Nav1 />
          <Nav2>
            <LanguageSwitcher />
          </Nav2>
          <SocialNetworks />
        </Footer>
      </StorePage>
    </div>
  );
}

export default App;
