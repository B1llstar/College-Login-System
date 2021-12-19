import React, { Component } from "react";
import QueryHandler from "./QueryHandler";
import "../../styles/NavigationStyles.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav: [
        { name: "Home", onClick: "#" },
        { name: "Course Search", onClick: this.props.courseSearch },
        { name: "Create Course", onClick: this.props.createCourse },
        { name: "Create User", onClick: this.props.createUser },
        { name: "Degree Audit", onClick: this.props.degreeAuditPt1 },
        { name: "Degree Audit 2", onClick: this.props.degreeAuditPt2 },
        { name: "Delete Course", onClick: this.props.deleteCourse },
        { name: "Drop Course", onClick: this.props.dropCourse },
        { name: "Faculty Course List", onClick: this.props.facultyCourseList },
        { name: "Modify Course", onClick: this.props.modifyCourse },
        { name: "Modify User", onClick: this.props.modifyUser },
        { name: "Register for Course", onClick: this.props.registerForCourse },
        { name: "Student History", onClick: this.props.studentHistory },
        { name: "Unofficial Transcript", onClick: this.props.transcript,},
        { name: "Update Password", onClick: this.props.updatePassword },
        { name: "View All Users", onClick: this.props.viewAllUsers },
        { name: "View Course History", onClick: this.props.viewCourseHistory },
        { name: "View Faculty Advisors", onClick: this.props.viewFacultyAdvisors },
        { name: "View Holds", onClick: this.props.viewHolds },
        { name: "View Registration", onClick: this.props.viewRegistration },
        { name: "View Student Advisees", onClick: this.props.viewStudentAdvisees },
        { name: "View Student Login Info", onClick: this.props.studentLoginInfo },
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
