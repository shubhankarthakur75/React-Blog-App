import React, { Component } from "react";
import "./Header.css";
import Navbar from "../Navbar/Navbar";
import Logo from "../Logo/Logo";

class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <div className="logo-container">
          <Logo />
        </div>
        <div className="navbar-container">
          <Navbar />
        </div>
      </div>
    );
  }
}

export default Header;
