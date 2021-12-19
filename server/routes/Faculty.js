var express = require("express");
router = express.Router();
const cors = require("cors");
const db = require("../database.js");
const { response } = require("express");


router.use(express.json());
router.use(cors());

// Removing query where it's not needed
router.post("/", (req, res) => {
  // Use login.js as a template
  let someBodyProp = "";
});

router.post("/viewCourses", (req, res) => {
  // Use login.js as a template
  
  db.query();
});

router.post("/viewAdvisees", (req, res) => {
  // Use login.js as a template
  let someBodyProp = "";
  db.query();
});

router.post("/viewExamSchedules", (req, res) => {
  // Use login.js as a template
  let someBodyProp = "";
  db.query();
});

router.post("/recordAttendance", (req, res) => {
  // Use login.js as a template
  let someBodyProp = "";
  db.query();
});

router.post("/accessStudentTranscript", (req, res) => {
  // Use login.js as a template
  let someBodyProp = "";
});

router.post("/accessStudentSchedule", (req, res) => {
  // Use login.js as a template
  let someBodyProp = "";
});

router.post("/accessStudentRegistration", (req, res) => {
  // Use login.js as a template
  let someBodyProp = "";
});

router.post("/viewStudentHolds", (req, res) => {
  // Use login.js as a template
  let someBodyProp = "";
});

router.post("/logout", (req, res) => {
  // Use login.js as a template
  let someBodyProp = "";
});

module.exports = router;
