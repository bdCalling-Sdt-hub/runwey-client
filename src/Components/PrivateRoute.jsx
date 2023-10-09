import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const location = useLocation();

  const user = {
    email: "sahinur@gmail.com",
  };

  if (user.email) {
    return children;
  }

  return <Navigate to="/signin" />;
};

export default PrivateRoute;
