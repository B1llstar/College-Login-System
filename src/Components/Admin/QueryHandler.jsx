import React, { Component } from "react";
import queries from "./getQueries";
import Home from "./Home";
import Axios from "axios";

class QueryHandler extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.curQuery = "";
  }

  tableMaker = () => {};

  doHandleGetAdminLoginInfo = () => {
    this.curQuery = queries.adminLoginInfo;
    Axios.post("http://localhost:3305/Admin/facultyLoginInfo", {}).then(
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
    Axios.post("http://localhost:3305/Admin/coursesTeaching", {}).then(
      (response) => {
        console.log(response);
        console.log("QUERY!!!!!");
        this.props.obj.data = response.data;
        console.log(this.props.obj.data);
        this.props.makeTable(this.props.obj.data);
      }
    );
  };

  doHandleCourseSearch = () => {
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

  doHandleCreateCourse = () => {
    this.curQuery = queries.courseSearch;
    Axios.post("http://localhost:3305/Admin/createCourse", {}).then(
      (response) => {
        console.log(response);
        console.log("QUERY!!!!!");
        this.props.obj.data = response.data;
        console.log(this.props.obj.data);
        // this.props.makeTable(this.props.obj.data);
      }
    );
  };

  doHandleCreateUser = () => {
    this.curQuery = queries.createUser;
    Axios.post("http://localhost:3305/Admin/createUser", {}).then(
      (response) => {
        console.log(response);
        console.log("QUERY!!!!!");
        this.props.obj.data = response.data;
        console.log(this.props.obj.data);
        // this.props.makeTable(this.props.obj.data);
      }
    );
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

  doHandleGetDegreeAuditCoursesTakenP1 = () => {
    this.curQuery = queries.degreeAudit;
    Axios.post("http://localhost:3305/Admin/degreeAudit", {}).then(
      (response) => {
        console.log(response);
        console.log("QUERY!!!!!");
        this.props.obj.data = response.data;
        console.log(this.props.obj.data);
        this.props.makeTable(this.props.obj.data);
      }
    );
  };

  doHandleGetDegreeAuditCoursesTakenP2 = () => {
    this.curQuery = queries.degreeAudit2;
    Axios.post("http://localhost:3305/Admin/degreeAudit2", {}).then(
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
    Axios.post("http://localhost:3305/Admin/dropCourse", {}).then(
      (response) => {
        console.log(response);
        console.log("QUERY!!!!!");
        this.props.obj.data = response.data;
      }
    );
  };

  doHandleGetStudentLoginInfo = () => {
    this.curQuery = queries.getStudentLoginInfo;
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

  doHandleGetStudentHistory = () => {
    this.curQuery = queries.getStudentHistory;
    Axios.post("http://localhost:3305/Admin/getStudentHistory", {}).then(
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
    this.curQuery = queries.getTranscript;
    Axios.post("http://localhost:3305/Admin/getTranscript", {}).then(
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

  doHandleViewAdvisors = () => {
    this.curQuery = queries.viewAdvisors;
    Axios.post("http://localhost:3305/Admin/viewAdvisors", {}).then(
      (response) => {
        console.log(response);
        console.log("QUERY!!!!!");
        this.props.obj.data = response.data;
        console.log(this.props.obj.data);
        this.props.makeTable(this.props.obj.data);
      }
    );
  };

  doHandleViewAdvisees = () => {
    this.curQuery = queries.viewAdvisees;
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

  doHandleViewHolds = () => {
    this.curQuery = queries.viewHolds;
    Axios.post("http://localhost:3305/Admin/viewHolds", {}).then(
      (response) => {
        console.log(response);
        console.log("QUERY!!!!!");
        this.props.obj.data = response.data;
        console.log(this.props.obj.data);
        this.props.makeTable(this.props.obj.data);
      }
    );
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
    this.curQuery = queries.viewRegistration;
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


  render() {
    return (
      <div>
        <Home
          adminLoginInfo={this.adminLoginInfo}
          coursesTeaching={this.doHandleGetCoursesTeaching}
          courseSearch={this.doHandleCourseSearch}
          createCourse={this.doHandleCreateCourse}
          createUser={this.doHandleCreateUser}
          deleteCourse={this.doHandleDeleteCourse}
          degreeAudit={this.doHandleGetDegreeAuditCoursesTakenP1}
          degreeAudit2={this.doHandleGetDegreeAuditCoursesTakenP2}
          dropCourse={this.doHandleDropCourse}
          modifyCourse={this.doHandleModifyCourse}
          modifyUser={this.doHandleModifyUser}
          registerForCourse={this.doHandleRegisterForCourse}
          studentHistory={this.doHandleGetStudentHistory}
          studentLoginInfo={this.doHandleGetStudentLoginInfo}
          unofficialTranscript={this.doHandleGetTranscript}
          updatePassword={this.doHandleUpdatePassword}
          viewAdvisors={this.doHandleViewAdvisors}
          viewAdvisees={this.doHandleViewAdvisees}
          viewAllUsers={this.viewAllUsers}
          viewCourseHistory={this.viewCourseHistory}
          viewHolds={this.doHandleViewHolds}
          viewRegistration={this.doHandleViewRegistration}
          viewStudentSchedule={this.doHandleViewStudentSchedule}
        ></Home>
      </div>
    );
  }
}

export default QueryHandler;
