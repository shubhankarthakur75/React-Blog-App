import React, { Component } from "react";
import "./Header.css";
import Navbar from "../Navbar/Navbar";
import Logo from "../Logo/Logo";
import hamburgerMenuIcon from "../../assets/images/hamburger-menu-icon-30px.png";

class Header extends Component {
  state = {
    isHamburgerMenu: false,
  };
  render() {
    return (
      <div className="header">
        <div className="header-container">
          <div className="logo-container">
            <Logo />
          </div>
          <div className="navbar-container">
            <Navbar />
          </div>
          <div className="hamburger-menu-icon-container">
            <img
              src={hamburgerMenuIcon}
              alt="hamburger-menu"
              onClick={() => {
                this.setState({ isHamburgerMenu: !this.state.isHamburgerMenu });
              }}
            />
          </div>
        </div>
        <div
          className="hamburger-menu-container"
          onClick={() => {
            this.setState({ isHamburgerMenu: !this.state.isHamburgerMenu });
          }}
        >
          {this.state.isHamburgerMenu ? <Navbar /> : null}
        </div>
      </div>
    );
  }
}

export default Header;
