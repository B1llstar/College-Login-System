import React, { Component } from "react";
import queries from "./getQueries";
import Home from "./Home";
import Axios from "axios";
import NavBar from "../NavBar";
import AllForms from "../AllForms";
import ReactDOM from "react-dom";
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
    this.curQuery = "";
  }

  tableMaker = () => {};

  doHandleGetAdminLoginInfo = () => {
    this.curQuery = queries.adminLoginInfo;
    Axios.post("http://localhost:3305/Admin/adminLoginInfo", {}).then(
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

    Axios.post("http://localhost:3305/Admin/coursesTeaching", {
      userID: {},
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
    this.getQueryParams();

    let eles = this.checkForNeededProps(
      { crn: "", courseID: "", courseName: "", Instructor: "" },
      this.state.tempData
    );

    console.log(eles);

    Axios.post("http://localhost:3305/Admin/courseSearch", { eles }).then(
      (response) => {
        console.log(response);
        console.log("QUERY!!!!!");
        this.props.obj.data = response.data;
        console.log(this.props.obj.data);
        // this.props.makeTable(this.props.obj.data);
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

    Axios.post("http://localhost:3305/Admin/createUser", {
      /*
      userID = this.props.tempData.userID,
      userType = this.props.tempData.userType,
      firstName = this.props.tempData.firstName,
      lastName = this.props.tempData.lastName,
      phoneNum = this.props.tempData.phoneNum,
      DOB = this.props.tempData.DOB,
      street = this.props.tempData.street,
      city = this.props.tempData.city,
      state = this.props.tempData.state,
      zip = this.props.tempData.state
      */
    }).then((response) => {
      console.log(response);
      console.log("QUERY!!!!!");
      this.props.obj.data = response.data;
      console.log(this.props.obj.data);
      // this.props.makeTable(this.props.obj.data);
    });
  };

  doHandleDeleteCourse = () => {
    this.curQuery = queries.courseSearch;
    Axios.post("http://localhost:3305/Admin/courseSearch", {}).then(
      (response) => {
        console.log(response);
        console.log("QUERY!!!!!");
        this.props.obj.data = response.data;
        console.log(this.props.obj.data);
        // this.props.makeTable(this.props.obj.data);
      }
    );
  };

  doHandleGetDegreeAuditPt2 = () => {
    this.curQuery = queries.degreeAuditPt2;
    Axios.post("http://localhost:3305/Admin/degreeAuditPt2", {}).then(
      (response) => {
        console.log(response);
        console.log("QUERY!!!!!");
        this.props.obj.data = response.data;
        console.log(this.props.obj.data);
        this.props.makeTable(this.props.obj.data);
      }
    );
  };

  doHandleDeleteCourse = () => {
    this.curQuery = queries.deleteCourse;
    Axios.post("http://localhost:3305/Admin/deleteCourse", {}).then(
      (response) => {
        console.log(response);
        console.log("QUERY!!!!!");
        this.props.obj.data = response.data;
        console.log(this.props.obj.data);
        // this.props.makeTable(this.props.obj.data);
      }
    );
  };

  doHandleDropCourse = () => {
    this.curQuery = queries.dropCourse;
    Axios.post("http://localhost:3305/Admin/dropCourse", {}).then(
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
    Axios.post("http://localhost:3305/Admin/modifyCourse", {}).then(
      (response) => {
        console.log(response);
        console.log("QUERY!!!!!");
        this.props.obj.data = response.data;
        console.log(this.props.obj.data);
        this.props.makeTable(this.props.obj.data);
      }
    );
  };

  doHandleModifyUser = () => {
    this.curQuery = queries.modifyUser;
    Axios.post("http://localhost:3305/Admin/modifyUser", {}).then(
      (response) => {
        console.log(response);
        console.log("QUERY!!!!!");
        this.props.obj.data = response.data;
        console.log(this.props.obj.data);
        this.props.makeTable(this.props.obj.data);
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
    return (
      <div>
        {this.makeForms()}
        <NavBar
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
