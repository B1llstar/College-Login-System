var express = require("express");
router = express.Router();
const cors = require("cors");
const db = require("../database.js");
const { response } = require("express");
const userType = require("../../src/Components/ResearchStaff/ResearchStaff");
const { viewGradeData } = require("../../src/queries/Queries_Master.js");
// used usertype here since ResearchStaff.ResearchStaff
// looked weird

router.use(express.json());
router.use(cors());

router.post("/", (req, res) => {
  // Use login.js as a template
});

router.post("/viewRegistration", (req, res) => {
  // Use login.js as a template
});

router.post("/courseSearch", (req, res) => {});

router.post("/registerForCourse", (req, res) => {
  db.query();
});

router.post("/dropCourse", (req, res) => {
  db.query();
});

router.post("/viewHolds", (req, res) => {
  db.query();
});

router.post("/getUnofficialTranscript", (req, res) => {
  db.query();
});

router.post("/degreeAudit", (req, res) => {
  db.query();
});

router.post("/viewAdvisor", (req, res) => {
  db.query();
});

router.post("/logout", (req, res) => {
  // Use login.js as a template
  let someBodyProp = "";
});
module.exports = router;
