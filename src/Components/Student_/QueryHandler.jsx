import React, { Component } from "react";
import queries from "./getQueries";
import Home from "./Home";
import Axios from "axios";
import Display from "../Display";
import NavBar from "../NavBar";
import AllForms from "../AllForms";
import ReactDOM from "react-dom";

<<<<<<< HEAD
class QueryHandler extends Component {
=======
class QueryHandler extends Component { //student
>>>>>>> Chris_Dev_new
  state = {
    tempData: {
      userID: "",
      courseID: "",
      userType: "",
      firstName: "",
<<<<<<< HEAD
=======
      crn:"",
>>>>>>> Chris_Dev_new
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

  // Set the response.data object, and store it
  // Send it over to the tablemaker

  // Using doHandle here, handle in the properties
  // doHandle actually DOes something, handle is
  // just an event we're missing

  tableMaker = () => {};

  doHandleCourseSearch = () => {
    this.curQuery = queries.courseSearch;

    Axios.post("http://localhost:3305/Student/courseSearch", {
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
    let studentID = this.props.userCredentials.userID;

    Axios.post("http://localhost:3305/Student/degreeAuditPt1", {
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
    let studentID = this.props.userCredentials.userID;
    
    Axios.post("http://localhost:3305/Student/degreeAuditPt2", {
      studentID: studentID
    }).then((response) => {
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
    let studentID = this.props.userCredentials.userID;
    let crn = this.state.tempData.crn;
    console.log("Query");
    
    Axios.post("http://localhost:3305/Student/dropCourse", {
      studentID: studentID,
      crn: crn,
    }).then(
        (response) => {
          console.log("Response");
          console.log(response);
        }
    );
  };

  doHandleRegisterForCourse = () => {
    this.curQuery = queries.registerForCourse;
    this.getQueryParams();
    let studentID = this.props.userCredentials.userID;
    let crn = this.state.tempData.crn;
    console.log("Query");

    Axios.post("http://localhost:3305/Student/registerForCourse", {
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
    let studentID = this.props.userCredentials.userID;

    Axios.post("http://localhost:3305/Student/studentHistory", {
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
    let studentID = this.props.userCredentials.userID;

    Axios.post("http://localhost:3305/Student/transcript", {
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
    let studentID = this.props.userCredentials.userID;
    let password = this.state.tempData;
    console.log("Query");

    Axios.post("http://localhost:3305/Student/updatePassword", {
      studentID: studentID,
      password: password,
    }).then(
      (response) => {
        console.log("Response");
        console.log(response);
      }
    );
  };

  doHandleViewAdvisor = () => {
    this.curQuery = queries.viewAdvisor;
    this.getQueryParams();
    let studentID = this.props.userCredentials.userID;

    Axios.post("http://localhost:3305/Student/viewAdvisor", {
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

  doHandleViewHolds = () => {
    this.curQuery = queries.viewHolds;
    this.getQueryParams();
    let studentID = this.props.userCredentials.userID;

    Axios.post("http://localhost:3305/Student/viewHolds", {
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
    let studentID = this.props.userCredentials.userID;

    Axios.post("http://localhost:3305/Student/viewRegistration", {
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

  doHandleGetViewStudentLoginInfo = () => {
    this.curQuery = queries.viewStudentLoginInfo;
    this.getQueryParams();
    let studentID = this.props.userCredentials.userID;

    Axios.post("http://localhost:3305/Student/viewStudentLoginInfo", {
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
