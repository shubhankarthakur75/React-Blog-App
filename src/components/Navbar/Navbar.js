import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <li>Home</li>
        <li>Bollywood</li>
        <li>Hollywood</li>
        <li>Technology</li>
        <li>Fitness</li>
        <li>Food</li>
      </div>
    );
  }
}

export default Navbar;
