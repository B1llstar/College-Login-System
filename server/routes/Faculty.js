var express = require("express");
router = express.Router();
const cors = require("cors");
const db = require("../database.js");
const { response } = require("express");
const queries = require("../../src/queries/FacultyQueries");

router.use(express.json());
router.use(cors());

// Removing query where it's not needed
router.post("/", (req, res) => {
  // Use login.js as a template
});

router.post("/courseSearch", (req, res) => {
  let query = queries.courseSearch;
  // for this query, the entire clause is the variable, with the question mark being a different user input
  // 4 different input fields, CRN, courseID, courseName, and Instructor
  // let whereClause=one of these 4
  // let inputVariable=?
  // finalList.crn = '?';
  // finalList.courseID = '?';
  // finalList.courseName = '%?%'; (percent symbols are wildcards)
  // finalList.Instructor = '%?%';
  // These statements can also be combined by concatinating with AND
});

router.post("/degreeAuditPt1", (req, res) => {
  let query = queries.degreeAuditPt1;
  //USER INPUT: studentID
  db.query(query, [studentID], (err, result) => {
    res.send(result);
    console.log("Getting degree audit p1...");
    if (err) {
      console.log(err);
      res.err("Something went wrong getting degree audit stats.");
    }
  });
});

router.post("/degreeAuditPt2", (req, res) => {
  let query = queries.degreeAuditPt2;
  //USER INPUT: studentID
  db.query(query, [studentID], (err, result) => {
    res.send(result);
    console.log("Getting degree audit pt2...");
    if (err) {
      console.log(err);
      res.err("Something went wrong getting degree audit.");
    }
  });
});

router.post("/facultyCoursesTeaching", (req, res) => {
  let query = queries.facultyCoursesTeaching;
  //AUTO FILL INPUT: current userID
  db.query(query, [facultyID], (err, result) => {
    res.send(result);
    console.log("Getting courses...");
    if (err) {
      console.log(err);
      res.err("Something went wrong getting courses.");
    }
  });
});

router.post("/facultyLoginInfo", (req, res) => {
  let query = queries.getFacultyLoginInfo;
  //AUTO FILL INPUT: current userID
  db.query(query, [facultyID], (err, result) => {
    res.send(result);
    console.log("Getting user info...");
    if (err) {
      console.log(err);
      res.err("Something went wrong getting login info.");
    }
  });
});

router.post("/recordAttendance", (req, res) => {
  let query = queries.recordAttendance;
  //USER INPUT: studentID, crn, select('Yes' or 'No'), date(YYY-MM-DD)) 
});

router.post("/studentHistory", (req, res) => {
  let query = queries.getStudentHistory;
  //USER INPUT: studentID
  db.query(query, [studentID], (err, result) => {
    res.send(result);
    console.log("Getting student history...");
    if (err) {
      console.log(err);
      res.err("Something went wrong getting student history.");
    }
  });
});

router.post("/transcript", (req, res) => {
  let query = queries.getTranscript;
  //USER INPUT: studentID
  db.query(query, [studentID], (err, result) => {
    res.send(result);
    console.log("Getting transcript...");
    if (err) {
      console.log(err);
      res.err("Something went wrong getting transcript.");
    }
  });
});

router.post("/updatePassword", (req, res) => {
  let query = queries.updatePassword;
  //AUTO FILL INPUT: current userID
  //USER INPUT: password
});

router.post("/viewHolds", (req, res) => {
  let query = queries.viewHolds;
  //USER INPUT: studentID
  db.query(query, [studentID], (err, result) => {
    res.send(result);
    console.log("Getting holds...");
    if (err) {
      console.log(err);
      res.err("Something went wrong getting holds.");
    }
  });
});

router.post("/viewRegistration", (req, res) => {
  let query = queries.viewRegistration;
  //USER INPUT: studentID
  db.query(query, [studentID], (err, result) => {
    res.send(result);
    console.log("Getting registration...");
    if (err) {
      console.log(err);
      res.err("Something went wrong getting registration.");
    }
  });
});

router.post("/viewStudentAdvisees", (req, res) => {
  let query = queries.viewStudentAdvisees;
  //AUTO FILL INPUT: current userID
  db.query(query, [facultyID], (err, result) => {
    res.send(result);
    console.log("Getting advisees list...");
    if (err) {
      console.log(err);
      res.err("Something went wrong getting advisees.");
    }
  });
});

router.post("/viewStudentSchedule", (req, res) => {
  let query = queries.getStudentSchedule;
  //USER INPUT: studentID
  db.query(query, [studentID], (err, result) => {
    res.send(result);
    console.log("Getting student's schedule...");
    if (err) {
      console.log(err);
      res.err("Something went wrong getting schedule.");
    }
  });
});

router.post("/logout", (req, res) => {
  // Use login.js as a template
  let someBodyProp = "";
});

module.exports = router;
