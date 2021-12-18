import React, { Component } from "react";
import queries from "./getQueries";
import Home from "./Home";
import Axios from "axios";
import Display from "../Display";

class QueryHandler extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.curQuery = "";
  }

  // Set the response.data object, and store it
  // Send it over to the tablemaker

  // Using doHandle here, handle in the properties
  // doHandle actually DOes something, handle is
  // just an event we're missing

  tableMaker = () => {};

  doHandleCourseSearch = () => {
    this.curQuery = queries.courseSearch;
    Axios.post("http://localhost:3305/Main/masterSchedule", {}).then(
      (response) => {
        this.props.obj.data = response.data;
        console.log(this.props.obj.data);
        this.props.makeTable(this.props.obj.data);
      }
    );
  };

  doHandleDropCourse = () => {
    this.curQuery = queries.dropCourse;
    Axios.post("http://localhost:3305/Student/dropCourse", {}).then(
      (response) => {
        console.log(response);
        console.log("QUERY!!!!!");
        this.props.obj.data = response.data;
      }
    );
  };

  doHandleGetDegreeAuditCoursesTakenP1 = () => {
    this.curQuery = queries.doHandleGetDegreeAuditCoursesTakenP1;
    Axios.post("http://localhost:3305/Student/degreeAudit", {}).then(
      (response) => {
        console.log(response);
        console.log("QUERY!!!!!");
        this.props.obj.data = response.data;
      }
    );
  };

  doHandleGetDegreeAuditCoursesTakenP2 = () => {
    this.curQuery = queries.doHandleGetDegreeAuditCoursesTakenP2;
    Axios.post("http://localhost:3305/Student/degreeAudit", {}).then(
      (response) => {
        console.log(response);
        console.log("QUERY!!!!!");
        this.props.obj.data = response.data;
      }
    );
  };

  doHandleGetAdvisor = () => {
    this.curQuery = queries.doHandleGetAdvisor;
  };

  doHandleGetStudentLoginInfo = () => {
    this.curQuery = queries.getStudentLoginInfo;
  };

  doHandleGetStudentHistory = () => {
    this.curQuery = queries.getStudentHistory;
    Axios.post("http://localhost:3305/Student/getStudentHistory", {}).then(
      (response) => {
        console.log(response);
        console.log("QUERY!!!!!");
        this.props.obj.data = response.data;
      }
    );
  };

  doHandleGetTranscript = () => {
    this.curQuery = queries.getTranscript;
    Axios.post("http://localhost:3305/Student/getTranscript", {}).then(
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
    Axios.post("http://localhost:3305/Student/registerForCourse", {}).then(
      (response) => {
        console.log(response);
        console.log("QUERY!!!!!");
        this.props.obj.data = response.data;
      }
    );
  };

  doHandleViewHolds = () => {
    this.curQuery = queries.viewHolds;
    Axios.post("http://localhost:3305/Student/viewHolds", {}).then(
      (response) => {
        console.log(response);
        console.log("QUERY!!!!!");
        this.props.obj.data = response.data;
      }
    );
  };

  doHandleUpdatePassword = () => {
    this.curQuery = queries.updatePassword;
    Axios.post("http://localhost:3305/Student/updatePassword", {}).then(
      (response) => {
        console.log(response);
        console.log("QUERY!!!!!");
        this.props.obj.data = response.data;
      }
    );
  };

  doHandleViewAdvisor = () => {
    this.curQuery = queries.viewAdvisor;
    Axios.post("http://localhost:3305/Student/viewAdvisor", {}).then(
      (response) => {
        console.log(response);
        console.log("QUERY!!!!!");
        this.props.obj.data = response.data;
      }
    );
  };

  doHandleViewRegistration = () => {
    this.curQuery = queries.viewRegistration;
    Axios.post("http://localhost:3305/Student/viewRegistration", {}).then(
      (response) => {
        console.log(response);
        console.log("QUERY!!!!!");
        this.props.obj.data = response.data;
      }
    );
  };

  render() {
    return (
      <div>
        <Home
          courseSearch={this.doHandleCourseSearch}
          dropCourse={this.doHandleDropCourse}
          degreeAudit={this.doHandleGetDegreeAuditCoursesTakenP1}
          registerForCourse={this.doHandleRegisterForCourse}
          studentHistory={this.doHandleGetStudentHistory}
          studentLoginInfo={this.doHandleGetStudentLoginInfo}
          unofficialTranscript={this.doHandleGetTranscript}
          updatePassword={this.doHandleUpdatePassword}
          viewAdvisor={this.doHandleViewAdvisor}
          viewHolds={this.doHandleViewHolds}
          viewRegistration={this.doHandleViewRegistration}
        ></Home>
      </div>
    );
  }
}

export default QueryHandler;