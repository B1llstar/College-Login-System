import React, { Component } from "react";
import queries from "./getQueries";

import Home from "./Home";
import Axios from "axios";
import NavBar from "../NavBar";
import AllForms from "../AllForms";
import ReactDOM from "react-dom";
import "../../styles/bodyStyles.css";

// I will be commenting out the un-needed query handlers
// Maybe there are some missing from the list, in routes? Or vice versa?

class QueryHandler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      res: [],
      msg: "",
      reqBodyObj: {},
      data: [],
      password: "",
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
    let temp = this.makeSomeTables.bind(this);
    this.makeSomeTables = temp;
    temp = this.displayTextMessageOnScreen.bind(this);
    this.displayTextMessageOnScreen = temp;
    temp = this.displayNewMsgOnScreen.bind(this);
    this.displayNewMsgOnScreen = temp;
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

  generateAndDisplayTableFromObject = (res, domDestinationID) => {
    this.makeSomeTables(res, domDestinationID);
    console.log("Displaying some data at id ", domDestinationID);
  };

  // I put the above function after makeSomeTables because makeSomeTables
  // must be defined for this to compile, even though this is not alphabetical

  doHandleGetTranscript = () => {
    let newObj = this.generateObjectWithNeededPropertiesOnly(["studentID"]);
    Axios.post("http://localhost:3305/Admin/transcript", { newObj }).then(
      (response) => {
        // this.makeSomeTables(response.data, "test2");
        this.generateAndDisplayTableFromObject(response.data, "test2");
      }
    );
  };

  /*
  doHandleGetCoursesTeaching = () => {
    Axios.post("http://localhost:3305/Admin/coursesTeaching", {}).then(
      (response) => {}
    );
  };
*/

  /*
  checkForNeededProps(first_, toBePassed) {
    let first = first_;
    let passed = toBePassed;
    let eles = {};

    for (const prop in first) {
      console.log(prop);
      if (prop in passed) {
        eles[prop] = toBePassed[prop];
      }
    }

    return eles;
  }
*/
  doHandleCourseSearch = () => {
    let newObj = this.generateObjectWithNeededPropertiesOnly(["courseID"]);
    Axios.post("http://localhost:3305/Admin/courseSearch", { newObj }).then(
      (response) => {
        this.generateAndDisplayTableFromObject(response.data, "test2");
      }
    );
  };

  doHandleCreateCourse = () => {
    let newObj = this.generateObjectWithNeededPropertiesOnly(["courseID"]);
    Axios.post("http://localhost:3305/Admin/courseSearch", { newObj }).then(
      (response) => {
        this.generateAndDisplayTableFromObject(response.data, "test2");
      }
    );
  };

  displayTextMessageOnScreen = (msg) => {
    console.log("Displaying");
    let ele = <h2>{msg}</h2>;
    ReactDOM.render(
      <div className="d-flex justify-content-center">{ele}</div>,
      document.getElementById("test1")
    );
  };

  displayNewMsgOnScreen = (msg) => {
    console.log("Displaying");
    let ele = <h2>{msg}</h2>;
    ReactDOM.render(
      <div className="main" style={{ float: "left" }}>
        {ele}
      </div>,
      document.getElementById("test1")
    );
  };

  doHandleCreateUser = () => {
    let newObj = this.generateObjectWithNeededPropertiesOnly([
      "userID",
      "userType",
      "firstName",
      "lastName",
      "phoneNumber",
      "DOB",
      "street",
      "city",
      "state",
      "zip",
    ]);
    Axios.post("http://localhost:3305/Admin/createUser", { newObj }).then(
      (response) => {
        this.generateAndDisplayTableFromObject(response.data, "test3");
      }
    );
  };

  doHandleDeleteCourse = () => {
    let newObj = this.generateObjectWithNeededPropertiesOnly(["courseID"]);
    Axios.post("http://localhost:3305/Admin/deleteCourse", { newObj })
      .then((response) => {
        console.log(response.status);
        // If response exists - A.K.A. in JS, if it is 'truthy'.
        if (response.status == 200) {
          // this.generateAndDisplayTableFromObject(response.data, "test3");
          this.displayTextMessageOnScreen(
            "Successfully deleted courseID: " + newObj["courseID"]
          );
        }
      })
      .catch(
        function (error) {
          this.displayTextMessageOnScreen("Bad request. Check userID field!");
          if (error) {
            if (error.response.status == 400)
              console.log("Bad request. Incorrect userID maybe?");
          }
        }.bind(this)
      );
  };

  doHandleGetDegreeAudit = () => {
    let newObj = this.generateObjectWithNeededPropertiesOnly(["studentID"]);
    let res = [];
    Axios.post("http://localhost:3305/Admin/degreeAuditPt1", { newObj }).then(
      (response) => {
        this.generateAndDisplayTableFromObject(response.data, "test3");
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
    let newObj = this.generateObjectWithNeededPropertiesOnly([
      "studentID",
      "crn",
    ]);

    Axios.post("http://localhost:3305/Admin/dropCourse", { newObj })
      .then((response) => {
        console.log(response.status);
        // If response exists - A.K.A. in JS, if it is 'truthy'.
        if (response.status == 200) {
          this.generateAndDisplayTableFromObject(response.data, "test3");
        }
      })
      .catch(function (error) {
        if (error) {
          if (error.response.status == 400)
            console.log("Bad request. Incorrect userID maybe?");
        }
      });
  };

  doHandleGetFacultyCourseList = () => {
    let newObj = this.generateObjectWithNeededPropertiesOnly(["facultyID"]);
    Axios.post("http://localhost:3305/Admin/facultyCourseList", {
      newObj,
    }).then((response) => {
      this.generateAndDisplayTableFromObject(response, "test3");
    });
  };

  doHandleModifyCourse = () => {
    let newObj = this.generateObjectWithNeededPropertiesOnly([
      "courseID",
      "courseName",
      "numCredits",
      "deptID",
    ]);
    Axios.post("http://localhost:3305/Admin/modifyCourse", { newObj }).then(
      (response) => {
        this.generateAndDisplayTableFromObject(response, "test3");
      }
    );
  };

  doHandleModifyUser = () => {
    let res = [];
    let newObj = this.generateObjectWithNeededPropertiesOnly([
      "firstName",
      "lastName",
      "phoneNumber",
      "DOB",
      "street",
      "city",
      "state",
      "zip",
      "userID",
    ]);

    console.log(newObj);

    Axios.post("http://localhost:3305/Admin/modifyUser", { newObj }).then(
      (response) => {
        res = response.data;
        this.makeSomeTables(res, "test3");
      }
    );
  };

  doHandleRegisterForCourse = () => {
    let newObj = this.generateObjectWithNeededPropertiesOnly([
      "studentID",
      "crn",
    ]);
    Axios.post("http://localhost:3305/Admin/registerForCourse", {
      newObj,
    }).then((response) => {
      console.log(response);
      // this.makeSomeTables(res, "test3");
      ReactDOM.render(
        <div className="main">
          <h2>Registered for course {newObj["crn"]}</h2>
        </div>,
        document.getElementById("test3")
      );
    });
  };
  componentDidMount = () => {
    let newObj = this.generateObjectWithNeededPropertiesOnly(["userID"]);

    newObj["userID"] = this.props.userCredentials["userID"];
    console.log(newObj);
    Axios.post("http://localhost:3305/Faculty/facultyLoginInfo", {
      newObj,
    }).then((response) => {
      console.log(response);
      let { userID, firstName, lastName } = response.data[0];
      let temp = { userID: userID, firstName: firstName, lastName: lastName };
      console.log(temp);
      this.displayLoginHeader(temp);
      ReactDOM.render(<div></div>, document.getElementById("root"));
    });
  };
  displayLoginHeader = (obj) => {
    let { userID, userType, firstName, lastName, email, password } = obj;
    // may use some of those other proeprties later
    this.displayTextMessageOnScreen(
      <div>
        <h3 className="text-center">Welcome to New Eastbury </h3>
        <h1 className="text-center" style={{ textDecoration: "underline" }}>
          {" "}
          {firstName} {lastName}!<h3>(UserID: {userID})</h3>
        </h1>
      </div>,
      "test1"
    );
  };

  doHandleGetStudentHistory = () => {
    let newObj = this.generateObjectWithNeededPropertiesOnly(["studentID"]);
    Axios.post("http://localhost:3305/Admin/viewStudentHistory", {
      newObj,
    }).then((response) => {});
  };

  doHandleGetAdminLoginInfo = () => {
    let newObj = this.generateObjectWithNeededPropertiesOnly(["userID"]);

    newObj["userID"] = this.props.userCredentials["userID"];
    Axios.post("http://localhost:3305/Admin/adminLoginInfo", {
      newObj,
    }).then((response) => {
      this.generateAndDisplayTableFromObject(response.data, "test3");
    });
  };

  doHandleLogin = () => {
    let reqBody = this.state.reqBodyObj;
    let newObj = {};
    let needed = ["userName", "password", "userType"];
    needed.map((ele) => {
      if (ele in reqBody) {
        newObj[ele] = reqBody[ele];
      } else {
        newObj[ele] = "";
      }
    });

    Axios.post("http://localhost:3305/Admin/courseSearch", {
      newObj,
    }).then((response) => {});
  };

  doHandleUpdatePassword = () => {
    let newObj = this.generateObjectWithNeededPropertiesOnly([
      "password",
      "userID",
    ]);

    Axios.post("http://localhost:3305/Admin/updatePassword", { newObj }).then(
      (response) => {
        this.displayNewMsgOnScreen(
          <div style={{ float: "left" }}>
            <p>HI!!!!!! WE'RE FLOATY</p>
          </div>
        );
      }
    );
  };

  doHandleViewAllUsers = () => {
    this.curQuery = queries.viewAllUsers;

    Axios.post("http://localhost:3305/Admin/viewAllUsers", {}).then(
      (response) => {}
    );
  };

  doHandleViewStudentHistory = () => {
    let newObj = this.generateObjectWithNeededPropertiesOnly(["studentID"]);

    Axios.post("http://localhost:3305/Admin/viewCourseHistory", {
      newObj,
    }).then((response) => {});
  };

  doHandleViewFacultyAdvisors = () => {
    this.curQuery = queries.viewFacultyAdvisors;
    Axios.post("http://localhost:3305/Admin/viewFacultyAdvisors", {}).then(
      (response) => {}
    );
  };

  doHandleViewStudentAdvisees = () => {
    Axios.post("http://localhost:3305/Admin/viewStudentAdvisees", {}).then(
      (response) => {}
    );
  };

  doHandleViewHolds = () => {
    let newObj = this.generateObjectWithNeededPropertiesOnly(["studentID"]);
    Axios.post("http://localhost:3305/Admin/viewHolds", { newObj }).then(
      (response) => {}
    );
  };

  doHandleViewRegistration = () => {
    let newObj = this.generateObjectWithNeededPropertiesOnly(["studentID"]);
    Axios.post("http://localhost:3305/Admin/viewRegistration", { newObj }).then(
      (response) => {}
    );
  };

  doHandleViewStudentSchedule = () => {
    let newObj = this.generateObjectWithNeededPropertiesOnly(["studentID"]);
    Axios.post("http://localhost:3305/Admin/viewStudentSchedule", {
      newObj,
    }).then((response) => {});
  };

  generateObjectWithNeededPropertiesOnly = (neededPropsArr) => {
    let newObj = {};
    let reqBody = this.state.reqBodyObj;
    let neededProps = neededPropsArr;
    neededProps.map((ele) => {
      if (ele in reqBody) {
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
      (response) => {}
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

    console.log("QUERY HANDLER: changed state of relevant key: ", key);
    console.log("Temp Data: ", this.state.tempData);

    let reqBodyObj = this.state.reqBodyObj;
    reqBodyObj[key] = value;
    this.setState({ reqBodyObj });

    let needed = [];

    console.log("Needed", needed);
  };

  makeForms = () => {
    // let ele = <AllForms passQueryParams={this.getQueryParams()}></AllForms>;
    // ReactDOM.render(ele, document.getElementById("root"));

    return <AllForms passQueryParams={this.getQueryParams}></AllForms>;
  };

  render() {
    return (
      <div>
        {/*this.makeForms()*/}
        <NavBar
          formData={this.state.tempData}
          adminLoginInfo={this.doHandleGetAdminLoginInfo}
          facultyCourseList={this.doHandleGetFacultyCourseList}
          courseSearch={this.doHandleCourseSearch}
          createCourse={this.doHandleCreateCourse}
          createUser={this.doHandleCreateUser}
          deleteCourse={this.doHandleDeleteCourse}
          degreeAudit={this.doHandleGetDegreeAudit}
          getTranscript={this.doHandleGetTranscript}
          dropStudentCourse={this.doHandleDropCourse}
          testLogin={this.doHandleTestLogin}
          modifyCourse={this.doHandleModifyCourse}
          modifyUser={this.doHandleModifyUser}
          registerStudentForCourse={this.doHandleRegisterForCourse}
          studentHistory={this.doHandleGetStudentHistory}
          // studentLoginInfo={this.doHandleGetStudentLoginInfo}
          viewStudentTranscript={this.doHandleGetTranscript}
          updatePassword={this.doHandleUpdatePassword}
          viewAllUsers={this.doHandleViewAllUsers}
          viewCourseHistory={this.doHandleViewStudentHistory}
          viewStudentHistory={this}
          viewFacultyAdvisors={this.doHandleViewFacultyAdvisors}
          // viewFacultyAdvisors={this.doHandleViewAdvisors}
          viewStudentHolds={this.doHandleViewHolds}
          viewRegistration={this.doHandleViewRegistration}
          viewStudentAdvisees={this.doHandleViewStudentAdvisees}
          viewStudentSchedule={this.doHandleViewStudentSchedule}
          userType={"Admin"}
          updateParams={this.updateParams}
        ></NavBar>
      </div>
    );
  }
}

export default QueryHandler;
