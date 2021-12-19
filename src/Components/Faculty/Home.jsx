import React, { Component } from "react";
import QueryHandler from "./QueryHandler";
import "../../styles/NavigationStyles.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav: [
        { name: "Home", onClick: "#" },
        { name: "Assigned Course List", onClick: this.props.facultyCoursesTeaching },
        { name: "Course Search", onClick: this.props.courseSearch },
        { name: "Degree Audit Pt1", onClick: this.props.degreeAuditPt1 },
        { name: "Degree Audit Pt2", onClick: this.props.degreeAuditPt2 },
        { name: "Faculty Login Info", onClick: this.props.facultyLoginInfo },
        { name: "Record Attendance", onClick: this.props.recordAttendance },
        { name: "Student History", onClick: this.props.studentHistory },
        { name: "Unofficial Transcript", onClick: this.props.transcript },
        { name: "Update Password", onClick: this.props.updatePassword },
        { name: "View Holds", onClick: this.props.viewHolds },
        { name: "View Registration", onClick: this.props.viewRegistration },
        { name: "View Student Advisees", onClick: this.props.viewStudentAdvisees },
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
