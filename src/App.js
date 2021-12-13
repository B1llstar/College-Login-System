<<<<<<< HEAD
import React, { Component } from "react";

import "./App.css";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Student from './Pages/Student';
import Faculty from './Pages/Faculty';
import Admin from './Pages/Admin';
import ResearchStaff from './Pages/ResearchStaff';
import NavBar from "./Components/NavBar.jsx";
import Login from "./Components/Login.jsx";
import ErrorPage from './Pages/ErrorPage';
import Axios from "axios";
import "./bootstrap/css/bootstrap.css";
import "./bootstrap/css/bootstrap.min.css";
import { CourseSearch, ViewRegistration, RegisterCourse, DropCourse,
  ViewHolds, ViewTranscript, DegreeAudit, ViewAdvisor } from './Pages/studentSections/studentSections';
import MasterSchedule from "./Components/MasterSchedule.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { username: " ", displayMsg: "Login" };
  }

  handleLogin = (user, pass, userType) => {
    // is there a better way to do this?
    // using states b/c i need this data to be persistent
    var displayMsg = "";

    console.log("Calling");
    Axios.post("http://localhost:3002/login", {
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

        <div><Router>
        <div>
        <Routes>

            {/* Landing Page Routes */}
            <Route path="/" element={<root />} />
            <Route path="/Student" element={<Student />} />
            <Route path="/Faculty" element={<Faculty />} />
            <Route path="/Admin" element={<Admin />} />
            <Route path="/ResearchStaff" element={<ResearchStaff />} />

            {/* Student Navigation Routes */}
            <Route path="/CourseSearch" element={<CourseSearch />} />
            <Route path="/ViewRegistration" element={<ViewRegistration />} />
            <Route path="/RegisterCourse" element={<RegisterCourse />} />
            <Route path="/DropCourse" element={<DropCourse />} />
            <Route path="/ViewHolds" element={<ViewHolds />} />
            <Route path="/ViewTranscript" element={<ViewTranscript />} />
            <Route path="/DegreeAudit" element={<DegreeAudit />} />
            <Route path="/ViewAdvisor" element={<ViewAdvisor />} />

            {/* Error Page Route */}
            <Route path="*" element={<ErrorPage />} />
        </Routes>
        </div>
    </Router></div>
      </React.Fragment>
    );
  }
}

export default App;
=======
import "./App.css";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Student from './Pages/Student';
import Faculty from './Pages/Faculty';
import Admin from './Pages/Admin';
import ResearchStaff from './Pages/ResearchStaff';
import ErrorPage from './Pages/ErrorPage';
import { CourseSearch, ViewRegistration, RegisterCourse, DropCourse,
    ViewHolds, ViewTranscript, DegreeAudit, ViewAdvisor } from './Pages/studentSections/studentSections';


function App(){
    return (

    );
}

export default App;
>>>>>>> With_Chris_Files
