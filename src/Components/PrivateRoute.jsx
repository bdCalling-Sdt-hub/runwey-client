import React from "react";
import { Navigate} from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const UserData = JSON.parse(localStorage.getItem("yourInfo"));


  if (UserData?.role == "admin" || UserData?.oneTimeCode === "verified") {
    return children;
  } else {
    return <Navigate to="/signin" />;
  }
};

export default PrivateRoute;
