import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectEmail } from "../../redux/slice/authSlice";

const AdminOnlyRoute = ({ children }) => {
      const userEmail = useSelector(selectEmail);
      const nav = useNavigate();
      if(userEmail === "reza.asareh81@gmail.com") {
          return children;   
      }
      return(
          nav('/')
      );
};

export const AdminOnlyLink = ({ children }) => {
    const userEmail = useSelector(selectEmail);

    if (userEmail === "reza.asareh81@gmail.com") {
       return children;
    }
    return null;
};

export default AdminOnlyRoute;