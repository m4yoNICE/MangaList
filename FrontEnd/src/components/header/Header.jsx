import { useNavigate } from "react-router-dom";

const Header = () => (
  <header>
    <h1>Mangananggal</h1>
    <nav>
      <ul>
        <li>
          <useNavigate to="/">Home</useNavigate>
        </li>
        <li>
          <useNavigate to="/about">About</useNavigate>
        </li>
        <li>
          <useNavigate to="#">Services</useNavigate>
        </li>
        <li>
          <useNavigate to="#">Contact</useNavigate>
        </li>
      </ul>
    </nav>
    <hr />
  </header>
);

export default Header;
