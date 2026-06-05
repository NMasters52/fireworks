import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import ProductDetails from "./pages/ProductDetails";
import BusinessLanding from "./pages/BusinessLanding";
import BusinessCard from "./pages/BusinessCard";
import { StandardLayout } from "./components/StandardLayout";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      {/* Standard pages with Navbar + Footer */}
      <Route element={<StandardLayout />}>
        <Route path="/" element={<App />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/business" element={<BusinessLanding />} />
      </Route>

      {/* Standalone full-screen business card designs */}
      <Route path="/business/:id" element={<BusinessCard />} />
    </Routes>
  </BrowserRouter>
);
