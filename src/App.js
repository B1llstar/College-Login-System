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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userCredentials: {
        userID: "",
        password: "",
        userEmail: "",
      },
      requestBodyData: {
        // for query request body
        userID: "",
        password: "",
        userEmail: "",
      },

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
    // is there a better way to do this?
    // using states b/c i need this data to be persistent
    var displayMsg = "";
    console.log("Type: ", userType);

    console.log("Calling");
    Axios.post("http://localhost:3305/Main/login", {
      args: { username: user, password: pass, userType: userType },
      username: user,
      password: pass,
      userType: userType,
    }).then((response) => {
      console.log(response.data.validated);
      // console.log(response, "gay");
      if (response.data.validated) {
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

        let ele;
        switch (userType) {
          case "Admin":
            ReactDOM.render(
              <QueryHandlerAdmin userType={"Admin"}></QueryHandlerAdmin>,
              document.getElementById("NavBar")
            );
            break;
          case "Faculty":
            ReactDOM.render(
              <QueryHandlerFaculty userType={"Faculty"}></QueryHandlerFaculty>,
              document.getElementById("NavBar")
            );
            console.log("Faculty");

            break;
          case "Research Staff":
            ReactDOM.render(
              <QueryHandlerResearchStaff
                userType={"ResearchStaff"}
              ></QueryHandlerResearchStaff>,
              document.getElementById("NavBar")
            );
          case "Student":
            ReactDOM.render(
              <QueryHandlerStudent userType={"Student"} user={}></QueryHandlerStudent>,
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
        this.setState({ userCredentials });
        console.log(this.state.userCredentials);

        displayMsg =
          "Success! Logged in as " + this.state.userCredentials.userID;

        console.log("crigne");

        // console.log(response.data[0].userEmail);
        // console.reselog(response);
        this.setState({ displayMsg });

        // whatever res.send is basically
      } else {
        displayMsg = "Incorrect user/pass combo! Please try again.";
        this.setState({ displayMsg });
      }
    });
  };

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
          <div id="widget" className="col-4">
            {/*
            <Display
              className="col-8"
              obj={{ data: [], arrData: [] }}
            ></Display>*/}
            {/*
            <MasterSchedule
              className="col-8"
              obj={{ data: [], arrData: [] }}
            ></MasterSchedule>
            */}
          </div>
        </div>

        <div>
          {/* Landing Page Routes THESE ARE HOME FOR EACH USER
                Root, Student, Faculty, Admin, ResearchStaff
                */}

          {/* EVERYTHING IS A SIDEBAR OPTION
                
                Student Navigation Routes
                CourseSearch, ViewRegistration, RegisterCourse, DropCourse, ViewHolds,
                ViewTranscript, DegreeAudit, ViewAdviconst 
                 = useSelector(state => state.
                  )
                */}

          {/* Error Page Route 
                \asterisk
                */}
        </div>
      </React.Fragment>
    );
  }
}

export default App;
