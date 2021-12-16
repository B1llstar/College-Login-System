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

router.post("/viewGradeData", (req, res) => {
  // Use login.js as a template
  let query = userType.ResearchStaff.viewGradeData;
  db.query(query, [], (err, result) => {
    res.send(result);
    // console.log("Result: " + result);
    if (err) {
      console.log(err);
      res.err("Something went wrong");
    } else {
    }
  });
});

router.post("/updatePassword", (req, res) => {
  // Use login.js as a template
  let someBodyProp = "";

  db.query();
});

router.post("/logout", (req, res) => {
  // Use login.js as a template
  let someBodyProp = "";
});

module.exports = router;
