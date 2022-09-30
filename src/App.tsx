import './App.css';
import StorePage from "./components/store-page/StorePage";
import Catalog from './components/catalog/Catalog';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div className="App">
      <StorePage>
        <Header />
        <Catalog />
        <Footer />
      </StorePage>
    </div>
  );
}

export default App;
