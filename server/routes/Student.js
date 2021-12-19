var express = require("express");
router = express.Router();
const cors = require("cors");
const db = require("../database.js");
const { response } = require("express");
// const userType = require("../../src/Components/ResearchStaff/ResearchStaff");
const { viewGradeData } = require("../../src/queries/StudentQueries");
// used usertype here since ResearchStaff.ResearchStaff
// looked weird
const queries = require("../../src/queries/StudentQueries");

router.use(express.json());
router.use(cors());

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
  //AUTO FILL INPUT: current userID
  db.query(query, [studentID], (err, result) => {
    res.send(result);
    console.log("Getting degree audit p1...");
    if (err) {
      console.log(err);
      res.err("Something went wrong getting transcript.");
    }
  });
});

router.post("/degreeAuditPt2", (req, res) => {
  let query = queries.degreeAuditPt2;
  //AUTO FILL INPUT: current userID
  db.query(query, [studentID], (err, result) => {
    res.send(result);
    console.log("Getting degree audit pt2...");
    if (err) {
      console.log(err);
      res.err("Something went wrong getting transcript.");
    }
  });
});

router.post("/dropCourse", (req, res) => {
  let query = queries.dropCourse;
  // USER INPUT: studentID, crn
  // Parameters: studentID-9 digits INT starting with 7, 5 digit CRN
});

router.post("/registerForCourse", (req, res) => {
  let query = queries.recordAttendance;
  //USER INPUT: studentID, crn, select('Yes' or 'No'), date(YYY-MM-DD)) 
});

router.post("/studentHistory", (req, res) => {
  let query = queries.studentHistory;
  //AUTO FILL INPUT: current userID
  db.query(query, [studentID], (err, result) => {
    res.send(result);
    console.log("Getting student history...");
    if (err) {
      console.log(err);
      res.err("Something went wrong getting transcript.");
    }
  });
});

router.post("/transcript", (req, res) => {
  let query = queries.transcript;
  //AUTO FILL INPUT: current userID
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

router.post("/viewAdvisor", (req, res) => {
  let query = queries.viewAdvisor;
  //AUTO FILL INPUT: current userID
  db.query(query, [studentID], (err, result) => {
    res.send(result);
    console.log("Getting advisor info...");
    if (err) {
      console.log(err);
      res.err("Something went wrong getting transcript.");
    }
  });
});

router.post("/viewHolds", (req, res) => {
  let query = queries.viewHolds;
  //AUTO FILL INPUT: current userID
  db.query(query, [studentID], (err, result) => {
    res.send(result);
    console.log("Getting holds...");
    if (err) {
      console.log(err);
      res.err("Something went wrong getting transcript.");
    }
  });
});

router.post("/viewRegistration", (req, res) => {
  let query = queries.viewRegistration;
  //AUTO FILL INPUT: current userID
  db.query(query, [studentID], (err, result) => {
    res.send(result);
    console.log("Getting registration...");
    if (err) {
      console.log(err);
      res.err("Something went wrong getting transcript.");
    }
  });
});

router.post("/viewStudentLoginInfo", (req, res) => {
  let query = queries.viewStudentLoginInfo;
  //AUTO FILL INPUT: current userID
  db.query(query, [studentID], (err, result) => {
    res.send(result);
    console.log("Getting user info...");
    if (err) {
      console.log(err);
      res.err("Something went wrong getting transcript.");
    }
  });
});


router.post("/logout", (req, res) => {
  // Use login.js as a template
  let someBodyProp = "";
});
module.exports = router;
