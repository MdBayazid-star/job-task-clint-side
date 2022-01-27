import { Button, CircularProgress } from "@mui/material";
import React from "react";
// import { Spinner } from "react-bootstrap";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const PrivetRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();
  const location = useLocation();
  console.log("children", children);
  if (isLoading) {
    return (
      <div className="d-flex justify-content-center my-5">
        <Button
          variant="primary"
          className="btn btn-primary my-5 px-3"
          disabled
        >
          {" "}
          <CircularProgress />
          Loading...
        </Button>
      </div>
    );
  }
  if (user?.email) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivetRoute;
