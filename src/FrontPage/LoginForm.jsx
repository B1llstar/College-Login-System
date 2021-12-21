import React, { Component } from "react";
import "../bootstrap/css/bootstrap.css";
import "../bootstrap/css/bootstrap.min.css";
import "./login_form.css";

class LoginForm extends React.Component {
  state = {
    credentials: {
      user: "",
      pass: "",
      userType: "",
      auth: "",
    },
  };

  constructor() {
    super();
    let populateFields = this.populateFields.bind(this);
    this.populateFields = populateFields;
  }

  populateFields = (type) => {
    let userEmail;
    let pass;
    let userType;
    switch (type) {
      case "Admin": {
        userEmail = "mguyanb6@neweastbury.edu";
        pass = "6RtZQZWl38TO";
        userType = type;
        break;
      }
      case "Faculty": {
        userEmail = "sgoldwater5a@neweastbury.edu";
        pass = "jyOVzoCb4";
        userType = type;
        break;
      }
      case "ResearchStaff": {
        userEmail = "mrapperbd@neweastbury.edu";
        pass = "ooKCSHmUO";
        userType = type;
        break;
      }
      case "Student": {
        userEmail = "smashamlw@neweastbury.edu";
        pass = "jSNHlqbS";
        userType = type;
        break;
      }
    }

    let credentials = {
      user: userEmail,
      pass: pass,
      userType: type,
    };

    this.setState({ credentials });
    console.log(this.state.credentials);
  };

  handleLogin = (user, pass, userType) => {
    // is there a better way to do this?
    // using states b/c i need this data to be persistent
    var displayMsg = "";
    console.log("Type: ", userType);

    let testArgs = {};
    console.log("Calling");
    Axios.post("http://localhost:3305/Main/login", {
      args: { username: user, password: pass, userType: userType },
      username: user,
      password: pass,
      userType: userType,
    }).then((response) => {
      console.log(response.data.validated);
      if (response.data.validated) {
        // successful login
        console.log(response.data);
        console.log(response.data.validated + "crigne");
        let userID = response.data.userID;
        let userType = response.data.userType;

        let userEmail = response.data.userEmail;
        let userCredentials = {
          userID: userID,
          password: pass,
          userEmail: userEmail,
          userType: response.data.userType,
        };
        console.log(response.data.userType);
        let element = <App userCredentials={userCredentials}></App>;
      }
    });
  };

  render() {
    return (
      <div className="container-fluid" id="loginFormContainer" max-height="80%">
        <button onClick={() => this.populateFields("Admin")}>
          Auto Populate ADMIN
        </button>
        <button onClick={() => this.populateFields("Faculty")}>
          Auto Populate FACULTY
        </button>
        <button onClick={() => this.populateFields("ResearchStaff")}>
          Auto Populate RESEARCH STAFF
        </button>

        <button onClick={() => this.populateFields("Student")}>
          Auto Populate STUDENT
        </button>

        <form>
          <div className="row">
            <div className="col-3">
              <input
                id="email"
                type="text"
                className="form-control"
                placeholder="E-mail"
                onChange={(e) => {
                  user = e.target.value;
                  console.log(user);
                }}
              />
            </div>
            {this.makeFields()}
            <div className="col-3">
              <input
                id="password"
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

export default LoginForm;
