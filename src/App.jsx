import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/containers/ItemListContainer";
import ItemDetailContainer from "./components/containers/ItemDetailContainer";
import Cart from "./components/containers/CartView/Cart";
import CartContext from "./Context/CartContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";

function App() {
  const message = "Welcome to the peripherals Dominguez";

  return (
    <div className="body">
      <BrowserRouter>
        <CartContext>
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer greeting={message} />} />
            <Route path="/category/:idCategory" element={<ItemListContainer greeting={message} />} />
            <Route path="/item/:idItem" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<ItemListContainer />} />
          </Routes>
        </CartContext>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
