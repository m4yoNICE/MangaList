import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import Logo from "./mangananggal-logo.svg"; // Optional logo

const Header = () => {
  const navigate = useNavigate();
  return (
    <AppBar position="static" sx={{ backgroundColor: "#333" }}>
      <Toolbar sx={{ justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <IconButton edge="start" color="inherit" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          {Logo && (
            <img
              src={Logo}
              alt="Logo"
              style={{ width: 40, height: 40, marginRight: 10 }}
              id="header-logo"
            />
          )}
        </div>

        <div id="header-buttons">
          <Button color="inherit" onClick={() => navigate("/")}>
            Home
          </Button>
          <Button color="inherit" onClick={() => navigate("/myList")}>
            My List
          </Button>
          <Button color="inherit" onClick={() => navigate("/about")}>
            About
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
