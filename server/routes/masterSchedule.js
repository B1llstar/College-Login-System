var express = require("express");
router = express.Router();
const cors = require("cors");
const db = require("../database.js");
const { response } = require("express");
const { Main } = require("../../src/Components/Main/Main");


router.use(express.json());
router.use(cors());

// router.post("/", (req, res) => {
//   db.query(getSchedule, [], (err, result) => {
//     res.send(result);
//     console.log("Made request");
//     if (err) {
//       // res.send({ err: err });
//       console.log(err);
//       res.err("Something went wrong");
//     } else {
//     }
//   });
// });

router.post("/Main/masterSchedule", (req, res) => {
  // Use login.js as a template
  let query = Main.Main.getMasterSchedule;
  db.query(query, [], (err, result) => {
    res.send(result);
    console.log("Made request");
    if (err) {
      console.log(err);
      res.err("Something went wrong");
    } else {
    }
  });
});

module.exports = router;
