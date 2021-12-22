import React, { Component } from "react";
import queries from "./getQueries";
import Home from "./Home";
import Axios from "axios";
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
      },
    };
    this.curQuery = "";
  }

  tableMaker = () => {};

  doHandleGetAdminLoginInfo = () => {
    let newObj = this.generateObjectWithNeededPropertiesOnly(["userID"]);
    Axios.post("http://localhost:3305/Admin/adminLoginInfo", { newObj }).then(
      (response) => {
        console.log(response);
      }
    );
  };
  doHandleGetCoursesTeaching = () => {
    this.curQuery = queries.coursesTeaching;

    Axios.post("http://localhost:3305/Admin/coursesTeaching", {
      userID: {},
    }).then((response) => {
      console.log(response);
      console.log("QUERY!!!!!");
      this.props.obj.data = response.data;
      console.log(this.props.obj.data);
      this.props.makeTable(this.props.obj.data);
    });
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
    this.curQuery = queries.courseSearch;
    let newObj = this.generateObjectWithNeededPropertiesOnly(["crn"]);
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

        // this.props.makeTable(this.props.obj.data);
      }
    );
  };

  doHandleCreateUser = () => {
    this.curQuery = queries.createUser;
    let newObj = this.generateObjectWithNeededPropertiesOnly([
      "studentID",
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
    console.log("Submitted request body: " + newObj);
    Axios.post("http://localhost:3305/Admin/createUser", {}).then(
      (response) => {
        console.log(response);
        console.log("QUERY!!!!!");
        this.props.obj.data = response.data;
        console.log(this.props.obj.data);
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

  doHandleGetDegreeAuditPt2 = () => {
    this.curQuery = queries.degreeAuditPt2;
    Axios.post("http://localhost:3305/Admin/degreeAuditPt2", {}).then(
      (response) => {
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
    Axios.post("http://localhost:3305/Admin/dropCourse", {}).then(
      (response) => {
        console.log(response);
        console.log("QUERY!!!!!");
        this.props.obj.data = response.data;
      }
    );
  };

  doHandleGetFacultyCourseList = () => {
    this.curQuery = queries.coursesTeaching;
    Axios.post("http://localhost:3305/Admin/facultyCourseList", {}).then(
      (response) => {
        console.log(response);
        console.log("QUERY!!!!!");
        this.props.obj.data = response.data;
        console.log(this.props.obj.data);
        this.props.makeTable(this.props.obj.data);
      }
    );
  };

  doHandleModifyCourse = () => {
    this.curQuery = queries.modifyCourse;
    Axios.post("http://localhost:3305/Admin/modifyCourse", {}).then(
      (response) => {
        console.log(response);
        console.log("QUERY!!!!!");
        this.props.obj.data = response.data;
        console.log(this.props.obj.data);
        this.props.makeTable(this.props.obj.data);
      }
    );
  };

  doHandleModifyUser = () => {
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
      (response) => {}
    );
  };

  doHandleRegisterForCourse = () => {
    this.curQuery = queries.registerForCourse;
    Axios.post("http://localhost:3305/Admin/registerForCourse", {}).then(
      (response) => {
        console.log(response);
        console.log("QUERY!!!!!");
        this.props.obj.data = response.data;
      }
    );
  };

  doHandleGetStudentHistory = () => {
    let newObj = this.generateObjectWithNeededPropertiesOnly(["studentID"]);
    Axios.post("http://localhost:3305/Admin/viewStudentHistory", { newObj }).then(
      (response) => {
        console.log(response);
      }
    );
  };

  doHandleGetStudentLoginInfo = () => {
    let newObj = this.generateObjectWithNeededPropertiesOnly(["studentID"]);
    Axios.post("http://localhost:3305/Admin/viewStudentLoginInfo", { newObj }).then(
      (response) => {
        console.log(response);
      }
    );
  };

  doHandleGetTranscript = () => {
    let newObj = this.generateObjectWithNeededPropertiesOnly(["studentID"]);
    Axios.post("http://localhost:3305/Admin/viewStudentSchedule", { newObj }).then(
      (response) => {
        console.log(response);
      }
    );
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

    console.log(newObj);
    console.log(newObj[0]);
    let eles2 = [];
    console.log(Object.values(newObj));

    Axios.post("http://localhost:3305/Admin/courseSearch", {
      newObj,
    }).then((response) => {
      console.log(response);
    });
  };

  doHandleUpdatePassword = () => {
    this.curQuery = queries.updatePassword;
    Axios.post("http://localhost:3305/Admin/updatePassword", {}).then(
      (response) => {
        console.log(response);
        console.log("QUERY!!!!!");
        this.props.obj.data = response.data;
      }
    );
  };

  doHandleViewAllUsers = () => {
    this.curQuery = queries.viewAllUsers;
    Axios.post("http://localhost:3305/Admin/viewAllUsers", {}).then(
      (response) => {
        console.log(response);
        console.log("QUERY!!!!!");
        this.props.obj.data = response.data;
        console.log(this.props.obj.data);
        this.props.makeTable(this.props.obj.data);
      }
    );
  };

  doHandleViewCourseHistory = () => {
    this.curQuery = queries.viewCourseHistory;
    Axios.post("http://localhost:3305/Admin/viewCourseHistory", {}).then(
      (response) => {
        console.log(response);
        console.log("QUERY!!!!!");
        this.props.obj.data = response.data;
        console.log(this.props.obj.data);
        this.props.makeTable(this.props.obj.data);
      }
    );
  };

  doHandleViewFacultyAdvisors = () => {
    this.curQuery = queries.viewFacultyAdvisors;
    Axios.post("http://localhost:3305/Admin/viewFacultyAdvisors", {}).then(
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
    Axios.post("http://localhost:3305/Admin/viewStudentSchedule", { newObj }).then(
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
        {/*this.makeForms()*/}
        <NavBar
          formData={this.state.tempData}
          adminLoginInfo={this.doHandleGetAdminLoginInfo}
          facultyCourseList={this.doHandleGetFacultyCourseList}
          courseSearch={this.doHandleCourseSearch}
          createCourse={this.doHandleCreateCourse}
          createUser={this.doHandleCreateUser}
          deleteCourse={this.doHandleDeleteCourse}
          // degreeAuditPt1={this.doHandleGetDegreeAuditPt1}
          degreeAuditPt2={this.doHandleGetDegreeAuditPt2}
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
          viewCourseHistory={this.doHandleViewCourseHistory}
          viewFacultyAdvisors={this.doHandleViewFacultyAdvisors}
          viewFacultyAdvisors={this.doHandleViewAdvisors}
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
