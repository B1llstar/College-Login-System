import React, { Component } from "react";
import queries from "./getQueries";
import Home from "./Home";
import Axios from "axios";
import NavBar from "../NavBar";

class QueryHandler extends Component {
  constructor(props) {
    super(props);
    this.state = { display: <NavBar userType={this.props.userType}></NavBar> };
    this.curQuery = "";
  }

  tableMaker = () => {};

  doHandleGetCoursesTeaching = () => {
    this.curQuery = queries.coursesTeaching;
    Axios.post("http://localhost:3305/Faculty/coursesTeaching", {}).then(
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
    Axios.post("http://localhost:3305/Faculty/courseSearch", {}).then(
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
    Axios.post("http://localhost:3305/Faculty/dropCourse", {}).then(
      (response) => {
        console.log(response);
        console.log("QUERY!!!!!");
        this.props.obj.data = response.data;
      }
    );
  };

  doHandleGetDegreeAuditCoursesTakenP1 = () => {
    this.curQuery = queries.degreeAudit;
    Axios.post("http://localhost:3305/Faculty/degreeAudit", {}).then(
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
    Axios.post("http://localhost:3305/Faculty/degreeAudit2", {}).then(
      (response) => {
        console.log(response);
        console.log("QUERY!!!!!");
        this.props.obj.data = response.data;
        console.log(this.props.obj.data);
        this.props.makeTable(this.props.obj.data);
      }
    );
  };

  doHandleGetFacultyLoginInfo = () => {
    this.curQuery = queries.getStudentLoginInfo;
    Axios.post("http://localhost:3305/Faculty/facultyLoginInfo", {}).then(
      (response) => {
        console.log(response);
        console.log("QUERY!!!!!");
        this.props.obj.data = response.data;
        console.log(this.props.obj.data);
        this.props.makeTable(this.props.obj.data);
      }
    );
  };

  doHandleRecordAttendance = () => {
    this.curQuery = queries.registerForCourse;
    Axios.post("http://localhost:3305/Faculty/registerForCourse", {}).then(
      (response) => {
        console.log(response);
        console.log("QUERY!!!!!");
        this.props.obj.data = response.data;
      }
    );
  };

  doHandleRegisterForCourse = () => {
    this.curQuery = queries.registerForCourse;
    Axios.post("http://localhost:3305/Faculty/registerForCourse", {}).then(
      (response) => {
        console.log(response);
        console.log("QUERY!!!!!");
        this.props.obj.data = response.data;
      }
    );
  };

  doHandleGetStudentHistory = () => {
    this.curQuery = queries.getStudentHistory;
    Axios.post("http://localhost:3305/Faculty/getStudentHistory", {}).then(
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
    Axios.post("http://localhost:3305/Faculty/getTranscript", {}).then(
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
    Axios.post("http://localhost:3305/Faculty/updatePassword", {}).then(
      (response) => {
        console.log(response);
        console.log("QUERY!!!!!");
        this.props.obj.data = response.data;
      }
    );
  };

  doHandleViewAdvisees = () => {
    this.curQuery = queries.viewAdvisees;
    Axios.post("http://localhost:3305/Faculty/viewAdvisees", {}).then(
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
    Axios.post("http://localhost:3305/Faculty/viewHolds", {}).then(
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
    Axios.post("http://localhost:3305/Faculty/viewRegistration", {}).then(
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
    Axios.post("http://localhost:3305/Faculty/viewStudentSchedule", {}).then(
      (response) => {
        console.log(response);
        console.log("QUERY!!!!!");
        this.props.obj.data = response.data;
        console.log(this.props.obj.data);
        this.props.makeTable(this.props.obj.data);
      }
    );
  };

  // Index > Query Handler > App > NavBar
  render() {
    return (
      <div>
        <NavBar
          userType={this.props.userType}
          coursesTeaching={this.doHandleGetCoursesTeaching}
          courseSearch={this.doHandleCourseSearch}
          dropCourse={this.doHandleDropCourse}
          degreeAudit={this.doHandleGetDegreeAuditCoursesTakenP1}
          degreeAudit2={this.doHandleGetDegreeAuditCoursesTakenP2}
          facultyLoginInfo={this.doHandleGetFacultyLoginInfo}
          recordAttendance={this.doHandleRecordAttendance}
          registerForCourse={this.doHandleRegisterForCourse}
          studentHistory={this.doHandleGetStudentHistory}
          unofficialTranscript={this.doHandleGetTranscript}
          updatePassword={this.doHandleUpdatePassword}
          viewAdvisees={this.doHandleViewAdvisees}
          viewHolds={this.doHandleViewHolds}
          viewRegistration={this.doHandleViewRegistration}
          viewStudentSchedule={this.doHandleViewStudentSchedule}
        ></NavBar>
      </div>
    );
  }
}

export default QueryHandler;
