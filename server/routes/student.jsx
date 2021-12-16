var express = require("express");
router = express.Router();
const cors = require("cors");
const db = require("../database.js");
const { response } = require("express");

router.use(express.json());
router.use(cors());

// There's probably a better way to make these routes
// but I'm just gonna hard code them in based on the class
// Maybe this is better in a way since it's more clear? IDK

router.post("/", (req, res) => {
  // Use login.js as a template
  let someBodyProp = "";

  // home
  db.query();
});

router.post("/getStudentLoginInfo", (req, res) => {
  // Use login.js as a template
  let someBodyProp = "";

  // get registration info or something, not sure which table that is
  db.query();
});

router.post("/getStudentAssignedFacultyAdvisor", (req, res) => {
  // Use login.js as a template
  let someBodyProp = "";

  // search for a course
  db.query();
});

router.post("/updatePassword", (req, res) => {
  // Use login.js as a template
  let someBodyProp = "";

  // register course
  db.query();
});

router.post("/getStudentHistory", (req, res) => {
  // Use login.js as a template
  let someBodyProp = "";

  // Drop a Course (what will I need to access for that?)
  db.query();
});

router.post("/getStudentHolds", (req, res) => {
  // Use login.js as a template
  let someBodyProp = "";

  // Get Holds
  db.query();
});

router.post("/logout", (req, res) => {
  // Use login.js as a template
  let someBodyProp = "";

  db.query();
});

module.exports = router;
