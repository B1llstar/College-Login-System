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
  let ele = grabVals(req.body.eles);
  db.query(query, [/*course search variables*/], (err, result) => {
    res.send(result);
    console.log("Getting search results...");
    if (err) {
      console.log(err);
      res.err("Something went wrong getting search results.");
    }
  });
});

router.post("/degreeAuditPt1", (req, res) => {
  let query = queries.degreeAuditPt1;
  let ele = grabVals(req.body.eles);
  db.query(query, [studentID], (err, result) => {
    res.send(result);
    console.log("Getting degree audit p1...");
    if (err) {
      console.log(err);
      res.err("Something went wrong getting degree audit overview.");
    }
  });
});

router.post("/degreeAuditPt2", (req, res) => {
  let query = queries.degreeAuditPt2;
  let ele = grabVals(req.body.eles);
  db.query(query, [studentID], (err, result) => {
    res.send(result);
    console.log("Getting degree audit pt2...");
    if (err) {
      console.log(err);
      res.err("Something went wrong getting degree audit details.");
    }
  });
});

router.post("/facultyCoursesTeaching", (req, res) => {
  let query = queries.facultyCoursesTeaching;
  let ele = grabVals(req.body.eles);
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
  let ele = grabVals(req.body.eles);
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
  let ele = grabVals(req.body.eles);
  db.query(query, [studentID, crn], (err, result) => {
    res.send(result);
    console.log("Storing attendance record...");
    if (err) {
      console.log(err);
      res.err("Something went wrong getting login info.");
    }
  });
});

router.post("/studentHistory", (req, res) => {
  let query = queries.getStudentHistory;
  let ele = grabVals(req.body.eles);
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
  let ele = grabVals(req.body.eles);
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
  let ele = grabVals(req.body.eles);
  console.log(ele);
  db.query(query, [facultyID, password], (err, result) => {
      if (err) {
        console.log(err, "Problem updating password");
      } else {
        console.log("Successfully updated password");
      }
    }
  );
});

router.post("/viewHolds", (req, res) => {
  let query = queries.viewHolds;
  let ele = grabVals(req.body.eles);
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
  let ele = grabVals(req.body.eles);
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
  let ele = grabVals(req.body.eles);
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
  let ele = grabVals(req.body.eles);
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
