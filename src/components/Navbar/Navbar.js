import React, { Component } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <NavLink exact to="/">
          <li>Home</li>
        </NavLink>
        <NavLink to="/travel">
          <li>Travel</li>
        </NavLink>
        <NavLink to="/hollywood">
          <li>Hollywood</li>
        </NavLink>
        <NavLink to="/technology">
          <li>Technology</li>
        </NavLink>
        <NavLink to="/fitness">
          <li>Fitness</li>
        </NavLink>
        <NavLink to="/food">
          <li>Food</li>
        </NavLink>
      </div>
    );
  }
}

export default Navbar;
