import React, { Component } from "react";
import queries from "./getQueries";
import Home from "./Home";
import Axios from "axios";
import Display from "../Display";
import NavBar from "../NavBar";
import AllForms from "../AllForms";
import ReactDOM from "react-dom";

class QueryHandler extends Component {
  state = {
    tempData: {
      userID: "",
      courseID: "",
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
    Axios.post("http://localhost:3305/Student/courseSearch", {}).then(
      (response) => {
        console.log(response);
        console.log("QUERY!!!!!");
        this.props.obj.data = response.data;
        console.log(this.props.obj.data);
        // this.props.makeTable(this.props.obj.data);
      }
    );
  };

  doHandleGetDegreeAuditPt1 = () => {
    this.curQuery = queries.degreeAuditPt1;
    Axios.post("http://localhost:3305/Student/degreeAuditPt1", {}).then(
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
    Axios.post("http://localhost:3305/Student/degreeAuditPt2", {}).then();
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

  doHandleGetStudentHistory = () => {
    this.curQuery = queries.studentHistory;
    Axios.post("http://localhost:3305/Student/studentHistory", {}).then(
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
    Axios.post("http://localhost:3305/Student/transcript", {}).then(
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
        console.log(this.props.obj.data);
        this.props.makeTable(this.props.obj.data);
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
        console.log(this.props.obj.data);
        this.props.makeTable(this.props.obj.data);
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
        console.log(this.props.obj.data);
        this.props.makeTable(this.props.obj.data);
      }
    );
  };

  doHandleGetViewStudentLoginInfo = () => {
    this.curQuery = queries.viewStudentLoginInfo;
    Axios.post("http://localhost:3305/Student/viewStudentLoginInfo", {}).then(
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
    this.setState({ tempData: newObj });
    console.log(this.state.tempData);
    console.log("Updated properties");
  };

  makeForms = () => {
    let ele = <AllForms passQueryParams={this.getQueryParams}></AllForms>;
    ReactDOM.render(ele, document.getElementById("root"));
    this.setState();
    console.log();
    console.log("Generating forms");
  };

  render() {
    let display = this.state.display;
    console.log(display);
    return (
      <div>
        {this.makeForms()}
        <NavBar
          courseSearch={this.doHandleCourseSearch}
          degreeAuditPt1={this.doHandleGetDegreeAuditPt1}
          degreeAuditPt2={this.doHandleGetDegreeAuditPt2}
          dropCourse={this.doHandleDropCourse}
          registerForCourse={this.doHandleRegisterForCourse}
          studentHistory={this.doHandleGetStudentHistory}
          transcript={this.doHandleGetTranscript}
          updatePassword={this.doHandleUpdatePassword}
          viewAdvisor={this.doHandleViewAdvisor}
          viewHolds={this.doHandleViewHolds}
          viewRegistration={this.doHandleViewRegistration}
          studentLoginInfo={this.doHandleGetViewStudentLoginInfo}
          userType={"Student"}
        ></NavBar>
      </div>
    );
  }
}

export default QueryHandler;
