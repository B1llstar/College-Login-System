import React, { Component } from "react";
import "../styles/NavigationStyles.css";
import DynamicForms from "./DynamicForms";
import ReactDOM from "react-dom";
import FormTemplate from "./FormTemplate";
import { query } from "express";

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chosenUserTypeNavEleArray: [],
      curEle: "",
      // This is where we'll store the user inputs sent from FormTemplate!
      reqBodyObj: {},
      tempData: {
        // for custom inputs
        userID: "",
        Instructor: "",
        crn: "",
        courseID: "",
        courseName: "",
        numCredits: "",
        deptID: "",
        userType: "",
        firstName: "",
        lastName: "",
        phoneNum: "",
        DOB: "",
        street: "",
        studentID: "",
        email: "",
        city: "",
        state: "",
        zip: "",
      },
      userID: "542",
      // Commenting out the old onClicks because the query methods can be helpful later
      Admin: [
        {
          name: "Home",
          onClick: () =>
            console.log("Pressed home button. Add a redirect somewhere maybe?"),
        },

        {
          name: "Admin Login Info",
          onClick: () => {
            this.makeForm(
              ["userID"],

              this.props.adminLoginInfo
            );
            //this.props.facultyLoginInfo
          },
        },

        {
          name: "Test Login",
          onClick: () => {
            this.makeForm(
              ["userEmail", "password"],

              this.props.testLogin
            );
          },
        },
        {
          name: "Create Course",
          onClick: () => {
            this.makeForm(
              ["courseID", "courseName", "numCredits", "deptID"],
              this.props.createCourse
            );
          },
        },

        {
          name: "Search Course",
          onClick: () => {
            this.makeForm(
              // ["crn", "courseID", "courseName", "Instructor"],
              ["crn"],
              this.props.courseSearch
            );
          },
        },
        {
          name: "Create User",
          onClick: () =>
            this.makeForm(
              [
                "userID",
                "userType",
                "firstName",
                "lastName",
                "phoneNumber",
                "DOB",
                "street",
                "city",
                "state",
                "zip",
              ],
              this.props.createUser
            ),
        },
        {
          name: "Delete Course",
          onClick: () => this.makeForm(["courseID"], this.props.deleteCourse),
        },

        {
          name: "Drop Student Course",
          onClick: () => this.makeForm(["studentID", "crn"], this.props.dropCourse),
        },

        {
          name: "Modify Course",
          onClick: () =>
            this.makeForm(
              ["courseID",
              "courseName",
              "numCredits",
              "deptID",
              "courseID",
            ], this.props.modifyCourse),
        },

        {
          name: "Modify Master Schedule",
          // -------------------------- DO NOTHING FOR NOW onClick: () => this.makeForm(), --------------------------
          // query still needs to be written for this
          // onClick: this.props.modifyMasterSchedule,
        },

        {
          name: "Modify User",
          onClick: () =>
            this.makeForm(
              [
                "firstName",
                "lastName",
                "phoneNumber",
                "DOB",
                "street",
                "city",
                "state",
                "zip",
                "userID",
              ],
              this.props.modifyUser
            ),
        },

        {
          name: "Register Student for Course",
          onClick: () => this.makeForm(["studentID", "crn"], this.props.registerStudentForCourse),
        },

        {
          name: "Update Password",
          onClick: () => this.makeForm(["password", "userID"], this.props.updatePassword),
        },

        {
          name: "View Course History",
          //onClick: () => this.makeForm()
        },
        { name: "View All Users", onClick: () => this.props.viewAllUsers },
        { name: "View Course History", onClick: () => this.props.viewCourseHistory },

        
        {
          name: "View Student Advisees",
          onClick: () =>
            this.makeForm(
              ["studentID"],
              this.props.viewStudentAdvisees),
        },

        {
          name: "View Faculty Advisors",
          onClick: () => this.makeForm(["facultyID"], this.props.viewFacultyAdvisors),
        },

        {
          name: "Degree Audit Pt1",
          onClick: () =>
            this.makeForm(
              ["studentID"],
              this.props.degreeAuditPt1),
        },

        {
          name: "View Student Holds",
          onClick: () => this.makeForm(["studentID"], this.props.viewStudentHolds),
        },

        {
          name: "View Student Registration",
          onClick: () => this.makeForm(["studentID"], this.props.viewRegistration),
        },

        {
          name: "View Student Schedule",
          onClick: () => this.makeForm(["studentID"], this.props.viewStudentSchedule ),
        },

        {
          name: "View Student Transcript",
          onClick: () =>
            this.makeForm(
              ["studentID"],
              this.props.transcript), 
        },
      ],

      Student: [
        {
          name: "Home",
          onClick: "#",
        },

        {
          name: "Faculty Login Info",
          onClick: () => {
            //this.props.facultyLoginInfo
          },
        },
        
        { 
          name: "Course Search", 
          onClick: () =>
            this.makeForm(
              ["courseID"],
              this.props.courseSearch),  
        },

        {
          name: "Drop Course", //This one auto-fills student and password is an input field
          onClick: () => {
            //this.props.studentID,
            this.makeForm(["crn"], this.props.dropCourse);
          },
        },

        {
          name: "Degree Audit Pt1",
          onClick: () => {
            //this.props.degreeAuditPt1
          },
        },

        {
          name: "Degree Audit Pt2",
          onClick: () => {
            //this.props.degreeAuditPt2
          },
        },

        {
          name: "Register for Course",
          onClick: () => this.makeForm(["studentID", "crn"], this.props.registerForCourse)
        },

        {
          name: "Student History",
          onClick: () => this.props.studentHistory(),
        },

        {
          name: "Student Login Info",
          onClick: () => this.props.studentLoginInfo(),
        },

        {
          name: "Unofficial Transcript",
          onClick: () => this.props.transcript(),
        },
        
        { 
          name: "Update Password", 
          onClick: () =>
            this.makeForm(
              ["password",
              "userID"],
              this.props.updatePassword),  
        },

        {
          name: "View Advisor",
          onClick: () => this.props.viewAdvisor(),
        },

        {
          name: "View Holds",
          onClick: () => this.props.viewHolds(),
        },
        {
          name: "View Registration",
          onClick: () => this.props.viewRegistration(),
        },

        {
          name: "Logout",
          onClick: "#",
        }, // some arbitrary location atm
      ],

      Faculty: [
        {
          name: "Home",
          onClick: "#",
        },

        {
          name: "Assigned Course List",
          onClick: () => { //this.props.facultyCourseList 
          }, 
        },

        { 
          name: "Course Search", 
          onClick: () =>
            this.makeForm(
              ["courseID"],
              this.props.courseSearch),  
        },

        {
          name: "Degree Audit",
          onClick: () => this.makeForm(["studentID"]),
        
        { 
          name: "Degree Audit Pt1", 
          onClick: () => 
            this.makeForm(
              ["studentID"],
              this.props.degreeAuditPt1), 
        },
        
        { 
          name: "Degree Audit 2", 
          onClick: () =>
            this.makeForm([
              "studentID",
            ]), 
        },

        {
          name: "Course Search",
          onClick: () => this.makeForm(["courseID"]),
        },

        {
          name: "Degree Audit",
          onClick: () => this.makeForm(["studentID"]),
        },

        {
          name: "Degree Audit 2",
          onClick: () => this.makeForm(["studentID"]),
>>>>>>>>> Temporary merge branch 2
        },

        {
          name: "Faculty Login Info",
          onClick: () => this.props.facultyLoginInfo()
        },

        {
          name: "Record Attendance",
          onClick: () =>
            this.makeForm(
              ["studentID",
              "crn",
              "isPresent",
              "date"],
              this.props.recordAttendance),
        },

        { 
          name: "Student History", 
          onClick: () =>
            this.makeForm(
              ["studentID"],
              this.props.studentHistory), 
        },

        {
          name: "Student History",
          onClick: () => this.makeForm(["studentID"]),
>>>>>>>>> Temporary merge branch 2
        },

        {
          name: "Unofficial Transcript",
          onClick: () => this.makeForm(["studentID"], this.props.transcript),
        },

        {
          name: "Update Password", //AUTO FILL facultyID, user input password
          onClick: () => 
            this.makeForm(
              ["password"],
              this.props.updatePassword), 
        },

        { 
          name: "View Student Advisees", 
          onClick: () =>
            this.makeForm(
              ["studentID"],
              this.props.viewStudentAdvisees), 
        },

        { 
          name: "View Holds", 
          onClick: () =>
            this.makeForm(
              ["studentID"],
              this.props.viewHolds), 
        },

        { 
          name: "View Registration", 
          onClick: () =>
            this.makeForm(
              ["studentID"],
              this.props.viewRegistration), 
=========
          onClick: () =>
            //this.props.facultyID
            this.makeForm(["password"]),
        },

        {
          name: "View Advisees",
          onClick: () => this.makeForm(["userID"], this.props.viewStudentAdvisees),
        },

        {
          name: "View Holds",
          onClick: () => this.makeForm(["studentID"], this.props.viewHolds),
        },

        {
          name: "View Registration",
          onClick: () => this.makeForm(["studentID"], this.props.viewRegistration),
        },

        {
          name: "View Student Schedule",
          onClick: () => this.makeForm(["studentID"], this.props.viewStudentSchedule ),
        },

        {
          name: "Logout",
          onClick: "./Logout",
        }, // some arbitrary location atm
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

  // Generate the Form Template
  // Need to get this to take the fields of whatever the button takes
  makeForm = (fields, query) => {
    let arr = [];
    fields.map((ele) => {
      console.log(ele);
    });

    arr = fields;
    let ele = (
      <FormTemplate
        fields={arr}
        tempData={this.state.tempData}
        updateParams={this.doHandleUpdateParams}
        relevantQuery={query} // where query is a function reference
      ></FormTemplate>
    );

    ReactDOM.render(ele, document.getElementById("root"));
  };

  wrapper = (func, val) => {
    ReactDOM.render(
      <div>
        <DynamicForms fields={["crigne"]}></DynamicForms>
      </div>,
      document.getElementById("root")
    );
  };

  doHandleUpdateParams = (key, value) => {
    console.log(key);
    this.setState({ key, key: value });
    console.log("NAVBAR: Changed state of relevant key: ", key);
    console.log(
      "Temp Data ",
      key,
      " within NavBar is now set to ",
      value,
      "!",
      " Now attempting to bubble up to Query Handler..."
    );

    this.props.updateParams(key, value);
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

    let eles = arr.map((element) => {
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
