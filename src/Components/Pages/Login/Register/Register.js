import {
  Alert,
  Button,
  CircularProgress,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import Header from "../../../Shared/Header/Header";

const Register = () => {
  const { registerUser, isLoading, user, authError } = useAuth();
  const [loginData, setLoginData] = useState({});
  const history = useNavigate();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (loginData.password !== loginData.password2) {
      alert("Your password did not match");
      return handleRegisterSubmit;
    }
    registerUser(loginData.email, loginData.password, loginData.name, history);
    document.getElementById("Form").reset();
    e.preventDefault();
    console.log(loginData);
  };

  return (
    <>
      <Header></Header>
      <Container>
        {!isLoading && (
          <form
            id="Form"
            className="my-5 p-4 rounded shadow mx-auto"
            style={{ maxWidth: "25rem" }}
            onSubmit={handleRegisterSubmit}
          >
            <Typography
              style={{ textAlign: "center" }}
              sx={{ my: 3 }}
              variant="h5"
              gutterBottom
            >
              Register
            </Typography>
            <TextField
              sx={{ width: "95%", m: 1 }}
              id="standard-basic"
              label="Your Name"
              name="name"
              onBlur={handleOnBlur}
              variant="standard"
            />
            <TextField
              sx={{ width: "95%", m: 1 }}
              id="standard-basic"
              label="Your Email"
              name="email"
              type="email"
              onBlur={handleOnBlur}
              variant="standard"
            />
            <TextField
              sx={{ width: "95%", m: 1 }}
              id="standard-basic"
              label="Your Password"
              type="password"
              name="password"
              onBlur={handleOnBlur}
              variant="standard"
            />
            <TextField
              sx={{ width: "95%", m: 1 }}
              id="standard-basic"
              label="ReType Your Password"
              type="password"
              name="password2"
              onBlur={handleOnBlur}
              variant="standard"
            />

            <Button
              sx={{ width: "95%", m: 1 }}
              style={{
                backgroundColor: "ThreeDShadow",
              }}
              type="submit"
              variant="contained"
            >
              Register
            </Button>
            <NavLink style={{ textDecoration: "none" }} to="/login">
              <Button variant="text">Already Registered? Please Login</Button>
            </NavLink>
            {isLoading && <CircularProgress />}
            {user?.email && (
              <Alert severity="success">User Created successfully!</Alert>
            )}
            {authError && <Alert severity="error">{authError}</Alert>}
          </form>
        )}
      </Container>
    </>
  );
};

export default Register;
