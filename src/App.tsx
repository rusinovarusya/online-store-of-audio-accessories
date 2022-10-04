import "./App.css";
import StorePage from "./components/store-page/StorePage";
import Catalog from "./components/catalog/Catalog";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import GroupOfGoods from "./components/group-of-goods/GroupOfGoods";
import CardInCatalog from "./components/card-in-catalog/CardInCatalog";
import { HashRouter, Route, Routes } from "react-router-dom";
import ShoppingCart from "./components/shopping-cart/ShoppingCart";
import CardInShoppingCart from "./components/card-in-shopping-cart/CardInShoppingCart";
import Total from "./components/total/Total";


const App = () => {
  return (
    <HashRouter>
      <StorePage>
        <Header />
        <Routes>
        <Route path="/" element={
          <Catalog>
            <GroupOfGoods title="Наушники">
              <CardInCatalog index={0} type="headphones" />
              <CardInCatalog index={1} type="headphones" />
              <CardInCatalog index={2} type="headphones" />
              <CardInCatalog index={3} type="headphones" />
              <CardInCatalog index={4} type="headphones" />
              <CardInCatalog index={5} type="headphones" />
            </GroupOfGoods>
            <GroupOfGoods title="Беспроводные наушники">
              <CardInCatalog index={0} type="wireless" />
              <CardInCatalog index={1} type="wireless" />
              <CardInCatalog index={2} type="wireless" />
            </GroupOfGoods>
          </Catalog>
        } />
        <Route path="/shopping-cart" element={
          <ShoppingCart>
            <CardInShoppingCart index={0} type="headphones" />
            <Total />
          </ShoppingCart>
        } />
        </Routes>
        <Footer />
      </StorePage>
    </HashRouter>
  );
}

export default App;
