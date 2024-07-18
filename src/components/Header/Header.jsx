// eslint-disable-next-line no-unused-vars
import React from "react";
import logoImg from "../../assets/logo.jpeg";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
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
          <button className="login">
            <Link to="/login">Log In</Link>
          </button>
          <button className="login">
            <Link to="/signin">Sign In</Link>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Header;
