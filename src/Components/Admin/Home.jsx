import React, { Component } from "react";
import QueryHandler from "./QueryHandler";
import "../../styles/NavigationStyles.css";
import ReactDOM from "react-dom";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: [],
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
        {
          name: "Unofficial Transcript",
          onClick: this.props.unofficialTranscript,
        },
        { name: "Update Password", onClick: this.props.updatePasswprd },
        { name: "View Advisees", onClick: this.props.viewAdvisees },
        { name: "View Advisors", onClick: this.props.viewAdvisors },
        { name: "View All Users", onClick: this.props.viewAllUsers },
        { name: "View Course History", onClick: this.props.viewCourseHistory },
        { name: "View Faculty Advisors", onClick: this.props.viewFacultyAdvisors },
        { name: "View Holds", onClick: this.props.viewHolds },
        { name: "View Registration", onClick: this.props.viewRegistration },
        {
          name: "View Student Login Info",
          onClick: this.props.studentLoginInfo,
        },
        {
          name: "View Student Schedule",
          onClick: this.props.viewStudentSchedule,
        },
        { name: "Logout", onClick: "./Logout" }, // some arbitrary location atm
      ],
    };
  }

  makeFields = (fields) => {
    let eles = [];
    let col = 12 % fields.length; // modulo actually coming in handy
    // dynamically create column length based on amt. fields
    let colString = col.toString();
    fields.map((ele, index) => {
      if (fields.length % 2 == 0) {
        eles.push(
          <div className="row">
            <div className={colString} key="index">
              <input
                id={fields[index]}
                onChange={(e) => {
                  fields[index] = e.target.value;
                  console.log(fields[index]);
                }}
                placeholder={fields[index]}
              ></input>
            </div>{" "}
          </div>
        );
      } else {
        <div className={colString} key="index">
          <input
            id={fields[index]}
            onChange={(e) => {
              fields[index] = e.target.value;
              console.log(fields[index]);
            }}
            placeholder={fields[index]}
          ></input>
        </div>;
      }
    });
    this.setState({ fields: eles });
    return eles;
  };

  doSomething() {
    console.log("doing");
  }

  makeFields = (fields) => {
    let eles = [];
    let col = 12 % fields.length; // modulo actually coming in handy
    // dynamically create column length based on amt. fields
    let colString = col.toString();
    fields.map((ele, index) => {
      if (fields.length % 2 == 0) {
        eles.push(
          <div className="row">
            <div className={colString} key="index">
              <input
                id={fields[index]}
                onChange={(e) => {
                  fields[index] = e.target.value;
                  console.log(fields[index]);
                }}
                placeholder={fields[index]}
              ></input>
            </div>{" "}
          </div>
        );
      } else {
        <div className={colString} key="index">
          <input
            id={fields[index]}
            onChange={(e) => {
              fields[index] = e.target.value;
              console.log(fields[index]);
            }}
            placeholder={fields[index]}
          ></input>
        </div>;
      }
    });
    this.setState({ fields: eles });
    return eles;
  };

  render() {
    this.makeFields();
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
            onClick={() => {
              ele.onClick();
              ReactDOM.render(<div></div>, document.getElementById("test2"));
            }}
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
