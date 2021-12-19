import React, { Component } from "react";
import QueryHandler from "./QueryHandler";
import "../../styles/NavigationStyles.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav: [
        { name: "Home", onClick: "#" },
        { name: "Assigned Course List", onClick: this.props.coursesTeaching },
        { name: "Course Search", onClick: this.props.courseSearch },
        { name: "Drop Course", onClick: this.props.dropCourse },
        { name: "Degree Audit", onClick: this.props.degreeAudit },
        { name: "Degree Audit 2", onClick: this.props.degreeAudit2 },
        { name: "Faculty Login Info", onClick: this.props.facultyLoginInfo },
        { name: "Record Attendance", onClick: this.props.recordAttendance },
        { name: "Register for Course", onClick: this.props.registerForCourse },
        { name: "Student History", onClick: this.props.studentHistory },
        { name: "Unofficial Transcript", onClick: this.props.unofficialTranscript,},
        { name: "Update Password", onClick: this.props.updatePasswprd },
        { name: "View Advisees", onClick: this.props.viewAdvisees },
        { name: "View Holds", onClick: this.props.viewHolds },
        { name: "View Registration", onClick: this.props.viewRegistration },
        { name: "View Student Schedule", onClick: this.props.viewStudentSchedule },
        { name: "Logout", onClick: "./Logout" }, // some arbitrary location atm
      ],
    };
  }

  doSomething() {
    console.log("doing");
  }


  render() {

    let eles = this.state.nav.map((ele) => {
      return (
        <div>
          <a
            class="nav-link"
            id="barBody"
            //data-toggle="pill"
            // href="#v-pills-home"
            role="tabpanel"
            href="#"
            onClick={ele.onClick}
            //aria-controls="v-pills-home"
            //aria-selected="true"
          >
            {ele.name}
          </a>
        </div>
      );
    });

    return (
      <div className="Sidebar">
        <div
          className="container"
          id="row"
          role="tablist"
          aria-orientation="vertical"
        >
          <nav class="menu">{eles}</nav>
        </div>
      </div>
    );
  }
}

export default Home;
