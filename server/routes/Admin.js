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
  let userID = req.body.userID;
  // AUTO FILL: userID
  db.query(query, [userID], (err, result) => {
    res.send(result);

    console.log("Getting admin info...");
    if (err) {
      console.log(err);
      res.err("Something went wrong admin info.");
    } else {
      console.log("Got info");
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

router.post("/courseSearch", (req, res) => {
  let query = queries.courseSearch;
  // for this query, the entire clause is the variable, with the question mark being a different user input
  // 4 different input fields, CRN, courseID, courseName, and Instructor
  // let whereClause=one of these 4
  // let inputVariable=?
  // finalList.crn = '?';
  // finalList.courseID = '?';
  // finalList.courseName = '%?%'; (percent symbols are wildcards)
  // finalList.Instructor = '%?%';d0
  // These statements can also be combined by concatinating with AND
  
  let needed = { crn: "", courseID: "", courseName: "", Instructor: "" };
  // console.log(req.body.eles);
  let ele = grabVals(checkForNeededProps(req.body.eles, needed));

  let instructor = "John";
  console.log(ele);
  let args = req.body;

  db.query(query, ele, (err, result) => {
    if (err) {
      console.log("Err finding course");
    } else {
      console.log("result course search: ", result);
    }
  });
});
// for this query, the entire clause is the variable, with the question mark being a different user input
// 4 different input fields, CRN, courseID, courseName, and Instructor
// let whereClause=one of these 4
// let inputVariable=?
// finalList.crn = '?';
// finalList.courseID = '?';
// finalList.courseName = '%?%'; (percent symbols are wildcards)
// finalList.Instructor = '%?%';d0
// These statements can also be combined by concatinating with AND

router.post("/createCourse", (req, res) => {
  let query = queries.createCourse;
  //console.log("Body:");
  // console.log(req.body);

  let { courseID, courseName, numCredits, deptID } = req.body;

  // console.log(reqObj);
  console.log("Individual body props:");

  let args = ["12345", "crigne", 3, "D04"];

  db.query(
    "INSERT INTO course(courseID, courseName, numCredits, deptID) VALUES(" +
      "'" +
      courseID +
      "', " +
      "'" +
      courseName +
      "', " +
      "'" +
      numCredits +
      "', " +
      "'" +
      deptID +
      "')",

    (err, result) => {
      if (err) {
        console.log("err");
      } else {
        console.log("nice");
      }
    }
  );
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
  let ele = grabVals(req.body.eles);
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
  let ele = grabVals(req.body.eles);
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
  let ele = grabVals(req.body.eles);
  db.query(query, [courseID], (err, result) => {
    res.send(result);
    console.log("Deleting course...");
    if (err) {
      console.log(err);
      res.err("Something went wrong deleting the course.");
    }
  });
});

router.post("/dropCourse", (req, res) => {
  let query = queries.dropCourse;
  let ele = grabVals(req.body.eles);
  db.query(query, [studentID, crn], (err, result) => {
    res.send(result);
    console.log("Dropping course...");
    if (err) {
      console.log(err);
      res.err("Something went wrong dropping the course.");
    }
  });
});

router.post("/facultyCourseList", (req, res) => {
  let query = queries.facultyCourseList;
  let ele = grabVals(req.body.eles);
  db.query(query, [facultyID, semYear], (err, result) => {
    res.send(result);
    console.log("Getting faculty assignments...");
    if (err) {
      console.log(err);
      res.err("Something went wrong getting faculty assignments.");
    }
  });
});

router.post("/modifyCourse", (req, res) => {
  let query = queries.modifyCourse;
  let ele = grabVals(req.body.eles);
  db.query(query, [courseID, courseName, numCredits, deptID], (err, result) => {
    res.send(result);
    console.log("Modifying course...");
    if (err) {
      console.log(err);
      res.err("Something went wrong modifying the course.");
    }
  });
});

router.post("/modifyUser", (req, res) => {
  let query = queries.modifyUser;
  let ele = grabVals(req.body.eles);
  db.query(query, [firsName, lastName, phoneNumber, DOB, 
                   street, city, state, zip, userID], (err, result) => {
    res.send(result);
    console.log("Modifying user info...");
    if (err) {
      console.log(err);
      res.err("Something went wrong modifying the user.");
    }
  });
  // Parameters above are VALUES for the query, 
  // but there's also a where clause for userID
  // which is REQUIRED for any input
});

router.post("/registerForCourse", (req, res) => {
  let query = queries.registerForCourse;
  let ele = grabVals(req.body.eles);
  db.query(query, [userID, crn], (err, result) => {
    res.send(result);
    console.log("Registering for course...");
    if (err) {
      console.log(err);
      res.err("Something went wrong registering.");
    }
  });
});

router.post("/studentHistory", (req, res) => {
  let query = queries.studentHistory;
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

router.post("/studentLoginInfo", (req, res) => {
  let query = queries.studentLoginInfo;
  let ele = grabVals(req.body.eles);
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
  db.query(query, [studentID, password], (err, result) => {
    res.send(result);
    console.log("Getting transcript...");
    if (err) {
      console.log(err);
      res.err("Something went wrong getting transcript.");
    }
  });
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
  db.query(query, (err, result) => {
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
