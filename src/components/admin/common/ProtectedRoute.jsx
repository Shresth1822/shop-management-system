import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";

const ProtectedRoute = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return user ? <Outlet /> : <Navigate to="/admin/login" />;
};

export default ProtectedRoute;
