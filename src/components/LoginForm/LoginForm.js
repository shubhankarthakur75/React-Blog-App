import React, { Component } from "react";
import "./LoginForm.css";
import { withRouter } from "react-router";

class LoginForm extends Component {
  state = {
    username: "",
    password: "",
    userNotFoundError: false,
    incorrectPasswordError: false,
  };

  handleChange = (e) => {
    if (e.target.id === "username") {
      this.setState({ username: e.target.value });
    }
    if (e.target.id === "password") {
      this.setState({ password: e.target.value });
    }
  };

  validateUser = (e) => {
    e.preventDefault();
    return new Promise((resolve, reject) => {
      const filteredUserArr = this.props.propsUsersArr.filter(
        (user) => user.username === this.state.username
      );
      if (filteredUserArr.length === 0) {
        this.setState({ userNotFoundError: true });
      } else if (filteredUserArr[0].password !== this.state.password) {
        this.setState({ incorrectPasswordError: true });
        this.setState({ userNotFoundError: false });
      } else {
        this.setState({ incorrectPasswordError: false });
        this.setState({ userNotFoundError: false });
      }
      resolve();
    });
  };

  loginUser = () => {
    if (
      this.state.userNotFoundError === false &&
      this.state.incorrectPasswordError === false
    ) {
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

          <li>
            <input
              type="password"
              placeholder="Password"
              autoComplete="off"
              id="password"
              value={this.state.password}
              onChange={(e) => this.handleChange(e)}
            />
            {this.state.userNotFoundError ? (
              <p className="error-message">User not found...Please sign-in</p>
            ) : null}
            {this.state.incorrectPasswordError ? (
              <p className="error-message">Incorrect password</p>
            ) : null}
          </li>

          <li>
            <button
              className="user-login-btn"
              onClick={(e) => this.validateUser(e).then(this.loginUser)}
            >
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
