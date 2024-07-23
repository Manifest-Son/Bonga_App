// eslint-disable-next-line no-unused-vars
import React from "react";
import logoImg from "../../assets/logo.jpeg";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import authStore from "../../store/Store";

function Header() {
  const user = authStore((state) => state.user);
  const navigate = useNavigate();
  const setToken = authStore((state) => state.setToken);
  const handleClick = () => {
    setToken(null);
    navigate("./login");
  };
  return (
    <section className="header_container">
      <div className="header_wrapper">
        <a href="#">
          <img src={logoImg} alt="Club Logo" />
        </a>
        <div className="right_header">
          <ol className="nav_links">
            <li>
              <nav>
                <Link to="/">Home</Link>
              </nav>
            </li>
            <li>
              <nav>
                <Link to="/about">About</Link>
              </nav>
            </li>
          </ol>
          {user ? (
            <>
              <span>Welcome, {user.firstname}</span>
              <button onClick={handleClick}>Logout</button>
            </>
          ) : (
            <>
              <button className="login">
                <Link to="/login">Login</Link>
              </button>
              <button className="login">
                <Link to="/signin">Sign Up</Link>
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default Header;
