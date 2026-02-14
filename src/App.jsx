import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PublicLayout from "./components/layout/PublicLayout";

// Public Pages
import Home from "./pages/public/Home";
import Products from "./pages/public/Products";
import About from "./pages/public/About";
import Contact from "./pages/public/Contact";
import Placeholder from "./pages/public/Placeholder"; // Temporary for other pages

import AdminLogin from "./pages/admin/AdminLogin";
import ProtectedRoute from "./components/admin/common/ProtectedRoute";
import AdminLayout from "./components/admin/layout/AdminLayout";
import ProductList from "./pages/admin/Products/ProductList";
import ProductForm from "./pages/admin/Products/ProductForm";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* Public Routes */}
          <Route element={<PublicLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Route>

          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />

          <Route element={<ProtectedRoute />}>
            <Route element={<AdminLayout />}>
              <Route
                path="/admin/dashboard"
                element={<div>Admin Dashboard (Protected)</div>}
              />
              <Route path="/admin/products" element={<ProductList />} />
              <Route path="/admin/products/new" element={<ProductForm />} />
              <Route
                path="/admin/products/edit/:id"
                element={<ProductForm />}
              />
              {/* Other protected admin routes will go here */}
            </Route>
          </Route>

          {/* 404 Route */}
          <Route
            path="*"
            element={
              <div className="p-8 text-center text-2xl">
                404 - Page Not Found
              </div>
            }
          />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
