import React, { Component } from "react";
import queries from "./getQueries";
import Home from "./Home";
import Axios from "axios";
import Display from "../Display";
import NavBar from "../NavBar";
import AllForms from "../AllForms";
import ReactDOM from "react-dom";

class QueryHandler extends Component {
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

  makeSomeTables = (arr, domTarget) => {
    this.setState({ data: arr });
    let unique = [];
    let thList = [];
    let counter = 0;
    let result = arr.map((element, index) => {
      let keys = Object.keys(element);
      let tdList = [];

      // grab unique elements
      keys.map((ele) => {
        if (!unique.includes(ele)) {
          unique.push(ele);
        }
      });

      // make data consisting of each property
      // map each unique property into an object map containing elements of property unique
      unique.map((ele, index) => {
        tdList.push(<td>{element[ele]}</td>);

        if (counter < unique.length) {
          thList.push(<th id="dbHead">{unique[index]}</th>);
          counter++;
        }
      });

      return <tr id="dbRow">{tdList}</tr>;
    });

    let ele_ = (
      <table className="table">
        <thead class="thead-dark">
          <tr>{thList}</tr>
        </thead>
        <tbody>{result}</tbody>
      </table>
    );
    ReactDOM.render(
      <div className="main">{ele_}</div>,
      document.getElementById(domTarget)
    );
    console.log(unique);
  };

  displayTextMessageOnScreen = (msg) => {
    console.log("Displaying");
    let ele = <h2>{msg}</h2>;
    ReactDOM.render(
      <div className="main">{ele}</div>,
      document.getElementById("test2")
    );
  };

  generateAndDisplayTableFromObject = (res, domDestinationID) => {
    this.makeSomeTables(res, domDestinationID);
    console.log("Displaying some data at id ", domDestinationID);
  };

  doHandleCourseSearch = () => {
    let newObj = this.generateObjectWithNeededPropertiesOnly([
      "courseID"
    ]);
    Axios.post("http://localhost:3305/Student/courseSearch", { newObj }).then(
      (response) => {
        this.generateAndDisplayTableFromObject(response.data, "test2");
      }
    );
  };

  doHandleGetDegreeAudit = () => {
    let newObj = this.generateObjectWithNeededPropertiesOnly(["studentID",]);
    newObj["studenID"] = this.props.userCredentials["studentID"];
    let res = [];
    console.log(newObj);
    Axios.post("http://localhost:3305/Admin/degreeAuditPt1", { newObj }).then(
      (response) => {
        this.generateAndDisplayTableFromObject(response.data, "test2");
      }
    );

    Axios.post("http://localhost:3305/Admin/degreeAuditPt2", { newObj }).then(
      (response) => {
        console.log("RESPONSE PT 2", response);
        res = response.data;
        // Note how I use the div underneath the first table, since both will be
        // displayed at once and on the same page
        this.generateAndDisplayTableFromObject(response.data, "test3");
      }
    );
  };

  doHandleDropCourse = () => {
    this.curQuery = queries.dropCourse;
    let newObj = this.generateObjectWithNeededPropertiesOnly([
      "crn",
      "userID",
    ]);
    newObj["userID"] = this.props.userCredentials["userID"];
    console.log("Submitted request body: " + newObj);
    Axios.post("http://localhost:3305/Student/dropCourse", { newObj }).then(
      (response) => {
        console.log("Response");
        console.log(response);
      });
  };

  doHandleRegisterForCourse = () => {
    this.curQuery = queries.updatePassword;
    let newObj = this.generateObjectWithNeededPropertiesOnly([
      "crn",
      "userID",
    ]);
    newObj["userID"] = this.props.userCredentials["userID"];
    console.log("Submitted request body: " + newObj);
    Axios.post("http://localhost:3305/Student/registerForCourse", { newObj }).then(
      (response) => {
        console.log("Response");
        console.log(response);
      });
  };

  doHandleGetStudentHistory = () => {
    this.curQuery = queries.studentHistory;
    let newObj = this.generateObjectWithNeededPropertiesOnly([
      "userID",
    ]);
    newObj["userID"] = this.props.userCredentials["userID"];
    console.log("Submitted request body: " + newObj);
    Axios.post("http://localhost:3305/Student/studentHistory", { newObj }).then(
      (response) => {
        console.log("Response");
        console.log(response);
      });
  };

  doHandleGetTranscript = () => {
    this.curQuery = queries.transcript;
    let newObj = this.generateObjectWithNeededPropertiesOnly([
      "userID",
    ]);
    newObj["userID"] = this.props.userCredentials["userID"];
    console.log("Submitted request body: " + newObj);
    Axios.post("http://localhost:3305/Student/transcript", { newObj }).then(
      (response) => {
        console.log("Response");
        console.log(response);
      });
  };

  doHandleUpdatePassword = () => {
    this.curQuery = queries.updatePassword;
    let newObj = this.generateObjectWithNeededPropertiesOnly([
      "password",
      "userID",
    ]);
    newObj["userID"] = this.props.userCredentials["userID"];
    console.log("Submitted request body: " + newObj);
    Axios.post("http://localhost:3305/Student/updatePassword", { newObj }).then(
      (response) => {
        console.log("Response");
        console.log(response);
      });
  };

  doHandleViewAdvisor = () => {
    this.curQuery = queries.viewAdvisor;
    let newObj = this.generateObjectWithNeededPropertiesOnly([
      "userID",
    ]);
    newObj["userID"] = this.props.userCredentials["userID"];
    console.log("Submitted request body: " + newObj);
    Axios.post("http://localhost:3305/Student/viewAdvisor", { newObj }).then(
      (response) => {
        console.log("Response");
        console.log(response);
      });
  };

  doHandleViewHolds = () => {
    this.curQuery = queries.viewHolds;
    let newObj = this.generateObjectWithNeededPropertiesOnly([
      "userID",
    ]);
    newObj["userID"] = this.props.userCredentials["userID"];
    console.log("Submitted request body: " + newObj);
    Axios.post("http://localhost:3305/Student/viewHolds", { newObj }).then(
      (response) => {
        console.log("Response");
        console.log(response);
      });
  };

  doHandleViewRegistration = () => {
    this.curQuery = queries.viewRegistration;
    let newObj = this.generateObjectWithNeededPropertiesOnly([
      "userID",
    ]);
    newObj["userID"] = this.props.userCredentials["userID"];
    console.log("Submitted request body: " + newObj);
    Axios.post("http://localhost:3305/Student/viewRegistration", { newObj }).then(
      (response) => {
        console.log("Response");
        console.log(response);
      });
  };

  doHandleGetViewStudentLoginInfo = () => {
    this.curQuery = queries.viewStudentLoginInfo;
    let newObj = this.generateObjectWithNeededPropertiesOnly([
      "userID",
    ]);
    newObj["userID"] = this.props.userCredentials["userID"];
    console.log("Submitted request body: " + newObj);
    Axios.post("http://localhost:3305/Student/studentLoginInfo", { newObj }).then(
      (response) => {
        console.log("Response");
        console.log(response);
      });
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
    //let display = this.state.display;
    //console.log(display);
    return (
      <div>
        {this.makeForms()}
        <NavBar
          courseSearch={this.doHandleCourseSearch}
          degreeAudit={this.doHandleGetDegreeAudit}
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
          updateParams={this.updateParams}
        ></NavBar>
      </div>
    );
  }
}

export default QueryHandler;
