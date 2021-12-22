import React, { Component } from "react";
import NavBar from "./Components/NavBar.jsx";
import Login from "./Components/Login.jsx";
import Axios from "axios";
import "./bootstrap/css/bootstrap.css";
import "./bootstrap/css/bootstrap.min.css";

import MasterSchedule from "./Components/Display";
import Display from "./Components/Display";
import Faculty from "./Components/Faculty/Faculty.js";
import ReactDOM from "react-dom";
import QueryHandlerAdmin from "./Components/Admin/QueryHandler.jsx";
import QueryHandlerFaculty from "./Components/Faculty/QueryHandler.jsx";
import QueryHandlerResearchStaff from "./Components/ResearchStaff/QueryHandler";
import QueryHandlerStudent from "./Components/Student_/QueryHandler";
import DynamicForms from "./Components/DynamicForms.jsx";
import "./_styles_/NavigationScrolling.css";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userCredentials: {
        userID: "",
        password: "",
        userEmail: "",
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
      username: " ",
      password: "",
      studentID: 0,
      displayMsg: "Login",
    };

    this.displays = [
      ,// Admin
      /*
      <NavBar>
      
        sideBarOptions={{
          eles: [
            "Access Student Registration",
            "Create Course",
            "Create User",
            "Delete Course",
            "Drop Student Course",
            "Modify Course",
            "Modify Master Schedule",
            "Modify User",
            "Register Student for Course",
            "View All Courses",
            "View All Users",
            "View Current Faculty Advisors",
            "View Student Degree Audit",
            "View Student Holds",
            "View Student Transcript",
          ],
        }}
        userType={"Admin"}
      ></NavBar>,
      // Faculty
      <NavBar
        sideBarOptions={{
          eles: [
            "Access Student Registration",
            "Access Student Schedule",
            "Access Student Transcript",
            "Record Attendance",
            "View Advisees",
            "View Courses",
            "View Exam Schedules",
            "View Student Holds",
          ],
        }}
        userType={"Faculty"}
      ></NavBar>,
      // Research Staff
      <NavBar
        sideBarOptions={{
          eles: [
            "View Course Catalog",
            "View Exam Schedules",
            "View Grade Data",
            "View Master Schedule",
            "View Registration Data",
            "View Student Holds",
          ],
        }}
        userType={"ResearchStaff"}
      ></NavBar>,
      // Student
      <NavBar
        sideBarOptions={{
          eles: [
            "Home",
            "View Registration",
            "Course Search",
            "Register Course",
            "Drop Course",
            "View Holds",
            "Transcript",
            "Degree Audit",
            "View Advisor",
          ],
        }}
        userType={"Student"}
      ></NavBar>   */
    ];
  }

  handleLogin = (user, pass, userType) => {
    var displayMsg = "";

    Axios.post("http://localhost:3305/Main/login", {
      args: { username: user, password: pass, userType: userType },
      username: user,
      password: pass,
      userType: userType,
    }).then((response) => {
      console.log(response.data.validated);
      if (response.data.validated) {
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
        this.setState({ userCredentials });

        switch (userType) {
          case "Admin":
            ReactDOM.render(
              <QueryHandlerAdmin
                userType={"Admin"}
                tempData={this.state.tempData}
                userCredentials={this.state.userCredentials}
              ></QueryHandlerAdmin>,
              document.getElementById("NavBar")
            );
            break;
          case "Faculty":
            ReactDOM.render(
              <QueryHandlerFaculty
                userCredentials={this.state.userCredentials}
                userType={"Faculty"}
                tempData={this.state.tempData}
                userCredentials={this.state.userCredentials}
              ></QueryHandlerFaculty>,
              document.getElementById("NavBar")
            );
            console.log("Faculty");
            break;
          case "Research Staff":
            ReactDOM.render(
              <QueryHandlerResearchStaff
                userType={"ResearchStaff"}
                tempData={this.state.tempData}
                userCredentials={this.state.userCredentials}
              ></QueryHandlerResearchStaff>,
              document.getElementById("NavBar")
            );
          case "Student":
            ReactDOM.render(
              <QueryHandlerStudent
                userType={"Student"}
                tempData={this.state.tempData}
                userCredentials={this.state.userCredentials}
              ></QueryHandlerStudent>,
              document.getElementById("NavBar")
            );
            console.log("Match");
            break;
          default:
            console.log("Nothing of import.");
        }

        /*
        let eles = this.displays;
        eles.forEach((element) => {
          console.log(element);
          if (element.props.userType == userType) {
            console.log("Rendering NavBar for type: " + userType);
            ReactDOM.render(
              <div>{element}</div>,
              document.getElementById("NavBar")
            );
          }
        }); */

        displayMsg =
          "Success! Logged in as " + this.state.userCredentials.userID;

        this.setState({ displayMsg });

        // whatever res.send is basically
      } else {
        displayMsg = "Incorrect user/pass combo! Please try again.";
        this.setState({ displayMsg });
      }
    });
  };

  doHandleGenerateForms(forms) {
    ReactDOM.render(<div>{forms}</div>, document.getElementById("NavBar"));
  }

  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-2"></div>
          <h1>{this.state.displayMsg}</h1>
          <div className="col-8">
            <Login onLoginSubmit={this.handleLogin}></Login>
          </div>
        </div>
        <div className="row">
          <DynamicForms fields={["studentID"]}></DynamicForms>
          <div id="widget" className="col-4"></div>
        </div>

        <div></div>
      </React.Fragment>
    );
  }
}

export default App;
