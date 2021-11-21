import React, { Component } from "react";
import "./Header1.css";
import LogoSmall from "../Logo/LogoSmall";

class Header1 extends Component {
  render() {
    return (
      <div className="header1">
        <div className="header-container">
          <div className="logo-container">
            <LogoSmall />
          </div>
          <div className="header-btn-container">
            <button
              className="header-btn"
              onClick={() => {
                this.props.propsDisplayFormFn("login");
              }}
            >
              Log In
            </button>
            <button
              className="header-btn"
              onClick={() => {
                this.props.propsDisplayFormFn("signin");
              }}
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Header1;
