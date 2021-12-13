var express = require("express");
router = express.Router();
const cors = require("cors");
const db = require("../database.js");
const getSchedule = require("../../src/queries/getMasterSchedule");

router.use(express.json());
router.use(cors());

router.post("/", (req, res) => {
  db.query(getSchedule, [], (err, result) => {
    res.send(result);
    console.log(result);
    if (err) {
      // res.send({ err: err });
      console.log(err);
      res.err("Something went wrong");
    } else {
    }
  });
});

module.exports = router;
