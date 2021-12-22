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

function replaceQueryQuestionMarkTokens(requestBodyObj, str) {
  let valReplacements = Object.values(requestBodyObj);
  let newString = str;

  valReplacements.map((ele) => {
    if (typeof ele == "number") {
      console.log("Found a number");
      newString = newString.replace("'?'", ele);
    } // may only need to use parseInt on that prop
    // in the route instead, i hope it's that easy
    else newString = newString.replace("?", ele);
  });
  console.log(newString);
  return newString;
}

router.post("/courseSearch", (req, res) => {
  let query = queries.courseSearch;
  let ele = grabVals(req.body.eles);
  db.query(query, [studentID], (err, result) => {
    res.send(result);
    console.log("Getting search results...");
    console.log(result);
    if (err) {
      console.log(err);
      res.err("Something went wrong getting search results.");
    }
  });
});

router.post("/degreeAuditPt1", (req, res) => {
  let query = queries.degreeAuditPt1;
  let newQuery = replaceQueryQuestionMarkTokens(req.body.newObj, query);
  console.log(req.body.newObj);
  db.query(newQuery, (err, result) => {
    if (err) {
      console.log("err");
    } else {
      console.log("nice");
      console.log(result);
    }
  });
});

router.post("/degreeAuditPt2", (req, res) => {
  let query = queries.degreeAuditPt2;
  let newQuery = replaceQueryQuestionMarkTokens(req.body.newObj, query);
  console.log(req.body.newObj);
  db.query(newQuery, (err, result) => {
    if (err) {
      console.log("err");
    } else {
      console.log("nice");
      console.log(result);
    }
  });
});

router.post("/dropCourse", (req, res) => {
  let query = queries.dropCourse;
  let newQuery = replaceQueryQuestionMarkTokens(req.body.newObj, query);
  console.log(req.body.newObj);
  db.query(newQuery, (err, result) => {
    if (err) {
      console.log("err");
    } else {
      console.log("nice");
      console.log(result);
    }
  });
});

router.post("/registerForCourse", (req, res) => {
  let query = queries.registerForCourse;
  let newQuery = replaceQueryQuestionMarkTokens(req.body.newObj, query);
  console.log(req.body.newObj);
  db.query(newQuery, (err, result) => {
    if (err) {
      console.log("err");
    } else {
      console.log("nice");
      console.log(result);
    }
  });
});

router.post("/studentHistory", (req, res) => {
  let query = queries.studentHistory;
  let newQuery = replaceQueryQuestionMarkTokens(req.body.newObj, query);
  console.log(req.body.newObj);
  db.query(newQuery, (err, result) => {
    if (err) {
      console.log("err");
    } else {
      console.log("nice");
      console.log(result);
    }
  });
});

router.post("/transcript", (req, res) => {
  let query = queries.transcript;
  let newQuery = replaceQueryQuestionMarkTokens(req.body.newObj, query);
  console.log(req.body.newObj);
  db.query(newQuery, (err, result) => {
    if (err) {
      console.log("err");
    } else {
      console.log("nice");
      console.log(result);
    }
  });
});

router.post("/updatePassword", (req, res) => {
  let query = queries.updatePassword;
  let newQuery = replaceQueryQuestionMarkTokens(req.body.newObj, query);
  console.log(req.body.newObj);
  db.query(newQuery, (err, result) => {
    if (err) {
      console.log("err");
    } else {
      console.log("nice");
      console.log(result);
    }
  });
});

router.post("/viewAdvisor", (req, res) => {
  let query = queries.viewAdvisor;
  let newQuery = replaceQueryQuestionMarkTokens(req.body.newObj, query);
  console.log(req.body.newObj);
  db.query(newQuery, (err, result) => {
    if (err) {
      console.log("err");
    } else {
      console.log("nice");
      console.log(result);
    }
  });
});

router.post("/viewHolds", (req, res) => {
  let query = queries.viewHolds;
  let newQuery = replaceQueryQuestionMarkTokens(req.body.newObj, query);
  console.log(req.body.newObj);
  db.query(newQuery, (err, result) => {
    if (err) {
      console.log("err");
    } else {
      console.log("nice");
      console.log(result);
    }
  });
});

router.post("/viewRegistration", (req, res) => {
  let query = queries.viewRegistration;
  let newQuery = replaceQueryQuestionMarkTokens(req.body.newObj, query);
  console.log(req.body.newObj);
  db.query(newQuery, (err, result) => {
    if (err) {
      console.log("err");
    } else {
      console.log("nice");
      console.log(result);
    }
  });
});

router.post("/studentLoginInfo", (req, res) => {
  let query = queries.viewStudentLoginInfo;
  let newQuery = replaceQueryQuestionMarkTokens(req.body.newObj, query);
  console.log(req.body.newObj);
  db.query(newQuery, (err, result) => {
    if (err) {
      console.log("err");
    } else {
      console.log("nice");
      console.log(result);
    }
  }); 
});


router.post("/logout", (req, res) => {
  // Use login.js as a template
  let someBodyProp = "";
});

module.exports = router;
