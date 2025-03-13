import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <header>
        <button onClick={() => navigate("/register")}>Sign In</button>
        <button onClick={() => navigate("/login")}>Log In</button>
      </header>
      <h1>Welcome to Mangananggal</h1>
      <h2>The Manga List App</h2>
      <h3>omg</h3>
    </>
  );
};

export default LandingPage;
