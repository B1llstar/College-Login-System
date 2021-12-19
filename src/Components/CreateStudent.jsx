import "../styles/Login.css";
import React, { Component } from "react";

class Login extends Component {
  state = {
    credentials: {
      user: "",
      pass: "",
      userType: "",
      auth: "",
    },
    tempData: {
      // for custom inputs
      userID: "",
      courseID: "",
      userType: "",
      firstName: "",
      lastName: "",
      phoneNum: "",
      DOB: "",
      street: "",
      city: "",
      state: "",
      zip: "",
    },
  };

  constructor() {
    super();
    let populateFields = this.populateFields.bind(this);
    this.populateFields = populateFields;
  }

  populateFields = (type) => {};

  render() {
    var {
      userID,
      courseID,
      userType,
      firstName,
      lastName,
      phoneNum,
      DOB,
      street,
      city,
      state,
      zip,
    } = this.props.tempData;

    let fields = ["userID", "firstName"];

    return (
      <div className="container-fluid" id="loginFormContainer" max-height="80%">
        <form>
          <div className="row">
            <div className="col-3">
              <input
                id="userID"
                type="text"
                className="form-control"
                placeholder="userID"
                onChange={(e) => {
                  userID = e.target.value;
                }}
              />
            </div>
            <div className="col-3">
              <input
                id="userType"
                type="text"
                className="form-control"
                placeholder="userType"
                onChange={(e) => {
                  userType = e.target.value;
                }}
              />
            </div>
            <div className="col-3">
              <input
                id="firstName"
                type="text"
                className="form-control"
                placeholder="firstName"
                onChange={(e) => {
                  firstName = e.target.value;
                }}
              />
            </div>
            <div className="col-3">
              <input
                id="lastName"
                type="text"
                className="form-control"
                placeholder="lastName"
                onChange={(e) => {
                  lastName = e.target.value;
                }}
              />
            </div>
            <div className="col-3">
              <input
                id="phoneNum"
                type="password"
                className="form-control"
                placeholder="phoneNum"
                onChange={(e) => {
                  phoneNum = e.target.value;
                }}
              />
            </div>

            <div className="col-3">
              <input
                id="password"
                type="password"
                className="form-control"
                placeholder="Password"
                onChange={(e) => {
                  pass = e.target.value;
                }}
              />
            </div>

            <div className="col-3">
              <input
                id="password"
                type="password"
                className="form-control"
                placeholder="Password"
                onChange={(e) => {
                  pass = e.target.value;
                }}
              />
            </div>

            <div className="col-3">
              <input
                id="password"
                type="password"
                className="form-control"
                placeholder="Password"
                onChange={(e) => {
                  pass = e.target.value;
                }}
              />
            </div>

            <div className="col-3">
              <input
                id="password"
                type="password"
                className="form-control"
                placeholder="Password"
                onChange={(e) => {
                  pass = e.target.value;
                }}
              />
            </div>

            <div className="col-3">
              <input
                id="password"
                type="password"
                className="form-control"
                placeholder="Password"
                onChange={(e) => {
                  pass = e.target.value;
                }}
              />
            </div>

            <div className="col-3">
              <input
                id="password"
                type="password"
                className="form-control"
                placeholder="Password"
                onChange={(e) => {
                  pass = e.target.value;
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
