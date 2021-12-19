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

router.post("/coursesTeaching", (req, res) => {
  let query = queries.facultyCoursesTeaching;
  const testID = 900000375;
  db.query(query, [testID], (err, result) => {
    res.send(result);
    console.log("Getting courses...");
    if (err) {
      console.log(err);
      res.err("Something went wrong getting courses.");
    }
  });
});

router.post("/courseSearch", (req, res) => {
  let query = queries.courseSearch;
  const testID = 25252;
  db.query(query, [testID], (err, result) => {
    res.send(result);
    console.log("Getting courses...");
    if (err) {
      console.log(err);
      res.err("Something went wrong getting search results.");
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
      res.err("Something went wrong getting degree audit stats.");
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
      res.err("Something went wrong getting degree audit.");
    }
  });
});

router.post("/facultyLoginInfo", (req, res) => {
  let query = queries.getFacultyLoginInfo;
  const testID = 900000375;
  db.query(query, [testID], (err, result) => {
    res.send(result);
    console.log("Getting user info...");
    if (err) {
      console.log(err);
      res.err("Something went wrong getting login info.");
    }
  });
});

router.post("/recordAttendance", (req, res) => {
  // Use login.js as a template
});

router.post("/registerForCourse", (req, res) => {
  // Use login.js as a template
});

router.post("/getStudentHistory", (req, res) => {
  let query = queries.getStudentHistory;
  const testID = 700100828;
  db.query(query, [testID], (err, result) => {
    res.send(result);
    console.log("Getting student history...");
    if (err) {
      console.log(err);
      res.err("Something went wrong getting student history.");
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

router.post("/viewAdvisees", (req, res) => {
  let query = queries.viewAdvisees;
  const testID = 900000375;
  db.query(query, [testID], (err, result) => {
    res.send(result);
    console.log("Getting advisees list...");
    if (err) {
      console.log(err);
      res.err("Something went wrong getting advisees.");
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
      res.err("Something went wrong getting holds.");
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
      res.err("Something went wrong getting registration.");
    }
  });
});

router.post("/viewStudentSchedule", (req, res) => {
  let query = queries.getStudentSchedule;
  const testID = 700217149;
  db.query(query, [testID], (err, result) => {
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
