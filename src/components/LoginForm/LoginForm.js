import React, { Component } from "react";
import "./LoginForm.css";
import { withRouter } from "react-router";

class LoginForm extends Component {
  state = {
    username: "",
    password: "",
    error: false,
  };

  handleChange = (e) => {
    if (e.target.id === "username") {
      this.setState({ username: e.target.value });
    }
    if (e.target.id === "password") {
      this.setState({ password: e.target.value }, () => {
        this.state.password.length >= 8
          ? this.setState({
              error: false,
            })
          : this.setState({
              error: true,
            });
      });
    }
  };
  validateUser = (e) => {
    e.preventDefault();
    if (this.state.password.length > 8) {
      this.props.history.push("/React-Blog-App/home");
    }
  };
  render() {
    return (
      <div className="login-form">
        <form action="">
          <h1 className="form-title">Log-In</h1>
          <li>
            <input
              type="text"
              placeholder="Username"
              autoComplete="off"
              id="username"
              value={this.state.username}
              onChange={(e) => this.handleChange(e)}
            />
          </li>
          {this.state.error ? (
            <li>
              <input
                type="password"
                className="error"
                placeholder="Password"
                autoComplete="off"
                id="password"
                value={this.state.password}
                onChange={(e) => this.handleChange(e)}
              />
              <p className="error-message">
                Password should contain atleast 8 characters
              </p>
            </li>
          ) : (
            <li>
              <input
                type="password"
                placeholder="Password"
                autoComplete="off"
                id="password"
                value={this.state.password}
                onChange={(e) => this.handleChange(e)}
              />
            </li>
          )}
          <li>
            <button className="user-login-btn" onClick={this.validateUser}>
              Log In
            </button>
          </li>
          <li>
            <span className="signupText"> Don't have an account?</span>
            <span>
              <button
                className="signupLink"
                onClick={() => {
                  this.props.propsDisplayFormFn("signin");
                }}
              >
                Sign-Up
              </button>
            </span>
          </li>
        </form>
      </div>
    );
  }
}

export default withRouter(LoginForm);
