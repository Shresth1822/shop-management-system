import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PublicLayout from "./components/layout/PublicLayout";

// Public Pages
import Home from "./pages/public/Home";
import Placeholder from "./pages/public/Placeholder"; // Temporary for other pages

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route
            path="/products"
            element={<Placeholder pageName="Products" />}
          />
          <Route path="/about" element={<Placeholder pageName="About Us" />} />
          <Route
            path="/contact"
            element={<Placeholder pageName="Contact Us" />}
          />
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
