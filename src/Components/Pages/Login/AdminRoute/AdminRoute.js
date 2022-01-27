import { CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Route, Redirect, Navigate, useLocation } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const AdminRoute = ({ children, ...rest }) => {
  const { user, admin, isLoading } = useAuth();
  // const { admin, setAdmin } = useState(false);
  // useEffect(() => {
  //   fetch(`http://localhost:5000.com/users/${user.email}`)
  //     .then((res) => res.json())
  //     .then((data) => setAdmin(data.admin));
  // }, [user.email]);
  console.log(user);
  console.log(admin);
  const location = useLocation();
  if (isLoading) {
    return <CircularProgress />;
  }
  if (user?.email && admin) {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} />;
};

export default AdminRoute;
