import { BrowserRouter, Route, Routes } from "react-router-dom";
import GeneralPage from "./pages/GeneralPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ShopPage from "./pages/ShopPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GeneralPage title="Home" />} />
        <Route path="/emi-dues" element={<GeneralPage title="EMI Dues" />} />
        <Route path="/limit" element={<GeneralPage title="Limit" />} />
        <Route path="/profile" element={<GeneralPage title="Profile" />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route
          path="/shop/marketplace/:productId"
          element={<ProductDetailsPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
