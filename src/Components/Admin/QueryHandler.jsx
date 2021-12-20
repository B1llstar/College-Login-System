import React, { Component } from "react";
import queries from "./getQueries";
import Home from "./Home";
import Axios from "axios";
import NavBar from "../NavBar";
import AllForms from "../AllForms";
import ReactDOM from "react-dom";
<<<<<<< HEAD
class QueryHandler extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    };
=======
class QueryHandler extends Component { //admin
  state = {
    tempData: {
      userID: "",
      courseID: "",
      userType: "",
      firstName: "",
      crn:"",
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
  };
  constructor(props) {
    super(props);
>>>>>>> Chris_Dev_new
    this.state = { display: <NavBar userType={this.props.userType}></NavBar> };
    this.curQuery = "";
  }

  tableMaker = () => {};

  doHandleGetAdminLoginInfo = () => {
    this.curQuery = queries.adminLoginInfo;
    this.getQueryParams();
    let adminID = this.props.userCredentials.userID;

    Axios.post("http://localhost:3305/Admin/adminLoginInfo", {
      adminID: adminID
    }).then(
      (response) => {
        console.log(response);
        console.log("QUERY!!!!!");
        this.props.obj.data = response.data;
        console.log(this.props.obj.data);
        this.props.makeTable(this.props.obj.data);
      }
    );
  };
  doHandleGetCoursesTeaching = () => {
    this.curQuery = queries.coursesTeaching;
    let facultyID = this.state.tempData.facultyID;

    Axios.post("http://localhost:3305/Admin/coursesTeaching", {
      facultyID: facultyID,
    }).then((response) => {
      console.log(response);
      console.log("QUERY!!!!!");
      this.props.obj.data = response.data;
      console.log(this.props.obj.data);
      this.props.makeTable(this.props.obj.data);
    });
  };

  checkForNeededProps(first_, toBePassed) {
    let first = first_;
    let passed = toBePassed;
    let vals = Object.values("first");
    let eles = {};

    for (const prop in first) {
      console.log(prop);
      if (prop in passed) {
        eles[prop] = toBePassed[prop];
      }
    }

    return eles;
  }

  doHandleCourseSearch = () => {
    this.curQuery = queries.courseSearch;
<<<<<<< HEAD
    this.getQueryParams();

    let eles = this.checkForNeededProps(
      { crn: "", courseID: "", courseName: "", Instructor: "" },
      this.state.tempData
    );

    console.log(eles);

    Axios.post("http://localhost:3305/Admin/courseSearch", { eles }).then(
=======

    Axios.post("http://localhost:3305/Admin/courseSearch", {
      //course search parameters - just by courseID if can't do multiquery
      //I might have to rewrite search query to accomodate, but no problem
    }).then(
>>>>>>> Chris_Dev_new
      (response) => {
        console.log(response);
        console.log("QUERY!!!!!");
        this.props.obj.data = response.data;
        console.log(this.props.obj.data);
        this.props.makeTable(this.props.obj.data);
      }
    );
  };

  doHandleCreateCourse = () => {
    this.curQuery = queries.createCourse;
    this.getQueryParams();
    let { courseID, courseName, numCredits, deptID } = this.state.tempData;
    console.log("Query");

    Axios.post("http://localhost:3305/Admin/createCourse", {
      courseID: courseID,
      courseName: courseName,
      numCredits: numCredits,
      deptID: deptID,
    }).then((response) => {
      console.log("Response");
      console.log(response);

      // this.props.makeTable(this.props.obj.data);
    });
  };

  doHandleCreateUser = () => {
    this.curQuery = queries.createUser;
    this.getQueryParams();
    let { userID, userType, firstName, lastName, phoneNum, DOB, street,
          city, state, zip } = this.state.tempData;

    Axios.post("http://localhost:3305/Admin/createUser", {
      userID: userID,
      userType: userType,
      firstName: firstName,
      lastName: lastName,
      phoneNum: phoneNum,
      DOB: DOB,
      street: street,
      city: city,
      state: state,
      zip: zip
    }).then((response) => {
      console.log(response);
      console.log("QUERY!!!!!");
      this.props.obj.data = response.data;
      console.log(this.props.obj.data);
    });
  };

  doHandleDeleteCourse = () => {
    this.curQuery = queries.courseSearch;
    this.getQueryParams();
    let { courseID } = this.state.tempData;

    Axios.post("http://localhost:3305/Admin/deleteCourse", {
      courseID: courseID
    }).then(
      (response) => {
        console.log(response);
        console.log("QUERY!!!!!");
        this.props.obj.data = response.data;
        console.log(this.props.obj.data);
      }
    );
  };

  doHandleGetDegreeAuditPt1 = () => {
    this.curQuery = queries.degreeAuditPt1;
    this.getQueryParams();
    let { studentID } = this.state.tempData;

    Axios.post("http://localhost:3305/Admin/degreeAuditPt1", {
        studentID: studentID
    }).then(
      (response) => {
        console.log(response);
        console.log("QUERY!!!!!");
        this.props.obj.data = response.data;
        console.log(this.props.obj.data);
        this.props.makeTable(this.props.obj.data);
      }
    );
  };

  doHandleGetDegreeAuditPt2 = () => {
    this.curQuery = queries.degreeAuditPt2;
    this.getQueryParams();
    let { studentID } = this.state.tempData;

    Axios.post("http://localhost:3305/Admin/degreeAuditPt2", {
        studentID: studentID
    }).then(
      (response) => {
        console.log(response);
        console.log("QUERY!!!!!");
        this.props.obj.data = response.data;
        console.log(this.props.obj.data);
        this.props.makeTable(this.props.obj.data);
      }
    );
  };

  doHandleDropCourse = () => {
    this.curQuery = queries.dropCourse;
    this.getQueryParams();
    let { studentID, crn } = this.state.tempData;

    Axios.post("http://localhost:3305/Admin/dropCourse", {
      studentID: studentID,
      crn: crn
    }).then(
      (response) => {
        console.log(response);
        console.log("QUERY!!!!!");
        this.props.obj.data = response.data;
      }
    );
  };

  doHandleGetFacultyCourseList = () => {
    this.curQuery = queries.coursesTeaching;
    Axios.post("http://localhost:3305/Admin/facultyCourseList", {}).then(
      (response) => {
        console.log(response);
        console.log("QUERY!!!!!");
        this.props.obj.data = response.data;
        console.log(this.props.obj.data);
        this.props.makeTable(this.props.obj.data);
      }
    );
  };

  doHandleModifyCourse = () => {
    this.curQuery = queries.modifyCourse;
    this.getQueryParams();
    let { courseID, courseName, numCredits, deptID } = this.state.tempData;

    Axios.post("http://localhost:3305/Admin/modifyCourse", {
      courseID: courseID,
      courseName: courseName,
      numCredits: numCredits,
      deptID: deptID
    }).then(
      (response) => {
        console.log(response);
        console.log("QUERY!!!!!");
        this.props.obj.data = response.data;
        console.log(this.props.obj.data);
      }
    );
  };

  doHandleModifyUser = () => {
    this.curQuery = queries.modifyUser;
    this.getQueryParams();
    let { userID, userType, firstName, lastName, phoneNum, DOB, street,
      city, state, zip } = this.state.tempData;

    Axios.post("http://localhost:3305/Admin/modifyUser", {
      userID: userID,
      userType: userType,
      firstName: firstName,
      lastName: lastName,
      phoneNum: phoneNum,
      DOB: DOB,
      street: street,
      city: city,
      state: state,
      zip: zip
    }).then(
      (response) => {
        console.log(response);
        console.log("QUERY!!!!!");
        this.props.obj.data = response.data;
        console.log(this.props.obj.data);
      }
    );
  };

  doHandleRegisterForCourse = () => {
    this.curQuery = queries.registerForCourse;
    Axios.post("http://localhost:3305/Admin/registerForCourse", {}).then(
      (response) => {
        console.log(response);
        console.log("QUERY!!!!!");
        this.props.obj.data = response.data;
      }
    );
  };

  doHandleGetStudentHistory = () => {
    this.curQuery = queries.studentHistory;
    Axios.post("http://localhost:3305/Admin/studentHistory", {}).then(
      (response) => {
        console.log(response);
        console.log("QUERY!!!!!");
        this.props.obj.data = response.data;
        console.log(this.props.obj.data);
        this.props.makeTable(this.props.obj.data);
      }
    );
  };

  doHandleGetStudentLoginInfo = () => {
    this.curQuery = queries.studentLoginInfo;
    Axios.post("http://localhost:3305/Admin/studentLoginInfo", {}).then(
      (response) => {
        console.log(response);
        console.log("QUERY!!!!!");
        this.props.obj.data = response.data;
        console.log(this.props.obj.data);
        this.props.makeTable(this.props.obj.data);
      }
    );
  };

  doHandleGetTranscript = () => {
    this.curQuery = queries.transcript;
    Axios.post("http://localhost:3305/Admin/transcript", {}).then(
      (response) => {
        console.log(response);
        console.log("QUERY!!!!!");
        this.props.obj.data = response.data;
        console.log(this.props.obj.data);
        this.props.makeTable(this.props.obj.data);
      }
    );
  };

  doHandleUpdatePassword = () => {
    this.curQuery = queries.updatePassword;
    Axios.post("http://localhost:3305/Admin/updatePassword", {}).then(
      (response) => {
        console.log(response);
        console.log("QUERY!!!!!");
        this.props.obj.data = response.data;
      }
    );
  };
  doHandleViewStudentAdvisees = () => {
    this.curQuery = queries.viewStudentSchedule;
    Axios.post("http://localhost:3305/Admin/viewAdvisees", {}).then(
      (response) => {
        console.log(response);
        console.log("QUERY!!!!!");
        this.props.obj.data = response.data;
        console.log(this.props.obj.data);
        this.props.makeTable(this.props.obj.data);
      }
    );
  };

  doHandleViewAllUsers = () => {
    this.curQuery = queries.viewAllUsers;
    Axios.post("http://localhost:3305/Admin/viewAllUsers", {}).then(
      (response) => {
        console.log(response);
        console.log("QUERY!!!!!");
        this.props.obj.data = response.data;
        console.log(this.props.obj.data);
        this.props.makeTable(this.props.obj.data);
      }
    );
  };

  doHandleViewCourseHistory = () => {
    this.curQuery = queries.viewCourseHistory;
    Axios.post("http://localhost:3305/Admin/viewCourseHistory", {}).then(
      (response) => {
        console.log(response);
        console.log("QUERY!!!!!");
        this.props.obj.data = response.data;
        console.log(this.props.obj.data);
        this.props.makeTable(this.props.obj.data);
      }
    );
  };

  doHandleViewFacultyAdvisors = () => {
    this.curQuery = queries.viewFacultyAdvisors;
    Axios.post("http://localhost:3305/Admin/viewFacultyAdvisors", {}).then(
      (response) => {
        console.log(response);
        console.log("QUERY!!!!!");
        this.props.obj.data = response.data;
        console.log(this.props.obj.data);
        this.props.makeTable(this.props.obj.data);
      }
    );
  };

  doHandleViewStudentAdvisees = () => {
    this.curQuery = queries.viewStudentAdvisees;
    Axios.post("http://localhost:3305/Admin/viewStudentAdvisees", {}).then(
      (response) => {
        console.log(response);
        console.log("QUERY!!!!!");
        this.props.obj.data = response.data;
        console.log(this.props.obj.data);
        this.props.makeTable(this.props.obj.data);
      }
    );
  };

  doHandleViewHolds = () => {
    this.curQuery = queries.viewHolds;
    Axios.post("http://localhost:3305/Admin/viewHolds", {}).then((response) => {
      console.log(response);
      console.log("QUERY!!!!!");
      this.props.obj.data = response.data;
      console.log(this.props.obj.data);
      this.props.makeTable(this.props.obj.data);
    });
  };

  doHandleViewRegistration = () => {
    this.curQuery = queries.viewRegistration;
    Axios.post("http://localhost:3305/Admin/viewRegistration", {}).then(
      (response) => {
        console.log(response);
        console.log("QUERY!!!!!");
        this.props.obj.data = response.data;
        console.log(this.props.obj.data);
        this.props.makeTable(this.props.obj.data);
      }
    );
  };

  doHandleViewStudentSchedule = () => {
    this.curQuery = queries.viewStudentSchedule;
    Axios.post("http://localhost:3305/Admin/viewStudentSchedule", {}).then(
      (response) => {
        console.log(response);
        console.log("QUERY!!!!!");
        this.props.obj.data = response.data;
        console.log(this.props.obj.data);
        this.props.makeTable(this.props.obj.data);
      }
    );
  };

  getQueryParams = (paramObj) => {
    let newObj = paramObj;
    console.log("Trying to update query: " + paramObj);
    this.setState({ tempData: newObj });
    console.log(this.state.tempData);
    console.log("Updated properties");
  };

  makeForms = () => {
    // let ele = <AllForms passQueryParams={this.getQueryParams()}></AllForms>;
    // ReactDOM.render(ele, document.getElementById("root"));

    return <AllForms passQueryParams={this.getQueryParams}></AllForms>;
  };

  render() {
<<<<<<< HEAD
    let formData = {
      userID: "",
      courseID: "",
      crn: "",
      courseName: "",
      numCredits: "",
      deptID: "",
      userType: "",
      firstName: "",
      Instructor: "",
      lastName: "",
      phoneNum: "",
      DOB: "",
      street: "",
      studentID: "",
      email: "",
      city: "",
      state: "",
      zip: "",
    };

    return (
      <div>
        {/*this.makeForms()*/}
=======
    console.log(this.props.tempData);

    return (
      <div>
        {this.makeForms()}
>>>>>>> Chris_Dev_new
        <NavBar
          formData={this.state.tempData}
          adminLoginInfo={this.doHandleGetAdminLoginInfo}
          facultyCourseList={this.doHandleGetFacultyCourseList}
          courseSearch={this.doHandleCourseSearch}
          createCourse={this.doHandleCreateCourse}
          createUser={this.doHandleCreateUser}
          deleteCourse={this.doHandleDeleteCourse}
          // degreeAuditPt1={this.doHandleGetDegreeAuditPt1}
          degreeAuditPt2={this.doHandleGetDegreeAuditPt2}
          dropStudentCourse={this.doHandleDropCourse}
          modifyCourse={this.doHandleModifyCourse}
          modifyUser={this.doHandleModifyUser}
          registerStudentForCourse={this.doHandleRegisterForCourse}
          studentHistory={this.doHandleGetStudentHistory}
          studentLoginInfo={this.doHandleGetStudentLoginInfo}
          viewStudentTranscript={this.doHandleGetTranscript}
          updatePassword={this.doHandleUpdatePassword}
          viewAllUsers={this.doHandleViewAllUsers}
          viewCourseHistory={this.doHandleViewCourseHistory}
          viewFacultyAdvisors={this.doHandleViewFacultyAdvisors}
          //viewFacultyAdvisors={this.doHandleViewAdvisors}
          viewStudentHolds={this.doHandleViewHolds}
          viewRegistration={this.doHandleViewRegistration}
          viewStudentAdvisees={this.doHandleViewStudentAdvisees}
          viewStudentSchedule={this.doHandleViewStudentSchedule}
          userType={"Admin"}
        ></NavBar>
      </div>
    );
  }
}

export default QueryHandler;
