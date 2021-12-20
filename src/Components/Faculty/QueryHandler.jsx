import React, { Component } from "react";
import queries from "./getQueries";
import Home from "./Home";
import Axios from "axios";
import NavBar from "../NavBar";

class QueryHandler extends Component { //faculty
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
    this.state = { display: <NavBar userType={this.props.userType}></NavBar> };
    this.curQuery = "";
  }

  tableMaker = () => {};

  doHandleCourseSearch = () => {
    this.curQuery = queries.courseSearch;

    Axios.post("http://localhost:3305/Faculty/courseSearch", {
      //course search parameters - just by courseID if can't do multiquery
      //I might have to rewrite search query to accomodate, but no problem
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

  doHandleGetDegreeAuditPt1 = () => {
    this.curQuery = queries.degreeAuditPt1;
    this.getQueryParams();
    let studentID = this.state.tempData.studentID;

    Axios.post("http://localhost:3305/Faculty/degreeAuditPt1", {
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
    this.curQuery = queries.degreeAuditPt1;
    this.getQueryParams();
    let studentID = this.state.tempData.studentID;

    Axios.post("http://localhost:3305/Faculty/degreeAuditPt2", {
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

  doHandleGetFacultyCoursesTeaching = () => {
    this.curQuery = queries.facultyCoursesTeaching;
    this.getQueryParams();
    let facultyID = this.props.userCredentials.userID;

    Axios.post("http://localhost:3305/Faculty/facultyCoursesTeaching", {
      facultyID: facultyID
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

  doHandleGetFacultyLoginInfo = () => {
    this.curQuery = queries.facultyLoginInfo;
    this.getQueryParams();
    let facultyID = this.props.userCredentials.userID;
    
    Axios.post("http://localhost:3305/Faculty/facultyLoginInfo", {
      facultyID: facultyID
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

  doHandleRecordAttendance = () => {
    this.curQuery = queries.recordAttendance;
    this.getQueryParams();
    let studentID = this.state.tempData.studentID;
    let crn = this.state.tempData.crn;
    console.log("Query");

    Axios.post("http://localhost:3305/Faculty/recordAttendance", {
      studentID: studentID,
      crn: crn,
    }).then(
      (response) => {
        console.log("Response");
        console.log(response);
      }
    );
  };

  doHandleGetStudentHistory = () => {
    this.curQuery = queries.studentHistory;
    this.getQueryParams();
    let studentID = this.state.tempData.studentID;

    Axios.post("http://localhost:3305/Faculty/studentHistory", {
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

  doHandleGetTranscript = () => {
    this.curQuery = queries.transcript;
    this.getQueryParams();
    let studentID = this.state.tempData.studentID;

    Axios.post("http://localhost:3305/Faculty/transcript", {
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

  doHandleUpdatePassword = () => {
    this.curQuery = queries.updatePassword;
    this.getQueryParams();
    let facultyID = this.props.userCredentials.userID;
    let password = this.state.tempData;
    console.log("Query");

    Axios.post("http://localhost:3305/Faculty/updatePassword", {
      facultyID: facultyID,
      password: password,
    }).then(
      (response) => {
        console.log("Response");
        console.log(response);
      }
    );
  };

  doHandleViewHolds = () => {
    this.curQuery = queries.viewHolds;
    this.getQueryParams();
    let studentID = this.state.tempData.studentID;

    Axios.post("http://localhost:3305/Faculty/viewHolds", {
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

  doHandleViewRegistration = () => {
    this.curQuery = queries.viewRegistration;
    this.getQueryParams();
    let studentID = this.state.tempData.studentID;

    Axios.post("http://localhost:3305/Faculty/viewRegistration", {
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

  doHandleViewStudentAdvisees = () => {
    this.curQuery = queries.viewStudentAdvisees;
    this.getQueryParams();
    let facultyID = this.props.userCredentials.userID;

    Axios.post("http://localhost:3305/Faculty/viewStudentAdvisees", {
      facultyID: facultyID
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

  doHandleViewStudentSchedule = () => {
    this.curQuery = queries.viewStudentSchedule;
    this.getQueryParams();
    let studentID = this.state.tempData.studentID;

    Axios.post("http://localhost:3305/Faculty/viewStudentSchedule", {
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

  // Index > Query Handler > App > NavBar
  render() {
    return (
      <div>
        <NavBar
          courseSearch={this.doHandleCourseSearch}
          degreeAudit={this.doHandleGetDegreeAuditPt1}
          degreeAudit2={this.doHandleGetDegreeAuditPt2}
          facultyCoursesTeaching={this.doHandleGetFacultyCoursesTeaching}
          facultyLoginInfo={this.doHandleGetFacultyLoginInfo}
          recordAttendance={this.doHandleRecordAttendance}
          studentHistory={this.doHandleGetStudentHistory}
          transcript={this.doHandleGetTranscript}
          updatePassword={this.doHandleUpdatePassword}
          viewHolds={this.doHandleViewHolds}
          viewRegistration={this.doHandleViewRegistration}
          viewStudentAdvisees={this.doHandleViewStudentAdvisees}
          viewStudentSchedule={this.doHandleViewStudentSchedule}
          userType={"Faculty"}
        ></NavBar>
      </div>
    );
  }
}

export default QueryHandler;
