import React from "react";
import "./header.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="nav container">
      <div className="left-nav">
        <img src={logo} alt="logo" />
        <div className="nav-p">
          <p>Buy</p>
          <p>Sell</p>
          <p>Help</p>
        </div>
      </div>

      <div className="right-nav">
        <Link to="signin">Sign In</Link>
        <p className="or">or</p>
        <Link to="register">Register</Link>
      </div>
    </nav>
  );
};

export default Header;
