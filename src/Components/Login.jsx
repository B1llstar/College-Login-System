import "../styles/Login.css";
import React, { Component } from "react";

class Login extends Component {
  state = {
    user: "",
    pass: "",
    userType: "",
    auth: "",
  };

  update = () => {};
  render() {
    var { user, pass, userType } = this.state;

    return (
      <div className="container-fluid" id="loginFormContainer" max-height="80%">
        <form>
          <div className="row">
            <div className="col-3">
              <input
                type="text"
                className="form-control"
                placeholder="E-mail"
                onChange={(e) => {
                  user = e.target.value;
                  console.log(user);
                }}
              />
            </div>
            <div className="col-3">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                onChange={(e) => {
                  pass = e.target.value;
                  console.log("Changing", pass);
                }}
              />
            </div>
          </div>

          <div className="row">
            <div className="form-group col-3">
              <label for="inputState"></label>
              <select
                id="inputState"
                onChange={(e) => {
                  userType = e.target.value;
                }}
                className="form-control"
                defaultValue={"Choose User Type"}
              >
                <option>Choose User Type</option>
                <option value="Student">Student</option>
                <option value="Admin">Admin</option>
                <option value="Faculty">Faculty</option>
                <option value="ResearchStaff">Research Staff</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <button
                type="submit"
                className="btn btn-primary mt-3"
                onClick={(e) => {
                  e.preventDefault();
                  this.props.onLoginSubmit(user, pass, userType);
                }}
              >
                Sign in
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
