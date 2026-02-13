import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PublicLayout from "./components/layout/PublicLayout";

// Public Pages
import Home from "./pages/public/Home";
import Products from "./pages/public/Products";
import About from "./pages/public/About";
import Contact from "./pages/public/Contact";
import Placeholder from "./pages/public/Placeholder"; // Temporary for other pages

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        {/* Admin Routes (Placeholder for now) */}
        <Route
          path="/admin/*"
          element={<div>Admin Dashboard Placeholder</div>}
        />

        {/* 404 Route */}
        <Route
          path="*"
          element={
            <div className="p-8 text-center text-2xl">404 - Page Not Found</div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
