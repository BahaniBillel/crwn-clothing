import "./App.css";
import Homepage from "./pages/homepage/Homepage";
import { Route, Routes } from "react-router-dom";
import ShopPage from "./pages/shop/Shop";



function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Homepage />} />
      <Route exact path="/shop" element={<ShopPage />} />
    </Routes>
  );
}

export default App;
