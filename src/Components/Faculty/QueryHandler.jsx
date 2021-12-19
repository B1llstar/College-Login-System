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

  doHandleGetStudentLoginInfo = () => {
    this.curQuery = queries.getStudentLoginInfo;
    Axios.post("http://localhost:3305/Faculty/getStudentLoginInfo", {}).then(
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

  doHandleViewAdvisor = () => {
    this.curQuery = queries.viewAdvisor;
    Axios.post("http://localhost:3305/Faculty/viewAdvisor", {}).then(
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


  render() {
    return (
      <div>
        <Home
          courseSearch={this.doHandleCourseSearch}
          dropCourse={this.doHandleDropCourse}
          degreeAudit={this.doHandleGetDegreeAuditCoursesTakenP1}
          degreeAudit2={this.doHandleGetDegreeAuditCoursesTakenP2}
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
