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

function replaceQueryQuestionMarkTokens(requestBodyObj, str) {
  let valReplacements = Object.values(requestBodyObj);
  let newString = str;

  valReplacements.map((ele) => {
    if (typeof ele == "number") {
      console.log("Found a number");
      newString = newString.replace("'?'", ele);
    } // may only need to use parseInt on that prop
    // in the route instead, i hope it's that easy
    else newString = newString.replace("?", ele);
  });
  console.log(newString);
  return newString;
}

router.post("/assignedCourseList", (req, res) => {
  let query = queries.assignedCourseList;
  let newQuery = replaceQueryQuestionMarkTokens(req.body.newObj, query);
  db.query(newQuery, (err, result) => {
    if (err) {
      console.log("err");
      res.sendSatus(400);
    } else {
      console.log("nice");
      res.send(result);
    }
  });
});

router.post("/courseSearch", (req, res) => {
  let query = queries.courseSearch;
  req.body.newObj["crn"] = parseInt(req.body.newObj["crn"]);
  let newQuery = replaceQueryQuestionMarkTokens(req.body.newObj, query);

  db.query(newQuery, (err, result) => {
    if (err) {
      console.log("Err finding course");
    } else {
      console.log("Result of course search: ", result);
      res.send(result);
    }
  });
});

router.post("/degreeAuditPt1", (req, res) => {
  let query = queries.degreeAuditPt1;
  let { studentID } = req.body.newObj;
  studentID = parseInt(studentID);
  db.query(query, [studentID], (err, result) => {
    console.log("Getting degree audit p1...");
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

router.post("/degreeAuditPt2", (req, res) => {
  let query = queries.degreeAuditPt2;
  let { studentID } = req.body.newObj;
  studentID = parseInt(studentID);

  db.query(query, [studentID], (err, result) => {
    console.log("Getting degree audit pt2...");
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

router.post("/facultyLoginInfo", (req, res) => {
  let query = queries.facultyLoginInfo;
  let userID = req.body.newObj["userID"];
  // AUTO FILL: userID
  db.query(query, [userID], (err, result) => {
    console.log("Getting faculty info...");
    if (err) {
      console.log(err);
      // res.err("(ADMIN) Failed to get login info");
    } else {
      console.log("Got info: ", result);
    }
  });
});

router.post("/recordAttendance", (req, res) => {
  let query = queries.recordAttendance;
  let newQuery = replaceQueryQuestionMarkTokens(req.body.newObj, query);
  console.log(req.body.newObj);
  db.query(newQuery, (err, result) => {
    if (err) {
      console.log("err");
    } else {
      console.log("nice");
      console.log(result);
    }
  });
});

router.post("/studentHistory", (req, res) => {
  let query = queries.studentHistory;
  let studentID = req.body.newObj["studentID"];

  db.query(query, studentID, (err, result) => {
    if (err) {
      res.sendStatus(400);
    } else {
      res.send(result);
    }
  });
});

router.post("/transcript", (req, res) => {
  let query = queries.transcript;
  let studentID = req.body.newObj["studentID"];

  console.log("student ID: ", studentID);
  console.log(req.body);

  db.query(query, studentID, (err, result) => {
    res.send(result);
    console.log("Getting transcript...");
    console.log(result);
    if (err) {
      console.log(err);
      res.err("Something went wrong getting transcript.");
    }
  });
});

router.post("/updatePassword", (req, res) => {
  let query = queries.updatePassword;
  let newQuery = replaceQueryQuestionMarkTokens(req.body.newObj, query);
  console.log(req.body.newObj);
  db.query(newQuery, (err, result) => {
    if (err) {
      console.log("err");
    } else {
      console.log("nice");
      console.log(result);
    }
  });
});

router.post("/viewHolds", (req, res) => {
  let query = queries.viewHolds;
  let studentID = req.body.newObj["studentID"];

  console.log("student ID: ", studentID);
  console.log(req.body);

  db.query(query, studentID, (err, result) => {
    res.send(result);
    console.log("Getting holds...");
    console.log(result);
    if (err) {
      console.log(err);
      res.err("Something went wrong getting holds.");
    }
  });
});

router.post("/viewRegistration", (req, res) => {
  let query = queries.viewRegistration;
  let studentID = req.body.newObj["studentID"];

  console.log("student ID: ", studentID);
  console.log(req.body);

  db.query(query, studentID, (err, result) => {
    res.send(result);
    console.log("Getting registration...");
    console.log(result);
    if (err) {
      console.log(err);
      res.err("Something went wrong getting registration.");
    }
  });
});

router.post("/viewStudentAdvisees", (req, res) => {
  //If we have time, we can create a user input filter for studentID, but not necessary
  let query = queries.viewAdvisees;
  let facID = req.body.newObj["facultyID"];

  db.query(query, [facID], (err, result) => {
    if (err) {
      res.sendStatus(400);
    } else {
      res.send(result);
    }
  });
});

router.post("/viewStudentSchedule", (req, res) => {
  let query = queries.viewStudentSchedule;

  let studentID = req.body.newObj["studentID"];

  console.log("student ID: ", studentID);
  console.log(req.body);

  db.query(query, studentID, (err, result) => {
    res.send(result);
    console.log("Getting student's schedule...");
    console.log(result);
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
