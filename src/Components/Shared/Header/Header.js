import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Badge, IconButton, Toolbar, Typography } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import useAuth from "../../Hooks/useAuth";
import SvgButton from "../SvgButton/SvgButton";

export default function Header() {
  const { user, logout, token } = useAuth();

  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <Link style={{ textDecoration: "none", color: "#1c7876" }} to="/home">
          <ListItem button>
            <ListItemText>
              <span className="fw-bold">
                <i className="fas fa-home"></i> Home
              </span>
            </ListItemText>
          </ListItem>
        </Link>
        <Link
          style={{ textDecoration: "none", color: "#1c7876" }}
          to="/dashboard"
        >
          <ListItem button>
            <ListItemText>
              <span className="fw-bold">
                <i className="fas fa-chart-line"></i> Dashboard
              </span>
            </ListItemText>
          </ListItem>
        </Link>
        <Link
          style={{ textDecoration: "none", color: "#1c7876" }}
          to="/productExplore"
        >
          <ListItem button>
            <ListItemText>
              <span className="fw-bold">
                <i className="fas fa-chart-line"></i>Explore
              </span>
            </ListItemText>
          </ListItem>
        </Link>
        {user.email && (
          <ListItem button onClick={logout}>
            <ListItemText className="fw-bold" style={{ color: "#1c7876" }}>
              <span className="fw-bold">
                <i class="fas fa-sign-out-alt"></i> Logout
              </span>
            </ListItemText>
          </ListItem>
        )}
      </List>
    </Box>
  );

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar style={{ backgroundColor: "#182222" }} position="static">
          <Toolbar className="container">
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <NavLink className="navbar-brand tw-bold logo" to="/home">
                <span className="text-danger">o</span>
                <span className="text-warning">n</span>
                <span className="text-info">s</span>
                <span className="text-success">Travel</span>
              </NavLink>
            </Typography>
            {!user?.email && (
              <Link style={{ textDecoration: "none" }} to="/login">
                <SvgButton className="text-light banner-description">
                  Login
                </SvgButton>
              </Link>
            )}
            {["left"].map((anchor) => (
              <React.Fragment key={anchor}>
                <Button color="inherit" onClick={toggleDrawer(anchor, true)}>
                  <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                  >
                    <MenuIcon />
                  </IconButton>
                </Button>
                <SwipeableDrawer
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                  onOpen={toggleDrawer(anchor, true)}
                >
                  {list(anchor)}
                </SwipeableDrawer>
              </React.Fragment>
            ))}
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}
