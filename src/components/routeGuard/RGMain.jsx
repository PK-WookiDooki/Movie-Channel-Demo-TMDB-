import Cookies from "js-cookie";
import React from "react";
import { Navigate } from "react-router-dom";

const RGMain = ({ children }) => {
  const token =
    Cookies.get("token") != undefined ? Cookies.get("token") : false;

  if (token) {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
};

export default RGMain;
