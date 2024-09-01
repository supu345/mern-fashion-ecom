import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import UserStore from "../store/UserStore";

const AdminRoute = ({ children }) => {
  const { user } = UserStore(); // Get the user from the store
  console.log("User in AdminRoute:", user);
  if (!user || user.role !== "admin") {
    return <Navigate to="/unauthorized" />; // Redirect if not an admin
  }

  return children;
};

export default AdminRoute;
