import React from "react";
import Input from "./Input";
import Button from "./button";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: window.localStorage.getItem("email")
        ? window.localStorage.getItem("email")
        : "",
      password: window.localStorage.getItem("password")
        ? window.localStorage.getItem("password")
        : "",
      emailError: window.localStorage.getItem("emailError")
        ? window.localStorage.getItem("emailError")
        : "",
      passwordError: window.localStorage.getItem("passwordError")
        ? window.localStorage.getItem("passwordError")
        : "",
      isValidEmail: false,
      isValidPassword: false,
    };
  }

  handleChangeEmail = (e) => {
    this.setState({ email: e.target.value });
    const mailCheck =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const isValid = mailCheck.test(e.target.value);
    if (isValid) {
      this.setState({ isValidEmail: true, emailError: "" });
    } else if (e.target.value === "") {
      this.setState({ isValidEmail: false, emailError: "" });
    } else {
      this.setState({
        emailError: "Please, enter valid email!",
        isValidEmail: false,
      });
    }
  };

  handleChangePassword = (e) => {
    this.setState({ password: e.target.value });
    const passwordCheck =
      /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$/;
    const isValid = passwordCheck.test(e.target.value);
    if (isValid) {
      this.setState({ isValidPassword: true, passwordError: "" });
    } else if (e.target.value === "") {
      this.setState({ isValidPassword: false });
    } else {
      this.setState({ isValidPassword: false, passwordError: "Please, enter valid password" });
    }
  };

  render() {
    localStorage.setItem("email", this.state.email);
    localStorage.setItem("password", this.state.password);
    localStorage.setItem("emailError", this.state.emailError);
    localStorage.setItem("passwordError", this.state.passwordError);
    const checkValidation =
      this.state.isValidEmail && this.state.isValidPassword;
    return (
      <div>
        <Input
          name="Email"
          type="text"
          placeholder="email"
          value={this.state.email}
          onChange={this.handleChangeEmail}
          error={this.state.emailError}
        />
        <Input
          name="Password"
          type="password"
          placeholder="password"
          value={this.state.password}
          onChange={this.handleChangePassword}
          error={this.state.passwordError}
        />
        <div>
          <Button text="Submit" disabled={!checkValidation} />
        </div>
      </div>
    );
  }
}

export default Login;
