import { Route, Routes } from "react-router-dom";
import Cart from "./pages/cart/Cart";
import CategoryPage from "./pages/categoryPage/CategoryPage";
import HomePage from "./pages/homePage/HomePage";
import ProductPage from "./pages/productPage/ProductPage";


function App() {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/:category/:id" element={<ProductPage />} />
        <Route path="/:category/" element={<CategoryPage />} />
      </Routes>
  );
}

export default App;
