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

router.post("/courseSearch", (req, res) => {});

router.post("/degreeAudit", (req, res) => {
  db.query();
});
router.post("/dropCourse", (req, res) => {
  db.query();
});

router.post("/getDegreeAuditCoursesTakenP1", (req, res) => {
  // Use login.js as a template
});

router.post("/getDegreeAuditCoursesTakenP2", (req, res) => {
  // Use login.js as a template
});

router.post("/getStudentLoginInfo", (req, res) => {
  // Use login.js as a template
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

router.post("/registerForCourse", (req, res) => {
  db.query();
});

router.post("/viewHolds", (req, res) => {
  db.query();
});

router.post("/updatePassword", (req, res) => {
  // Use login.js as a template
});

router.post("/viewAdvisor", (req, res) => {
  db.query();
});

router.post("/viewRegistration", (req, res) => {
  // Use login.js as a template
});

router.post("/logout", (req, res) => {
  // Use login.js as a template
  let someBodyProp = "";
});
module.exports = router;
