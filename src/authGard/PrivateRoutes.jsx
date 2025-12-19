import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const isAuth = localStorage.getItem("RegisterUser");
  return isAuth ? children : <Navigate to="/register"/>;
};

export default PrivateRoutes;
