var express = require("express");
router = express.Router();
const cors = require("cors");
const db = require("../database.js");
const { response } = require("express");

router.use(express.json());
router.use(cors());

router.post("/", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const userType = req.body.userType;
  var userID = "";
  var firstName = "";

  db.query();
});

module.exports = router;
