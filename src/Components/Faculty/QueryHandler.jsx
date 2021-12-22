import React, { Component } from "react";
import queries from "./getQueries";
import Home from "./Home";
import Axios from "axios";
import NavBar from "../NavBar";
import AllForms from "../AllForms";
import ReactDOM from "react-dom";

class QueryHandler extends Component { //faculty
  constructor(props) {
    super(props);
    this.state = {
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
        password: ""
      },
    };
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
    let newObj = this.generateObjectWithNeededPropertiesOnly([
      "userID",
    ]);
    newObj["userID"] = this.props.userCredentials["userID"];
    console.log("Submitted request body: " + newObj);
    Axios.post("http://localhost:3305/Faculty/facultyCoursesTeaching", { newObj }).then(
      (response) => {
        console.log("Response");
        console.log(response);
      });
  };

  doHandleGetFacultyLoginInfo = () => {
    this.curQuery = queries.facultyLoginInfo;
    let newObj = this.generateObjectWithNeededPropertiesOnly([
      "userID",
    ]);
    newObj["userID"] = this.props.userCredentials["userID"];
    console.log("Submitted request body: " + newObj);
    Axios.post("http://localhost:3305/Faculty/facultyLoginInfo", { newObj }).then(
      (response) => {
        console.log("Response");
        console.log(response);
      });
  };

  doHandleRecordAttendance = () => {
    this.curQuery = queries.recordAttendance;
    let newObj = this.generateObjectWithNeededPropertiesOnly([
      "studentID",
      "crn",
      "isPresent",
      "date",
    ]);
    console.log("Submitted request body: " + newObj);
    Axios.post("http://localhost:3305/Faculty/recordAttendance", { newObj }).then(
      (response) => {
        console.log("Response");
        console.log(response);
      });
  };

  doHandleGetStudentHistory = () => {
    let newObj = this.generateObjectWithNeededPropertiesOnly(["studentID"]);
    Axios.post("http://localhost:3305/Faculty/studentHistory", { newObj }).then(
      (response) => {
        console.log(response);
      }
    );
  };

  doHandleGetTranscript = () => {
    let newObj = this.generateObjectWithNeededPropertiesOnly(["studentID"]);
    Axios.post("http://localhost:3305/Faculty/transcript", { newObj }).then(
      (response) => {
        console.log(response);
      }
    );
  };

  doHandleUpdatePassword = () => {
    this.curQuery = queries.updatePassword;
    let newObj = this.generateObjectWithNeededPropertiesOnly([
      "password",
      "userID",
    ]);
    newObj["userID"] = this.props.userCredentials["userID"];
    console.log("Submitted request body: " + newObj);
    Axios.post("http://localhost:3305/Faculty/updatePassword", { newObj }).then(
      (response) => {
        console.log("Response");
        console.log(response);
      });
  };

  doHandleViewHolds = () => {
    let newObj = this.generateObjectWithNeededPropertiesOnly(["studentID"]);
    Axios.post("http://localhost:3305/Faculty/viewHolds", { newObj }).then(
      (response) => {
        console.log(response);
      }
    );
  };

  doHandleViewRegistration = () => {
    let newObj = this.generateObjectWithNeededPropertiesOnly(["studentID"]);
    Axios.post("http://localhost:3305/Faculty/viewRegistration", { newObj }).then(
      (response) => {
        console.log(response);
      }
    );
  };

  doHandleViewStudentAdvisees = () => {
    let newObj = this.generateObjectWithNeededPropertiesOnly(["userID"]);
    Axios.post("http://localhost:3305/Faculty/viewStudentAdvisees", { newObj }).then(
      (response) => {
        console.log(response);
      }
    );
  };

  doHandleViewStudentSchedule = () => {
    let newObj = this.generateObjectWithNeededPropertiesOnly(["studentID"]);
    Axios.post("http://localhost:3305/Faculty/viewStudentSchedule", { newObj }).then(
      (response) => {
        console.log(response);
      }
    );
  };

  generateObjectWithNeededPropertiesOnly = (neededPropsArr) => {
    let newObj = {};
    let reqBody = this.state.reqBodyObj;
    let neededProps = neededPropsArr;
    neededProps.map((ele) => {
      if (ele in reqBody) {
        //   if (ele == "numCredits") {
        //   console.log("Found an integer");
        // newObj[ele] = parseInt(reqBody[ele]);

        // using in instead of includes, it's better apparently
        newObj[ele] = reqBody[ele];
      } else {
        newObj[ele] = "";
      }
    });

    return newObj;
  };

  doHandleTestLogin = () => {
    let newObj = this.generateObjectWithNeededPropertiesOnly(["userID"]);

    Axios.post("http://localhost:3305/Admin/testLogin", { newObj }).then(
      (response) => {
        console.log(response);
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

  updateParams = (key, value) => {
    console.log(key);

    let tempData = this.state.tempData;
    tempData[key] = value;
    this.setState({ tempData });
    // Had to create another object and then overwrite it
    // Interesting... lol
    console.log("QUERY HANDLER: changed state of relevant key: ", key);
    console.log("Temp Data: ", this.state.tempData);

    let eles = [];
    let reqBodyObj = this.state.reqBodyObj;
    reqBodyObj[key] = value;
    this.setState({ reqBodyObj });

    let needed = [];
    let values = [];

    console.log("Needed", needed);
  };

  makeForms = () => {
    // let ele = <AllForms passQueryParams={this.getQueryParams()}></AllForms>;
    // ReactDOM.render(ele, document.getElementById("root"));

    return <AllForms passQueryParams={this.getQueryParams}></AllForms>;
  };

  render() {
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
          updateParams={this.updateParams}
        ></NavBar>
      </div>
    );
  }
}

export default QueryHandler;
