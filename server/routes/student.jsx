var express = require("express");
router = express.Router();
const cors = require("cors");
const db = require("../database.js");
const 
const { response } = require("express");

router.use(express.json());
router.use(cors());

router.post("/", (req, res) => {
  // Use login.js as a template
  let someBodyProp = "";

  // home
  db.query();
});

router.post("/viewRegistration", (req, res) => {
  // Use login.js as a template
  let someBodyProp = "";

  // get registration info or something, not sure which table that is
  db.query();
});

router.post("/courseSearch", (req, res) => {
  // Use login.js as a template
  let someBodyProp = "";

 // search for a course
  db.query();
});

router.post("/registerCourse", (req, res) => {
  // Use login.js as a template
  let someBodyProp = "";

  // register course
  db.query();
});

router.post("/dropCourse", (req, res) => {
  // Use login.js as a template
  let someBodyProp = "";

  // Drop a Course (what will I need to access for that?)
  db.query();
});

router.post("/viewHolds", (req, res) => {
  // Use login.js as a template
  let someBodyProp = "";
  
  // Get Holds
  db.query();
});

router.post("/viewTranscript", (req, res) => {
  // Use login.js as a template
  let someBodyProp = "";
  
  // Get transcript 
  db.query();
});

router.post("/degreeAudit", (req, res) => {
  // Use login.js as a template
  
  // Get audit data
  db.query(    );
});

router.post("/viewAdvisor", (req, res) => {
  // Use login.js as a template
  let someBodyProp = "";
  
  db.query();
});

router.post("/logout", (req, res) => {
  // Use login.js as a template
  let someBodyProp = "";
  
  db.query();
});

module.exports = router;
