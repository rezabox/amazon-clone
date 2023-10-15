import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectEmail } from "../../redux/slice/authSlice";

const AdminOnlyRoute = ({ children }) => {
      const userEmail = useSelector(selectEmail);
      if(userEmail === "reza.asareh81@gmail.com") {
          return children;   
      }
      return(
        <section>
        <div className="grid items-center justify-center mt-[10%] space-y-3">
          <h2 className="font-bold">Permission Denied.</h2>
          <p>This page can only be view by an Admin user.</p>
          <br />
          <Link to="/">
            <button className="--btn text-orange-500 hover:font-bold">&larr; Back To Home</button>
          </Link>
        </div>
      </section>
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