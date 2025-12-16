import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <div className="bg-background text-text min-h-screen flex flex-col">
      {/* shared layout elements */}
      <Navbar />

      {/* routed pages */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* shared footer */}
      <Footer />
    </div>
  </BrowserRouter>
);
