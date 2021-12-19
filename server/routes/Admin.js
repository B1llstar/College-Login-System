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
"View All Users",
  router.post("/viewAllUsers", (req, res) => {
    // Use login.js as a template
  });

router.post("/accessStudentRegistration", (req, res) => {});
router.post("/createCourse", (req, res) => {});
router.post("/createUser", (req, res) => {});
router.post("/deleteCourse", (req, res) => {});
router.post("/dropStudentCourse", (req, res) => {});
router.post("/logout", (req, res) => {});
router.post("/modifyCourse", (req, res) => {});
router.post("/modifyMasterSchedule", (req, res) => {});
router.post("/modifyUser", (req, res) => {});
router.post("/registerStudentForCourse", (req, res) => {});
router.post("/viewAllCourses", (req, res) => {});
router.post("/viewFacultyThatAreAdvisors", (req, res) => {});
router.post("/viewStudentDegreeAudit", (req, res) => {});
router.post("/viewStudentHolds", (req, res) => {});
router.post("/viewStudentTranscript", (req, res) => {});

router.post("/logout", (req, res) => {
  // Use login.js as a template
  let someBodyProp = "";
});
module.exports = router;
