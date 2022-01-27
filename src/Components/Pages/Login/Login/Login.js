import {
  Alert,
  Button,
  CircularProgress,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import Header from "../../../Shared/Header/Header";
import SvgButton from "../../../Shared/SvgButton/SvgButton";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();

  const location = useLocation();
  const history = useNavigate();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, history);
    e.preventDefault();
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle(location, history);
    console.log(location);
    console.log(history);
  };

  return (
    <>
      <Header></Header>
      <Container>
        <form
          className="my-5 p-4 rounded shadow mx-auto"
          style={{ maxWidth: "25rem" }}
          onSubmit={handleLoginSubmit}
        >
          <Typography
            style={{ textAlign: "center" }}
            sx={{ my: 3 }}
            variant="h5"
            gutterBottom
          >
            Login
          </Typography>
          <TextField
            sx={{ width: "95%", m: 1 }}
            id="standard-basic"
            label="Your Email"
            name="email"
            onChange={handleOnChange}
            variant="standard"
          />
          <TextField
            sx={{ width: "95%", m: 1 }}
            id="standard-basic"
            label="Your Password"
            type="password"
            name="password"
            onChange={handleOnChange}
            variant="standard"
          />

          <div className="d-flex justify-content-center my-3">
            <Button type="submit">
              <SvgButton
                style={{ color: "#f15743" }}
                className="banner-description"
              >
                Login
              </SvgButton>
            </Button>
          </div>
          <NavLink style={{ textDecoration: "none" }} to="/register">
            <Button variant="text">New User? Please Register...</Button>
          </NavLink>
          {isLoading && <CircularProgress />}
          {user?.email && <Alert severity="success">Login successfully!</Alert>}
          {authError && <Alert severity="error">{authError}</Alert>}
          <Container className="d-flex justify-content-center my-2">
            <Button
              style={{
                backgroundColor: "chocolate",
              }}
              onClick={handleGoogleSignIn}
              variant="contained"
            >
              Google Sign In
            </Button>
          </Container>
        </form>
      </Container>
    </>
  );
};

export default Login;
