import "./App.css";
import StorePage from "./components/store-page/StorePage";
import Catalog from "./components/catalog/Catalog";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import GroupOfGoods from "./components/group-of-goods/GroupOfGoods";
import CardInCatalog from "./components/card-in-catalog/CardInCatalog";
import { HashRouter, Route, Routes } from "react-router-dom";
import ShoppingCart from "./components/shopping-cart/ShoppingCart";


const App = () => {

  return (
    <HashRouter>
      <StorePage>
        <Header />
        <Routes>
        <Route path="/" element={
          <Catalog>
            <GroupOfGoods title="Наушники">
              {[0, 1, 2, 3, 4, 5].map(i => <CardInCatalog index={i} type="headphones" />)}
            </GroupOfGoods>
            <GroupOfGoods title="Беспроводные наушники">
              {[0, 1, 2].map(i => <CardInCatalog index={i} type="wireless" />)}
            </GroupOfGoods>
          </Catalog>
        } />
        <Route path="/shopping-cart" element={
          <ShoppingCart />
        } />
        </Routes>
        <Footer />
      </StorePage>
    </HashRouter>
  );
}

export default App;
