import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router";
import Loading from "../Components/Loading/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  console.log(user);

  const Location = useLocation();
  console.log(Location);

  if (loading) {
    return <Loading></Loading>;
  }

  if (!user) {
    return <Navigate state={Location.pathname} to={"/auth/login"}> </Navigate>;
  } else {
    return children;
  }
};

export default PrivateRoute;
