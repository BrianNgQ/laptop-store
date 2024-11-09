// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import ProductByBrand from "./pages/ProductByBrand";
import ProductDetail from "./pages/ProductDetail";
import AuthForm from "./pages/AuthForm";
import CartPage from "./pages/CartPage"; // Import CartPage
import "./styles/App.css";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/products"
            element={<ProductList onAddToCart={handleAddToCart} />}
          />
          <Route
            path="/product/:id"
            element={<ProductDetail onAddToCart={handleAddToCart} />}
          />
          <Route
            path="/products/:brand"
            element={<ProductByBrand onAddToCart={handleAddToCart} />}
          />
          <Route path="/auth" element={<AuthForm />} />
          <Route path="/cart" element={<CartPage cartItems={cartItems} />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
