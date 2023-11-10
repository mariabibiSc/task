import React from "react";
import { Navigate } from "react-router-dom";
const ProtectedRoutes = ({ children }) => {
  const token = localStorage.getItem("token");
  if (token === undefined) {
    return <Navigate to="/" replace />;
  }
  return children;
};
export default ProtectedRoutes;
