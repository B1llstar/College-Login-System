var express = require("express");
router = express.Router();
const cors = require("cors");
const db = require("../database.js");
const { response } = require("express");
const storage = require("node-persist");

// probably a better way to do this... f it

router.use(express.json());
router.use(cors());

router.post("/", (req, res) => {});

router.post("/viewAllUsers", (req, res) => {
  // Use login.js as a template
});

router.post("/viewUsers", (req, res) => {
  // Use login.js as a template
  let someBodyProp = "";

  db.query();
});

router.post("/createUser", (req, res) => {
  // Use login.js as a template
});

router.post("/modifyUser", (req, res) => {
  // Use login.js as a template
  let someBodyProp = "";

  db.query();
});

router.post("/viewAllCourses", (req, res) => {
  // Use login.js as a template
  let someBodyProp = "";

  db.query();
});

router.post("/createCourse", (req, res) => {
  // Use login.js as a template
  let someBodyProp = "";

  db.query();
});

router.post("/modifyCourse", (req, res) => {
  // Use login.js as a template
  let someBodyProp = "";

  db.query();
});

router.post("/deleteCourse", (req, res) => {
  // Use login.js as a template
  let someBodyProp = "";

  db.query();
});

router.post("/accessStudentRegistration", (req, res) => {
  // Use login.js as a template
  let someBodyProp = "";

  db.query();
});

router.post("/registerStudentForCourse", (req, res) => {
  // Use login.js as a template
  let someBodyProp = "";

  db.query();
});

router.post("/dropStudentCourse", (req, res) => {
  // Use login.js as a template
  let someBodyProp = "";

  db.query();
});

router.post("/viewStudentHolds", (req, res) => {
  // Use login.js as a template
  let someBodyProp = "";

  db.query();
});

router.post("/viewStudentTranscript", (req, res) => {
  // Use login.js as a template
  let someBodyProp = "";

  db.query();
});

router.post("/viewStudentDegreeAudit", (req, res) => {
  // Use login.js as a template
  let someBodyProp = "";

  db.query();
});

router.post("/viewFacultyThatAreAdvisors", (req, res) => {
  // Use login.js as a template
  let someBodyProp = "";

  db.query();
});

router.post("/modifyMasterSchedule", (req, res) => {
  // Use login.js as a template
  let someBodyProp = "";

  db.query();
});

router.post("/logout", (req, res) => {
  // Use login.js as a template
  let someBodyProp = "";
});
module.exports = router;
