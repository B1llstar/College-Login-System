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
  const testID = 25252;
  db.query(query, [testID], (err, result) => {
    res.send(result);
    console.log("Getting courses...");
    if (err) {
      console.log(err);
      res.err("Something went wrong getting transcript.");
    }
  });
});

router.post("/dropCourse", (req, res) => {
  // Use login.js as a template
});

router.post("/degreeAudit", (req, res) => {
  let query = queries.getDegreeAuditCoursesTakenP1;
  const testID = 700100828;
  db.query(query, [testID], (err, result) => {
    res.send(result);
    console.log("Getting degree audit p1...");
    if (err) {
      console.log(err);
      res.err("Something went wrong getting transcript.");
    }
  });
});

router.post("/degreeAudit2", (req, res) => {
  let query = queries.getDegreeAuditCoursesTakenP2;
  const testID = 700100828;
  db.query(query, [testID], (err, result) => {
    res.send(result);
    console.log("Getting degree audit pt2...");
    if (err) {
      console.log(err);
      res.err("Something went wrong getting transcript.");
    }
  });
});

router.post("/registerForCourse", (req, res) => {
  // Use login.js as a template
});

router.post("/getStudentLoginInfo", (req, res) => {
  let query = queries.getStudentLoginInfo;
  const testID = 700100828;
  db.query(query, [testID], (err, result) => {
    res.send(result);
    console.log("Getting user info...");
    if (err) {
      console.log(err);
      res.err("Something went wrong getting transcript.");
    }
  });
});

router.post("/getStudentHistory", (req, res) => {
  let query = queries.getStudentHistory;
  const testID = 700100828;
  db.query(query, [testID], (err, result) => {
    res.send(result);
    console.log("Getting student history...");
    if (err) {
      console.log(err);
      res.err("Something went wrong getting transcript.");
    }
  });
});

router.post("/getTranscript", (req, res) => {
  let query = queries.getTranscript;
  const testID = 700100828;
  db.query(query, [testID], (err, result) => {
    res.send(result);
    console.log("Getting transcript...");
    if (err) {
      console.log(err);
      res.err("Something went wrong getting transcript.");
    }
  });
});

router.post("/updatePassword", (req, res) => {
  // Use login.js as a template
});

router.post("/viewAdvisor", (req, res) => {
  let query = queries.getAdvisor;
  const testID = 700100828;
  db.query(query, [testID], (err, result) => {
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
  const testID = 700727715;
  db.query(query, [testID], (err, result) => {
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
  const testID = 700217149;
  db.query(query, [testID], (err, result) => {
    res.send(result);
    console.log("Getting registration...");
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
