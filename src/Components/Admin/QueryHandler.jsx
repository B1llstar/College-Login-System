import React, { Component } from "react";
import queries from "./getQueries";

import Home from "./Home";
import Axios from "axios";
import NavBar from "../NavBar";
import AllForms from "../AllForms";
import ReactDOM from "react-dom";
import "../../styles/bodyStyles.css";

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
      let tdElements = unique.map((ele, index) => {
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

  doHandleGetTranscript = () => {
    let newObj = this.generateObjectWithNeededPropertiesOnly(["studentID"]);
    Axios.post("http://localhost:3305/Admin/transcript", { newObj }).then(
      (response) => {
        this.makeSomeTables(response.data, "test2");
      }
    );
  };

  doHandleGetAdminLoginInfo = () => {
    let newObj = this.generateObjectWithNeededPropertiesOnly(["userID"]);
    Axios.post("http://localhost:3305/Admin/adminLoginInfo", { newObj }).then(
      (response) => {
        console.log(response);
      }
    );
  };
  doHandleGetCoursesTeaching = () => {
    Axios.post("http://localhost:3305/Admin/coursesTeaching", {}).then(
      (response) => {
        console.log(response);
      }
    );
  };

  checkForNeededProps(first_, toBePassed) {
    let first = first_;
    let passed = toBePassed;
    let vals = Object.values("first");
    let eles = {};

    for (const prop in first) {
      console.log(prop);
      if (prop in passed) {
        eles[prop] = toBePassed[prop];
      }
    }

    return eles;
  }

  doHandleCourseSearch = () => {
    let newObj = this.generateObjectWithNeededPropertiesOnly([
      "crn",
      "courseID",
      "courseName",
      "Instructor",
    ]);
    console.log(newObj);
    Axios.post("http://localhost:3305/Admin/courseSearch", { newObj }).then(
      (response) => {
        console.log(response);

        // this.props.makeTable(this.props.obj.data);
      }
    );
  };

  doHandleCreateCourse = () => {
    this.curQuery = queries.createCourse;
    let newObj = this.generateObjectWithNeededPropertiesOnly([
      "courseID",
      "courseName",
      "numCredits",
      "deptID",
    ]);
    console.log("Submitted request body: " + newObj);
    Axios.post("http://localhost:3305/Admin/createCourse", { newObj }).then(
      (response) => {
        console.log("Response");
        console.log(response);
        this.makeSomeTables(response.data, "test2");
        // this.props.makeTable(this.props.obj.data);
      }
    );
  };

  doHandleCreateUser = () => {
    this.curQuery = queries.createUser;
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
        console.log(response);

        this.makeSomeTables(response.data, "test2");

        // this.props.makeTable(this.props.obj.data);
      }
    );
  };

  doHandleDeleteCourse = () => {
    let newObj = this.generateObjectWithNeededPropertiesOnly(["courseID"]);
    console.log(newObj);
    Axios.post("http://localhost:3305/Admin/deleteCourse", { newObj }).then(
      (response) => {
        console.log(response);
        // this.props.makeTable(this.props.obj.data);
      }
    );
  };

  doHandleGetDegreeAudit = () => {
    let newObj = this.generateObjectWithNeededPropertiesOnly(["studentID"]);
    let res = [];
    Axios.post("http://localhost:3305/Admin/degreeAuditPt1", { newObj }).then(
      (response) => {
        console.log("RESPONSE PT 1", response);
        res = response.data;
        this.makeSomeTables(res, "test2");
      }
    );

    Axios.post("http://localhost:3305/Admin/degreeAuditPt2", { newObj }).then(
      (response) => {
        console.log("RESPONSE PT 2", response);
        res = response.data;

        this.makeSomeTables(res, "test3");
      }
    );
  };

  doHandleDropCourse = () => {
    let newObj = this.generateObjectWithNeededPropertiesOnly([
      "studentID",
      "crn",
    ]);

    Axios.post("http://localhost:3305/Admin/dropCourse", { newObj }).then(
      (response) => {
        console.log(response);
      }
    );
  };

  doHandleGetFacultyCourseList = () => {
    let newObj = this.generateObjectWithNeededPropertiesOnly(["facultyID"]);
    Axios.post("http://localhost:3305/Admin/facultyCourseList", {
      newObj,
    }).then((response) => {
      console.log(response);
    });
  };

  doHandleModifyCourse = () => {
    let res = [];

    this.curQuery = queries.modifyCourse;
    let newObj = this.generateObjectWithNeededPropertiesOnly([
      "courseID",
      "courseName",
      "numCredits",
      "deptID",
    ]);
    Axios.post("http://localhost:3305/Admin/modifyCourse", { newObj }).then(
      (response) => {
        console.log(response);
        res = response.data;
        this.makeSomeTables(res, "test2");
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
        this.makeSomeTables(res, "test2");
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
      // this.makeSomeTables(res, "test2");
      ReactDOM.render(
        <div className="main">
          <h2>Registered for course {newObj["crn"]}</h2>
        </div>,
        document.getElementById("test2")
      );
    });
  };

  doHandleGetStudentHistory = () => {
    let newObj = this.generateObjectWithNeededPropertiesOnly(["studentID"]);
    Axios.post("http://localhost:3305/Admin/viewStudentHistory", {
      newObj,
    }).then((response) => {
      console.log(response);
    });
  };

  doHandleGetStudentLoginInfo = () => {
    let newObj = this.generateObjectWithNeededPropertiesOnly(["userID"]);
    Axios.post("http://localhost:3305/Admin/adminLoginInfo", {
      newObj,
    }).then((response) => {
      console.log(response);
    });
  };

  doHandleLogin = () => {
    this.curQuery = queries.createCourse;
    let reqBody = this.state.reqBodyObj;
    let newObj = {};
    let needed = ["userName", "password", "userType"];
    let eles = needed.map((ele) => {
      if (ele in reqBody) {
        console.log(ele);
        //   if (ele == "numCredits") {
        //   console.log("Found an integer");
        // newObj[ele] = parseInt(reqBody[ele]);

        // using in instead of includes, it's better apparently
        newObj[ele] = reqBody[ele];
      } else {
        newObj[ele] = "";
      }
    });

    Axios.post("http://localhost:3305/Admin/courseSearch", {
      newObj,
    }).then((response) => {
      console.log(response);
    });
  };

  doHandleUpdatePassword = () => {
    this.curQuery = queries.updatePassword;
    let newObj = this.generateObjectWithNeededPropertiesOnly([
      "password",
      "userID",
    ]);

    Axios.post("http://localhost:3305/Admin/updatePassword", { newObj }).then(
      (response) => {
        console.log(response);
      }
    );
  };

  doHandleViewAllUsers = () => {
    this.curQuery = queries.viewAllUsers;

    Axios.post("http://localhost:3305/Admin/viewAllUsers", {}).then(
      (response) => {
        console.log(response);
      }
    );
  };

  doHandleViewStudentHistory = () => {
    let newObj = this.generateObjectWithNeededPropertiesOnly(["studentID"]);

    Axios.post("http://localhost:3305/Admin/viewCourseHistory", {
      newObj,
    }).then((response) => {
      console.log(response);
    });
  };

  doHandleViewFacultyAdvisors = () => {
    this.curQuery = queries.viewFacultyAdvisors;
    Axios.post("http://localhost:3305/Admin/viewFacultyAdvisors", {}).then(
      (response) => {
        console.log(response);
      }
    );
  };

  doHandleViewStudentAdvisees = () => {
    Axios.post("http://localhost:3305/Admin/viewStudentAdvisees", {}).then(
      (response) => {
        console.log(response);
      }
    );
  };

  doHandleViewHolds = () => {
    let newObj = this.generateObjectWithNeededPropertiesOnly(["studentID"]);
    Axios.post("http://localhost:3305/Admin/viewHolds", { newObj }).then(
      (response) => {
        console.log(response);
      }
    );
  };

  doHandleViewRegistration = () => {
    let newObj = this.generateObjectWithNeededPropertiesOnly(["studentID"]);
    Axios.post("http://localhost:3305/Admin/viewRegistration", { newObj }).then(
      (response) => {
        console.log(response);
      }
    );
  };

  doHandleViewStudentSchedule = () => {
    let newObj = this.generateObjectWithNeededPropertiesOnly(["studentID"]);
    Axios.post("http://localhost:3305/Admin/viewStudentSchedule", {
      newObj,
    }).then((response) => {
      console.log(response);
    });
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
  /*
  doHandleGetTranscript = () => {
    let newObj = this.generateObjectWithNeededPropertiesOnly(["studentID"]);
    Axios.post("http://localhost:3305/Admin/transcript", { newObj }).then(
      (response) => {
        console.log(response[0]);
      }
    );
  };
*/
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
          studentLoginInfo={this.doHandleGetStudentLoginInfo}
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
