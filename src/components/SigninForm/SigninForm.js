import React, { Component } from "react";
import "./SigninForm.css";
import { withRouter } from "react-router";

class SigninFrom extends Component {
  state = {
    username: "",
    password: "",
    passwordCopy: "",
    passwordLengthError: false,
    passwordMismatchedError: false,
    successfulLoginMessage: false,
    duplicateUserError: false,
  };

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value }, () => {
      this.setState({ successfulLoginMessage: false });
      if (e.target.id === "password") {
        this.state.password.length >= 8
          ? this.setState({
              passwordLengthError: false,
            })
          : this.setState({
              passwordLengthError: true,
            });
      }
    });
  };

  // validateUser = (e, callBackFn) => {
  //   e.preventDefault();

  //   const filteredArr = this.props.propsUsersArr.filter((user) => {
  //     return user.username === this.state.username;
  //   });
  //   if (filteredArr.length === 0) {
  //     this.setState({ duplicateUserError: false });
  //   } else {
  //     this.setState({ duplicateUserError: true }, () => {
  //       console.log("this.state.duplicateError", this.state.duplicateUserError);
  //       callBackFn();
  //     });
  //   }

  //   if (this.state.password === this.state.passwordCopy) {
  //     this.setState({ passwordMismatchedError: false }, () => callBackFn());
  //   } else {
  //     this.setState({ passwordMismatchedError: true }, () => callBackFn());
  //     this.setState({ successfulLoginMessage: false });
  //   }
  // };

  validateUser = (e, callBackFn) => {
    e.preventDefault();
    return new Promise((resolve, reject) => {
      const filteredArr = this.props.propsUsersArr.filter((user) => {
        return user.username === this.state.username;
      });

      if (filteredArr.length === 0) {
        this.setState({ duplicateUserError: false });
      } else {
        this.setState({ duplicateUserError: true });
      }

      if (this.state.password === this.state.passwordCopy) {
        this.setState({ passwordMismatchedError: false });
      } else {
        this.setState({ passwordMismatchedError: true });
      }
      resolve();
    });
  };

  registerUser = () => {
    if (
      this.state.passwordMismatchedError === false &&
      this.state.duplicateUserError === false
    ) {
      let id = this.idGenerator();
      this.props.propsRegisterUserFn(
        id,
        this.state.username,
        this.state.password
      );
      this.setState({ successfulLoginMessage: true });
      this.setState({ username: "", password: "", passwordCopy: "" });
    }
  };

  // registerUser = (e) => {
  //   e.preventDefault();
  //   if (this.state.password === this.state.passwordCopy) {
  //     this.setState({ passwordMismatchedError: false });
  //     this.setState({ successfulLoginMessage: true });
  //     // let id = this.idGenerator();
  //     // this.props.propsRegisterUserFn(
  //     //   id,
  //     //   this.state.username,
  //     //   this.state.password
  //     // );
  //     this.validateUser(this.state.username, this.state.password);
  //     this.setState({ username: "", password: "", passwordCopy: "" });
  //   } else {
  //     this.setState({ passwordMismatchedError: true });
  //     this.setState({ successfulLoginMessage: false });
  //     this.setState({ duplicateUserError: false });
  //   }
  // };

  idGenerator = () => {
    let d = new Date();
    return d.getTime();
  };

  render() {
    return (
      <div className="signin-form">
        <form action="">
          <h1 className="form-title">Sign-up</h1>
          <li>
            <input
              type="text"
              id="username"
              placeholder="Username"
              value={this.state.username}
              onChange={(e) => this.handleChange(e)}
            />
            {this.state.duplicateUserError ? (
              <p className="error-message">
                This username has been already used
              </p>
            ) : null}
          </li>

          {this.state.passwordLengthError ? (
            <li>
              <input
                type="password"
                id="password"
                className="error"
                placeholder="Password"
                autoComplete="off"
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
                id="password"
                placeholder="Password"
                autoComplete="off"
                value={this.state.password}
                onChange={(e) => this.handleChange(e)}
              />
            </li>
          )}

          <li>
            <input
              type="password"
              id="passwordCopy"
              placeholder="Re-enter Password"
              autoComplete="off"
              value={this.state.passwordCopy}
              onChange={(e) => this.handleChange(e)}
            />

            {this.state.passwordMismatchedError === true ? (
              <p className="error-message">Please re-enter password</p>
            ) : null}
            {this.state.successfulLoginMessage === true ? (
              <p className="success-message">
                Succesfully Registered! Please Login agian
              </p>
            ) : null}
          </li>

          <li>
            <button
              className="user-login-btn"
              onClick={(e) => this.validateUser(e).then(this.registerUser)}
            >
              Sign In
            </button>
          </li>
          <li>
            <span className="loginText">Already have an account?</span>
            <span>
              <button
                className="loginLink"
                onClick={() => {
                  this.props.propsDisplayFormFn("login");
                }}
              >
                Log-in
              </button>
            </span>
          </li>
        </form>
      </div>
    );
  }
}

export default withRouter(SigninFrom);
