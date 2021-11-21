import React, { Component } from "react";
import "./UserLogin.css";
import Header1 from "../Header/Header1";
// import LoginForm from "../LoginForm/LoginForm";
import SigninForm from "../SigninForm/SigninFrom";
import LoginForm from "../LoginForm/LoginForm";

class UserLogin extends Component {
  state = {
    formToBeDisplayed: "login",
  };
  displayForm = (formName) => {
    this.setState({ formToBeDisplayed: formName });
  };
  render() {
    return (
      <div className="user-login">
        <Header1 propsDisplayFormFn={this.displayForm} />
        <div className="form-container">
          {this.state.formToBeDisplayed === "login" ? (
            <LoginForm />
          ) : (
            <SigninForm />
          )}
        </div>
      </div>
    );
  }
}

export default UserLogin;