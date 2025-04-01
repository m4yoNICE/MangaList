import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav style={{ backgroundColor: "#333" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "white",
          }}
        ></button>

        <div>
          <button onClick={() => navigate("/")} style={buttonStyle}>
            Home
          </button>
          <button onClick={() => navigate("/about")} style={buttonStyle}>
            About
          </button>
          <button style={buttonStyle}>Services</button>
          <button style={buttonStyle}>Contact</button>
        </div>
      </div>
    </nav>
  );
};

const buttonStyle = {
  backgroundColor: "#555",
  color: "white",
  padding: "10px 15px",
  border: "none",
  margin: "0 5px",
  cursor: "pointer",
};

export default Header;
