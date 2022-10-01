import "./App.css";
import StorePage from "./components/store-page/StorePage";
import Catalog from "./components/catalog/Catalog";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import GroupOfGoods from "./components/group-of-goods/GroupOfGoods";
import CardInCatalog from "./components/card-in-catalog/CardInCatalog";


function App() {
  return (
    <div className="App">
      <StorePage>
        <Header />
        <Catalog>
          <GroupOfGoods title="Наушники">
            <CardInCatalog index={0} img="apple-byz-s8521.png" name="Name" price={1} rating={4.9} />
          </GroupOfGoods>
          <GroupOfGoods title="Беспроводные наушники">
            <CardInCatalog index={1} img="apple-byz-s8521.png" name="Name" price={1} rating={4.9} />
          </GroupOfGoods>
        </Catalog>
        <Footer />
      </StorePage>
    </div>
  );
}

export default App;
