/* There has to be a better way to do this...
I'll comment it out for now since it's screwing with compiling ----

import { query } from "express";
import PostRequest from "../Post_Request_Template";
const queries = require("../../queries/Queries_Master");
const storage = require("node-persist");

async function crigne() {
  await storage.init();
  // let studentID = await storage.getItem("studentID");
  let auth = await storage.getItem("auth");
  // return { studentID, auth };
  return { auth };
}

class Student {
  // Haven't set student id yet, so I'm leaving that out
  constructor() {
    // const { studentID, auth } = crigne();
    //  this.auth = crigne();
    this.permissibleQueries = {
      // updatePassword: queries.updatePassword,
      // getStudentHistory: queries.getStudentHistory,
      dropCourse: queries.dropCourse,
      viewHolds: queries.viewHolds,
      viewRegistration: queries.viewRegistration,
      courseSearch: queries.courseSearch,
      registerForCourse: queries.registerForCourse,
      getUnofficialTranscript: queries.getTranscript,
      degreeAudit: queries.getDegreeAuditCoursesTakenP1,
      degreeAudit2: queries.getDegreeAuditCoursesTakenP2,
      viewAdvisor: queries.getAdvisor,
    };

    this.requests = {
      dropCourse: function () {
        PostRequest({ path: "/Student/dropCourse", auth: "Hi" });
      },
    };

    // assign queries to constants using obj deconstruction

    // define new key/val pairs in permissibleQueries for
    // easy access

    // return permissibleQueries;
  }
}


*/
