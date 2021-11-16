import React, { Component } from "react";
import "./Logo.css";

class Logo extends Component {
  render() {
    return (
      <div className="logo">
        <div className="logo-vertical-text">
          <p>The</p>
        </div>
        <div className="logo-horizontal-text">Siren</div>
      </div>
    );
  }
}

export default Logo;
