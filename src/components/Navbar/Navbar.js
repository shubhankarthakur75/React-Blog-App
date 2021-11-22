import React, { Component } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <NavLink exact to="/React-Blog-App/home">
          <li>Home</li>
        </NavLink>
        <NavLink to="/React-Blog-App/travel">
          <li>Travel</li>
        </NavLink>
        <NavLink to="/React-Blog-App/hollywood">
          <li>Hollywood</li>
        </NavLink>
        <NavLink to="/React-Blog-App/technology">
          <li>Technology</li>
        </NavLink>
        <NavLink to="/React-Blog-App/fitness">
          <li>Fitness</li>
        </NavLink>
        <NavLink to="/React-Blog-App/food">
          <li>Food</li>
        </NavLink>
      </div>
    );
  }
}

export default Navbar;
