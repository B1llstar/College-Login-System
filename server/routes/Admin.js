var express = require("express");
router = express.Router();
const cors = require("cors");
const db = require("../database.js");
const { response } = require("express");
const queries = require("../../src/queries/AdminQueries");


router.use(express.json());
router.use(cors());

// Removing query where it's not needed
router.post("/", (req, res) => {
  // Use login.js as a template
});

router.post("/adminLoginInfo", (req, res) => {
  let query = queries.getAdminLoginInfo;
  const testID = 600095969;
  db.query(query, [testID], (err, result) => {
    res.send(result);
    console.log("Getting admin info...");
    if (err) {
      console.log(err);
      res.err("Something went wrong admin info.");
    }
  });
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

router.post("/createCourse", (req, res) => {
  let query = queries.createCourse;
  const testID = 25252;
  db.query(query, [testID], (err, result) => {
    res.send(result);
    console.log("Creating course...");
    if (err) {
      console.log(err);
      res.err("Something went wrong creating the course.");
    }
  });
});

router.post("/createUser", (req, res) => {
  let query = queries.createUser;
  const testID = 25252;
  db.query(query, [testID], (err, result) => {
    res.send(result);
    console.log("Creating user...");
    if (err) {
      console.log(err);
      res.err("Something went wrong creating the user.");
    }
  });
});

router.post("/deleteCourse", (req, res) => {
  let query = queries.deleteCourse;
  
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

router.post("/dropCourse", (req, res) => {
  let query = queries.dropCourse;
});

router.post("/modifyCourse", (req, res) => {
  let query = queries.modifyCourse;
});

router.post("/modifyUser", (req, res) => {
  let query = queries.modifyUser;
});

router.post("/registerForCourse", (req, res) => {
  let query = queries.registerForCourse;
});

router.post("/studentHistory", (req, res) => {
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

router.post("/studentLoginInfo", (req, res) => {
  let query = queries.getStudentLoginInfo;
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

router.post("/unofficialTranscript", (req, res) => {
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
  let query = queries.updatePassword;
});

router.post("/viewAdvisees", (req, res) => {
  let query = queries.viewStudentAdvisees;
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

router.post("/viewAdvisors", (req, res) => {
  let query = queries.viewFacultyAdvisors;
  const testID = 700100828;
  db.query(query, [testID], (err, result) => {
    res.send(result);
    console.log("Getting advisors list...");
    if (err) {
      console.log(err);
      res.err("Something went wrong getting advisors.");
    }
  });
});

router.post("/viewAllUsers", (req, res) => {
  let query = queries.viewAllUserInfo;
  const testID = 700100828;
  db.query(query, [testID], (err, result) => {
    res.send(result);
    console.log("Getting full user list...");
    if (err) {
      console.log(err);
      res.err("Something went wrong getting users.");
    }
  });
});

router.post("/viewCourseHistory", (req, res) => {
  let query = queries.viewCourseHistory;
  const testID = 700100828;
  db.query(query, [testID], (err, result) => {
    res.send(result);
    console.log("Getting course history...");
    if (err) {
      console.log(err);
      res.err("Something went wrong getting course history.");
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
