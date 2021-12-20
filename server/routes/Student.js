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
  let ele = grabVals(req.body.eles);
  db.query(query, [studentID], (err, result) => {
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

router.post("/dropCourse", (req, res) => {
  let query = queries.dropCourse;
  let ele = grabVals(req.body.eles);
  console.log(ele);
  db.query(query, ele, (err, result) => {
      if (err) {
        console.log(err, "Problem with dropping course");
      } else {
        console.log("Course Dropped");
      }
    }
  );
});

router.post("/registerForCourse", (req, res) => {
  let query = queries.registerForCourse;
  let ele = grabVals(req.body.eles);
  console.log(ele);
  db.query(query, ele, (err, result) => {
      if (err) {
        console.log(err, "Problem with registering for course");
      } else {
        console.log("Successfully registered course");
      }
    }
  );
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
  console.log(ele);
  db.query(query, ele, (err, result) => {
      if (err) {
        console.log(err, "Problem updating password");
      } else {
        console.log("Successfully registered course");
      }
    }
  );
});

router.post("/viewAdvisor", (req, res) => {
  let query = queries.viewAdvisor;
  let ele = grabVals(req.body.eles);
  db.query(query, [studentID], (err, result) => {
    res.send(result);
    console.log("Getting advisor info...");
    if (err) {
      console.log(err);
      res.err("Something went wrong getting advisor info.");
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

router.post("/viewStudentLoginInfo", (req, res) => {
  let query = queries.viewStudentLoginInfo;
  let studentID = this.props.userCredentials.userID;
  db.query(query, [studentID], (err, result) => {
    res.send(result);
    console.log("Getting user info...");
    if (err) {
      console.log(err);
      res.err("Something went wrong getting student info.");
    }
  });
});


router.post("/logout", (req, res) => {
  // Use login.js as a template
  let someBodyProp = "";
});
module.exports = router;
