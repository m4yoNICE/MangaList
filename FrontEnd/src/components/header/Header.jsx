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
import SearchBar from "../assets/SearchBar/SearchBar.jsx"; // Your SearchBar component

const Header = ({ onResults }) => {
  const navigate = useNavigate();
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchResults = (results) => {
    setSearchResults(results);
    if (onResults) {
      onResults(results); // Pass the results to the parent component (App.jsx)
    }
  };

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

        <div id="search-bar-container">
          <SearchBar onResults={handleSearchResults} />
        </div>

        <div id="header-buttons">
          <Button color="inherit" onClick={() => navigate("/")}>
            Home
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
