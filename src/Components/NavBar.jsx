import React, { Component } from "react";
import "../styles/NavigationStyles.css";
import DynamicForms from "./DynamicForms";
import ReactDOM from "react-dom";

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chosenUserTypeNavEleArray: [],
      curEle: "",
      Admin: [
        {
          name: "Home",
          onClick: this.wrapper,
          fields: ["studentID, firstName"],
        },
        {
          name: "Access Student Registration",
          onClick: this.props.accessStudentRegistration,
        },
        {
          name: "Create Course",
          onClick: this.props.createCourse,
          fields: ["courseID, courseName, numCredits, deptID"],
        },
        {
          name: "Create User",
          onClick: this.props.createUser,
          fields: [
            "studentID, firstName, lastName, phoneNumber, DOB, street, city, state, zip",
          ],
        },
        {
          name: "Delete Course",
          onClick: this.props.deleteCourse,
          fields: ["courseID"],
        },
        {
          name: "Drop Student Course",
          onClick: this.props.dropStudentCourse,
          fields: ["studentID, crn"],
        },
        {
          name: "Modify Course",
          onClick: this.props.modifyCourse,
          fields: ["courseID, courseName, numCredits, deptID, courseID"],
        },
        {
          name: "Modify Master Schedule",
          onClick: this.props.modifyMasterSchedule,
        },
        {
          name: "Modify User",
          onClick: this.props.modifyUser,
          fields: [
            "firstName, lastName, phoneNumber, DOB, street, city, state, zip",
          ],
        },
        {
          name: "Register Student for Course",
          onClick: this.props.registerStudentForCourse,
        },
        { name: "View All Courses", onClick: this.props.viewAllCourses },
        {
          name: "View Faculty Advisors",
          onClick: this.props.viewFacultyAdvisors,
        },
        {
          name: "View Student Degree Audit",
          onClick: this.props.viewStudentDegreeAudit,
        },
        { name: "View Student Holds", onClick: this.props.viewStudentHolds },
        {
          name: "View Student Transcript",
          onClick: this.props.viewStudentTranscript,
        },
      ],

      Student: [
        { name: "Home", onClick: "#" },
        { name: "Course Search", onClick: this.props.courseSearch },
        { name: "Drop Course", onClick: this.props.dropCourse },
        { name: "Degree Audit", onClick: this.props.degreeAudit },
        { name: "Degree Audit 2", onClick: this.props.degreeAudit2 },
        { name: "Register for Course", onClick: this.props.registerForCourse },
        { name: "Student History", onClick: this.props.studentHistory },
        { name: "Student Login Info", onClick: this.props.studentLoginInfo },
        {
          name: "Unofficial Transcript",
          onClick: this.props.unofficialTranscript,
        },
        { name: "Update Password", onClick: this.props.updatePasswprd },
        { name: "View Advisor", onClick: this.props.viewAdvisor },
        { name: "View Holds", onClick: this.props.viewHolds },
        { name: "View Registration", onClick: this.props.viewRegistration },
        { name: "Logout", onClick: "#" }, // some arbitrary location atm
      ],

      Faculty: [
        { name: "Home", onClick: "#" },
        {
          name: "Assigned Course List",
          onClick: this.props.coursesTeaching,
        },
        { name: "Course Search", onClick: this.props.courseSearch },
        { name: "Drop Course", onClick: this.props.dropCourse },
        { name: "Degree Audit", onClick: this.props.degreeAudit },
        { name: "Degree Audit 2", onClick: this.props.degreeAudit2 },
        { name: "Faculty Login Info", onClick: this.props.facultyLoginInfo },
        { name: "Record Attendance", onClick: this.props.recordAttendance },
        {
          name: "Register for Course",
          onClick: this.props.registerForCourse,
        },
        { name: "Student History", onClick: this.props.studentHistory },
        {
          name: "Unofficial Transcript",
          onClick: this.props.unofficialTranscript,
        },
        { name: "Update Password", onClick: this.props.updatePassword },
        { name: "View Advisees", onClick: this.props.viewAdvisees },
        { name: "View Holds", onClick: this.props.viewHolds },
        { name: "View Registration", onClick: this.props.viewRegistration },
        {
          name: "View Student Schedule",
          onClick: this.props.viewStudentSchedule,
        },
        { name: "Logout", onClick: "./Logout" }, // some arbitrary location atm
      ],

      /* Will do research staff at a later time
      ResearchStaff: [
        {name: "Home", onClick: "#"},

      ] */
    };

    // I put this underneath the code above simply because I'm not sure if
    // it would affect compile-time, since the state variables would not yet
    // be declared at that point
  }
  wrapper = (func, val) => {
    ReactDOM.render(
      <div>
        <DynamicForms fields={["crigne"]}></DynamicForms>
      </div>,
      document.getElementById("root")
    );
  };

  render() {
    let arr = [];
    switch (this.props.userType) {
      case "Admin":
        arr = this.state.Admin;
        console.log("Matched admin");
        break;
      case "Faculty":
        arr = this.state.Faculty;
        console.log("Matched faculty");
        break;
      //  case "Research Staff": // Holding off on research staff for now
      // this.setState({chosenUserTypeNavEleArray}) = this.state.ResearchStaff;
      case "Student":
        arr = this.state.Student;
        console.log("Chose student");

        break;
    }

    // let names = this.props.sideBarOptions.eles;
    // console.log(names);
    // Grab the ele array, spit out some buttons
    console.log(arr);
    let eles = arr.map((element) => {
      console.log(element);
      return (
        <div>
          <a
            class="nav-link"
            id="barBody"
            //data-toggle="pill"
            href="#v-pills-home"
            role="tabpanel"
            onClick={element.onClick}
          >
            {element["name"]}
          </a>
        </div>
      );
    });
    //aria-controls="v-pills-home" //aria-selected="true"
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
    // set height of parent to certain amount of pixels ex 100px
    // children set max-width to 100%, which will just mean 100px maximum
    // since that's the parent width
  }
}

export default NavBar;

// will make an array of items and then map them to buttons
