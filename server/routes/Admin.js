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
  let query = queries.adminLoginInfo;
  // AUTO FILL: userID
  db.query(query, [userID], (err, result) => {
    res.send(result);
    console.log("Getting admin info...");
    if (err) {
      console.log(err);
      res.err("Something went wrong admin info.");
    }
  });
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

router.post("/createCourse", (req, res) => {
  let query = queries.createCourse;
  // USER INPUT: All values required, query must fail if any are missing
  // Parameters: courseID- 5 CHAR, courseName- String, credits- single digit INT, deptID- 3 CHAR ('D##')
  // (if we can make deptID a dropdown, I can write a query to pick from existing deptIDs)
});

router.post("/createUser", (req, res) => {
  let query = queries.createUser;
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
  // USER INPUT: courseID - 5 CHAR (format is 2 letters + 3 numbers, but DB will reject if not correct anyway )
});

router.post("/dropCourse", (req, res) => {
  let query = queries.dropCourse;
  // USER INPUT: studentID, crn
  // Parameters: studentID-9 digits INT starting with 7, 5 digit CRN
});

router.post("/facultyCourseList", (req, res) => {
  let query = queries.facultyCourseList;
  // USER INPUT: facultyID
  // USER INPUT: semYear from Drop Down (Optional if time permits)
  db.query(query, [testID], (err, result) => {
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

router.post("/modifyUser", (req, res) => {
  let query = queries.modifyUser;
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
  //USER INPUT: userID, password
});

router.post("/viewAllUsers", (req, res) => {
  let query = queries.viewAllUsers;
  //We should create a user input filter by userID for at least this category
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

router.post("/viewHolds", (req, res) => {
  let query = queries.viewHolds;
  // USER INPUT: if not null, studentID
  // If USER INPUT null, return entire table
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
  // USER INPUT: if not null, studentID
  // If USER INPUT null, return entire table
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
  //If we have time, we can create a user input filter for studentID, but not necessary
  let query = queries.viewStudentAdvisees;
  db.query(query, (err, result) => {
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
  // USER INPUT: studentID
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
