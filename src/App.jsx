import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Products from "./components/Products";
import SingleProduct from "./components/SingleProduct";
import Home from "./components/Home";
import WomenProducts from "./pages/WomenProducts";
import MenProducts from "./pages/MenProducts";


const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/women" element={<WomenProducts />} />
        <Route path="/men" element={<MenProducts />} />
      </Routes>
    </div>
  );
};

export default App;
