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

// NOTE: Whenever inserting something, first use parseInt to change the
// value of that particular property from a string to an Int
// that way the query string will remove the quotes around the int.
// TEMPLATE FOR INSERTS: -----------------
/*
  let query = queries.createCourse;
  let newQuery = replaceQueryQuestionMarkTokens(req.body.newObj, query); PUT THIS BEFORE DB. QUERY, THAT'S IT!
*/
// ---------------------

// TEMPLATE FOR SELECTS (this should work even if you have optional parameters, query handler gives them empty strings.)
/*
 let { userEmail, password } = req.body.newObj; -- FIRST DECONSTRUCT THE NEEDED PROPERTIES
  db.query( 
    "SELECT * FROM loginInfo WHERE (userEmail = ? AND password = ?)",
     [userEmail, password], -------------- THEN PASS THEM AS PARAMETERS WITHIN THE SQUARE BRACES.
    (err, result) => { 
*/

// TEMPLATE FOR SELECTS

router.post("/testLogin", (req, res) => {
  let { userEmail, password } = req.body.newObj;
  db.query(
    "SELECT * FROM loginInfo WHERE (userEmail = ? AND password = ?)",
    [userEmail, password],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
        if (result.length > 0) {
          // maybe testing the length could be a good litmus test for all the others?
          console.log("Logged in as ", result[0].userType); // looks like we need to access the first index THEN grab property
        } else {
          console.log("Incorrect info!!");
        }
      }
    }
  );
});

router.post("/adminLoginInfo", (req, res) => {
  let query = queries.adminLoginInfo;
  let userID = req.body.newObj["userID"];
  console.log(userID);
  // AUTO FILL: userID
  db.query(query, userID, (err, result) => {
    res.send(result);
    console.log("Getting admin info...");
    if (err) {
      console.log(err);
      // res.err("(ADMIN) Failed to get login info");
    } else {
      console.log("Got info: ", result);
    }
  });
});

function checkForNeededProps(first_, toBePassed) {
  let first = first_;
  let passed = toBePassed;
  let vals = Object.values("first");
  let eles = {};
  for (const prop in first) {
    if (prop in passed) eles[prop] = toBePassed[prop];
  }
  return eles;
}

function grabVals(input) {
  let ele = [];
  ele = Object.values(input);
  return ele;
}

// SELECT
router.post("/courseSearch", (req, res) => {
  let query = queries.courseSearch;

  let { crn } = req.body.newObj;

  console.log("crn ", crn);
  console.log(req.body);

  db.query(query, [parseInt(crn)], (err, result) => {
    if (err) {
      console.log("Err finding course");
    } else {
      console.log("Result of course search: ", result);
    }
  });
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

// TEMPLATE FOR INSERTS: -----------------
/*
  let query = queries.createCourse;
  let newQuery = replaceQueryQuestionMarkTokens(req.body.newObj, query); PUT THIS BEFORE DB. QUERY, THAT'S IT!
*/
// ---------------------

// TEMPLATE FOR INSERTS
router.post("/createCourse", (req, res) => {
  let query = queries.createCourse;
  let newQuery = replaceQueryQuestionMarkTokens(req.body.newObj, query);
  console.log(req.body.newObj);
  db.query(newQuery, (err, result) => {
    if (err) {
      console.log("err");
    } else {
      console.log("nice");
    }
  });
});

router.post("/createUser", (req, res) => {
  let query = queries.createUser;
  let newQuery = replaceQueryQuestionMarkTokens(req.body.newObj, query);

  db.query(newQuery, (err, result) => {
    if (err) {
      console.log("err");
    } else {
      console.log("nice");
    }
  });
  // USER INPUT: All values required, query must fail if any are missing
  // Parameters: userID-9 digits INT, userType-dropdown selection, first/last - String
  // phoneNumber-10 digits no spaces/dashes, DOB- YYYY-MM-DD, street/city - String, zip-5 digit INT
});

router.post("/degreeAuditPt1", (req, res) => {
  let query = queries.degreeAuditPt1;
  //USER INPUT = studentID;
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
  //USER INPUT = studentID;
  db.query(query, [studentID], (err, result) => {
    res.send(result);
    console.log("Getting degree audit pt2...");
    if (err) {
      console.log(err);
      res.err("Something went wrong getting degree audit.");
    }
  });
});

router.post("/deleteCourse", (req, res) => {
  let query = queries.deleteCourse;

  let newQuery = replaceQueryQuestionMarkTokens(req.body.newObj, query);

  db.query(newQuery, (err, result) => {
    if (err) {
      console.log("err");
    } else {
      console.log("Deleted course");
      console.log(result);
    }
  });
  // USER INPUT: courseID - 5 CHAR (format is 2 letters + 3 numbers, but DB will reject if not correct anyway )
});

router.post("/dropCourse", (req, res) => {
  let query = queries.dropCourse;
  console.log(req.body.newObj);
  // check the order that they appear in the query
  //let newQuery = replaceQueryQuestionMarkTokens(req.body.newObj, query);

  db.query(newQuery, (err, result) => {
    if (err) {
      console.log("err");
    } else {
      console.log("Dropped course", result);
    }
  });
  // USER INPUT: studentID, crn
  // Parameters: studentID-9 digits INT starting with 7, 5 digit CRN
});

router.post("/facultyCourseList", (req, res) => {
  let query = queries.facultyCourseList;
  // USER INPUT: facultyID
  // USER INPUT: semYear from Drop Down (Optional if time permits)
  db.query(query, [facultyID], (err, result) => {
    res.send(result);
    console.log("Getting courses...");
    if (err) {
      console.log(err);
      res.err("Something went wrong getting courses.");
    }
  });
});

router.post("/modifyCourse", (req, res) => {
  let query = queries.modifyCourse;
  // USER INPUT: each variable for SET condition is optional, if a field is blank it should be removed from the query
  // Parameters: courseID- 5 CHAR, courseName- String, credits- single digit INT, deptID- 3 CHAR ('D##')
});

// SO - if there are optional parameters, set the parameters in the
// appropriate order when passing them through generateObjectWithNeededPropertiesOnly in QueryHandler
router.post("/modifyUser", (req, res) => {
  let query = queries.modifyUser;
  req.body.newObj["userID"] = parseInt(req.body.newObj["userID"]);
  console.log(typeof req.body.newObj["userID"]);
  let newQuery = replaceQueryQuestionMarkTokens(req.body.newObj, query);

  console.log(newQuery);
  console.log(Object.keys(req.body.newObj)); // order of props appears to be
  // faithful to query handler
  db.query(newQuery, (err, result) => {
    if (err) {
      console.log("err");
    } else {
      console.log("Modified user:", result);
    }
  });
  // OPTIONAL USER INPUTS: each variable for SET is optional, if a field is blank it should be removed from the query
  // SET Parameters: firstName='String', lastName='String', phoneNumber='10 digits no spaces/dashes', DOB='YYYY-MM-DD', street='String' city='String', zip='5 digit INT'
  // REQUIRED USER INPUT: userID gets inserted WHERE clause
});

router.post("/registerForCourse", (req, res) => {
  let query = queries.registerForCourse;
  // USER INPUT: studentID, crn
  // Parameters: studentID-9 digits INT starting with 7, 5 digit CRN
});

router.post("/studentHistory", (req, res) => {
  let query = queries.studentHistory;
  //USER INPUT = studentID;
  db.query(query, [studentID], (err, result) => {
    res.send(result);
    console.log("Getting student history...");
    if (err) {
      console.log(err);
      res.err("Something went wrong getting student history.");
    }
  });
});

router.post("/studentLoginInfo", (req, res) => {
  let query = queries.studentLoginInfo;
  //USER INPUT = studentID;
  db.query(query, [studentID], (err, result) => {
    res.send(result);
    console.log("Getting student login info...");
    if (err) {
      console.log(err);
      res.err("Something went wrong getting student login info.");
    }
  });
});

router.post("/transcript", (req, res) => {
  let query = queries.transcript;
  //USER INPUT = studentID;
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
  //input order: password, userID
  let newQuery = replaceQueryQuestionMarkTokens(req.body.newObj, query);
  console.log(req.body.newObj);
  db.query(newQuery, (err, result) => {
    if (err) {
      console.log("err");
    } else {
      console.log("nice");
    }
  });
});

router.post("/viewAllUsers", (req, res) => {
  let query = queries.viewAllUsers;
  //no query input
  db.query(query, (err, result) => {
    res.send(result);
    console.log("Getting full user list...");
    if (err) {
      console.log(err);
      res.err("Something went wrong getting users.");
    }
  });
});

router.post("/viewCourseHistory", (req, res) => {
  //If we have time, we can create user input filters for courseID and semYear, but not necessary
  let query = queries.viewCourseHistory;
  //no query input
  db.query(query, (err, result) => {
    res.send(result);
    console.log("Getting course history...");
    if (err) {
      console.log(err);
      res.err("Something went wrong getting course history.");
    }
  });
});

router.post("/viewFacultyAdvisors", (req, res) => {
  //If we have time, we can create a user input filter for facultyID, but not necessary
  let query = queries.viewFacultyAdvisors;
  //no query input
  db.query(query,  (err, result) => {
    res.send(result);
    console.log("Getting advisors list...");
    if (err) {
      console.log(err);
      res.err("Something went wrong getting advisors.");
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
    if (err) {
      console.log(err);
      res.err("Something went wrong getting registration.");
    }
  });
});

router.post("/viewStudentAdvisees", (req, res) => {
  //If we have time, we can create a user input filter for studentID, but not necessary
  let query = queries.viewStudentAdvisees;

  db.query(query, studentID, (err, result) => {
    res.send(result);
    console.log("Getting advisees list...");
    if (err) {
      console.log(err);
      res.err("Something went wrong getting advisees.");
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
