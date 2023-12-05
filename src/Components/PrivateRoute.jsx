import React from "react";
import { Navigate} from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const UserData = JSON.parse(localStorage.getItem("yourInfo"));

  // console.log(UserData);

  if (UserData?.role == "admin" || UserData?.oneTimeCode === "verified") {
    return children;
  } else {
    return <Navigate to="/signin" />;
  }
};

export default PrivateRoute;
