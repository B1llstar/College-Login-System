import "../styles/Login.css";
import React, { Component } from "react";
import ReactDOM from "react-dom";
class AllForms extends Component {
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
      crn: "",
      courseName: "",
      numCredits: "",
      deptID: "",
      userType: "",
      firstName: "",
      Instructor: "",
      lastName: "",
      phoneNum: "",
      DOB: "",
      street: "",
      studentID: "",
      email: "",
      city: "",
      state: "",
      zip: "",
    },
  };

  constructor() {
    super();
    let populateFields = this.populateFields.bind(this);
    this.populateFields = populateFields;
    let temp = this.showFields.bind(this);
    this.showFields = temp;
    temp = this.hideFields.bind(this);
    this.hideFields = temp;
  }

  populateFields = (type) => {};
  clearFields = (which) => {
    if (which == 1) document.getElementById("form1").reset();
    if (which == 2) {
      document.getElementById("form2").reset();
    }
  };
  showFields = () => {
    let {
      userID,
      courseID,
      courseName,
      numCredits,
      crn,
      deptID,
      
      userType,
      firstName,
      lastName,
      phoneNum,
      DOB,
      street,
      studentID,
      email,
      city,
      state,
      zip,
      Instructor,
    } = this.state.tempData;

    let button = (
      <div className="container-fluid" id="loginFormContainer" max-height="80%">
        <button onClick={this.hideFields}>Hide</button>
        <form id="form2">
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
                id="studentID"
                type="text"
                className="form-control"
                placeholder="studentID"
                onChange={(e) => {
                  studentID = e.target.value;
                }}
              />
            </div>

            <div className="col-3">
              <input
                id="email"
                type="text"
                className="form-control"
                placeholder="email"
                onChange={(e) => {
                  email = e.target.value;
                }}
              />
            </div>
            <div className="col-3">
              <input
                id="courseID"
                type="text"
                className="form-control"
                placeholder="courseID"
                onChange={(e) => {
                  courseID = e.target.value;
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
                type="text"
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
                type="text"
                className="form-control"
                placeholder="street"
                onChange={(e) => {
                  DOB = e.target.value;
                }}
              />
            </div>

            <div className="col-3">
              <input
                id="street"
                type="text"
                className="form-control"
                placeholder="street"
                onChange={(e) => {
                  street = e.target.value;
                }}
              />
            </div>

            <div className="col-3">
              <input
                id="city"
                type="text"
                className="form-control"
                placeholder="city"
                onChange={(e) => {
                  city = e.target.value;
                }}
              />
            </div>

            <div className="col-3">
              <input
                id="state"
                type="text"
                className="form-control"
                placeholder="state"
                onChange={(e) => {
                  state = e.target.value;
                }}
              />
            </div>

            <div className="col-3">
              <input
                id="zip"
                type="text"
                className="form-control"
                placeholder="zip"
                onChange={(e) => {
                  zip = e.target.value;
                }}
              />
            </div>

            <div className="col-3">
              <input
                id="courseID"
                type="text"
                className="form-control"
                placeholder="courseID"
                onChange={(e) => {
                  courseID = e.target.value;
                }}
              />
            </div>

            <div className="col-3">
              <input
                id="courseName"
                type="text"
                className="form-control"
                placeholder="courseName"
                onChange={(e) => {
                  courseName = e.target.value;
                }}
              />
            </div>

            <div className="col-3">
              <input
                id="numCredits"
                type="text"
                className="form-control"
                placeholder="numCredits"
                onChange={(e) => {
                  numCredits = e.target.value;
                }}
              />
            </div>
            <div className="col-3">
              <input
                id="crn"
                type="text"
                className="form-control"
                placeholder="crn"
                onChange={(e) => {
                  crn = e.target.value;
                }}
              />
            </div>

            <div className="col-3">
              <input
                id="deptID"
                type="text"
                className="form-control"
                placeholder="deptID"
                onChange={(e) => {
                  deptID = e.target.value;
                }}
              />
            </div>
            <div className="col-3">
              <input
                id="Instructor"
                type="text"
                className="form-control"
                placeholder="Instructor"
                onChange={(e) => {
                  Instructor = e.target.value;
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
                  this.props.passQueryParams({
                    userID,
                    courseID,
                    crn,
                    userType,
                    firstName,
                    lastName,
                    phoneNum,
                    DOB,
                    street,
                    studentID,
                    email,
                    city,
                    state,
                    zip,
                    courseName,
                    numCredits,

                    deptID,
                    Instructor,
                  });
                  // this.props.onAllFormsSubmit(user, pass, userType);
                  this.clearFields(2);
                }}
              >
                Sign in
              </button>
            </div>
          </div>
        </form>
      </div>
    );
    ReactDOM.render(button, document.getElementById("root"));
  };

  hideFields = () => {
    let showFields = this.showFields;
    ReactDOM.render(
      <button onClick={() => showFields()}>Show</button>,
      document.getElementById("root")
    );
  };

  makeForm() {}
  render() {
    var {
      userID,
      courseID,
      crn,
      courseName,
      numCredits,
      deptID,
      userType,
      firstName,
      lastName,
      phoneNum,
      DOB,
      street,
      studentID,
      email,
      city,
      state,
      zip,
      Instructor,
    } = this.state.tempData;

    let fields = ["userID", "firstName"];

    return (
      <div className="container-fluid" id="loginFormContainer" max-height="80%">
        <button onClick={this.hideFields}>Hide</button>
        <form id="form1">
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
                id="studentID"
                type="text"
                className="form-control"
                placeholder="studentID"
                onChange={(e) => {
                  studentID = e.target.value;
                }}
              />
            </div>

            <div className="col-3">
              <input
                id="email"
                type="text"
                className="form-control"
                placeholder="email"
                onChange={(e) => {
                  email = e.target.value;
                }}
              />
            </div>
            <div className="col-3">
              <input
                id="courseID"
                type="text"
                className="form-control"
                placeholder="userType"
                onChange={(e) => {
                  courseID = e.target.value;
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
                type="text"
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
                type="text"
                className="form-control"
                placeholder="street"
                onChange={(e) => {
                  DOB = e.target.value;
                }}
              />
            </div>

            <div className="col-3">
              <input
                id="street"
                type="text"
                className="form-control"
                placeholder="street"
                onChange={(e) => {
                  street = e.target.value;
                }}
              />
            </div>

            <div className="col-3">
              <input
                id="city"
                type="text"
                className="form-control"
                placeholder="city"
                onChange={(e) => {
                  city = e.target.value;
                }}
              />
            </div>

            <div className="col-3">
              <input
                id="state"
                type="text"
                className="form-control"
                placeholder="state"
                onChange={(e) => {
                  state = e.target.value;
                }}
              />
            </div>

            <div className="col-3">
              <input
                id="zip"
                type="text"
                className="form-control"
                placeholder="zip"
                onChange={(e) => {
                  zip = e.target.value;
                }}
              />
            </div>
            <div className="col-3">
              <input
                id="courseID"
                type="text"
                className="form-control"
                placeholder="courseID"
                onChange={(e) => {
                  courseID = e.target.value;
                }}
              />
            </div>

            <div className="col-3">
              <input
                id="courseName"
                type="text"
                className="form-control"
                placeholder="courseName"
                onChange={(e) => {
                  courseName = e.target.value;
                }}
              />
            </div>

            <div className="col-3">
              <input
                id="numCredits"
                type="text"
                className="form-control"
                placeholder="numCredits"
                onChange={(e) => {
                  numCredits = e.target.value;
                }}
              />
            </div>
            <div className="col-3">
              <input
                id="crn"
                type="text"
                className="form-control"
                placeholder="crn"
                onChange={(e) => {
                  crn = e.target.value;
                }}
              />
            </div>

            <div className="col-3">
              <input
                id="deptID"
                type="text"
                className="form-control"
                placeholder="deptID"
                onChange={(e) => {
                  deptID = e.target.value;
                }}
              />
            </div>
            <div className="col-3">
              <input
                id="Instructor"
                type="text"
                className="form-control"
                placeholder="Instructor"
                onChange={(e) => {
                  Instructor = e.target.value;
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
                  this.clearFields(1);

                  this.props.passQueryParams({
                    userID,
                    crn,
                    courseID,
                    userType,
                    firstName,
                    lastName,
                    phoneNum,
                    DOB,
                    street,
                    studentID,
                    email,
                    city,
                    state,
                    zip,
                    courseName,
                    numCredits,
                    deptID,
                    Instructor,
                  });
                  // this.props.onAllFormsSubmit(user, pass, userType);
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default AllForms;
