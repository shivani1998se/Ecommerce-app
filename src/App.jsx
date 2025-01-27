

import React, { useEffect, useState } from "react";
import Header from "./component/Header";
import Home from "./component/Home";
import "./App.css";
import Cart from "./component/Cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import productList from "./component/data";
import About from "./component/About";
import Contact from "./component/Contact";

const App = () => {
  const [productId, setProductId] = useState(""); // corrected the typo here
  const [cartAllProduct, setCartAllProduct] = useState([]);

  useEffect(() => {
    if (productId) {
      const filteredObject = productList.filter(
        (product) => product.id === productId
      );
      // Update the cart correctly
      setCartAllProduct((prevCart) => [...prevCart, ...filteredObject]);
    }
  }, [productId]);

  return (
    <>
      <BrowserRouter>
        <Header cartAllProduct={cartAllProduct} />
        <Routes>
          <Route
            path="/"
            element={<Home setProductId={setProductId} />}
          />
          <Route
            path="/cart"
            element={<Cart cartAllProduct={cartAllProduct} setCartAllProduct={setCartAllProduct} />}
          />
            <Route
            path="/about"
            element={<About/>}
          />
          
          <Route
            path="/contact"
            element={<Contact/>}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

