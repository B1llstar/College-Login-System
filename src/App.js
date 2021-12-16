import React, { Component } from "react";
import NavBar from "./Components/NavBar.jsx";
import Login from "./Components/Login.jsx";
import Axios from "axios";
import "./bootstrap/css/bootstrap.css";
import "./bootstrap/css/bootstrap.min.css";
import MasterSchedule from "./Components/MasterSchedule.jsx";
import Faculty from "./User_Classes/Faculty.js";
import ResearchStaff from "./User_Classes/ResearchStaff.js";
import Admin from "./User_Classes/Admin.js";
import Student from "./User_Classes/Student.js";
import Main from "./User_Classes/Main.js";
import AdminApp from "./Components/Navigation/App";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { username: " ", displayMsg: "Login", faculty: "" };
  }

  handleLogin = (user, pass, userType) => {
    // is there a better way to do this?
    // using states b/c i need this data to be persistent
    var displayMsg = "";

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
        console.log(response.data.validated + "crigne");
        this.setState({ username: user });

        displayMsg = "Success! Logged in as " + this.state.username;

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
        <AdminApp />
        <div className="row">
          <div className="col-2">
            <NavBar onClick={this.handleNavClick}></NavBar>
          </div>
          <h1>{this.state.displayMsg}</h1>
          <div className="col-8">
            <Login onLoginSubmit={this.handleLogin}></Login>
          </div>
        </div>
        <div className="row">
          <div id="widget" className="col-4">
            <MasterSchedule
              className="col-8"
              obj={{ data: [], arrData: [] }}
            ></MasterSchedule>
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
        <button onClick={console.log(Faculty)}>Hi</button>
      </React.Fragment>
    );
  }
}

export default App;
