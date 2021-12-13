var express = require("express");
router = express.Router();
const cors = require("cors");
const db = require("../database.js");
const { response } = require("express");

router.use(express.json());
router.use(cors());

router.post("/", (req, res) => {
  // Use login.js as a template
  let someBodyProp = "";

  db.query();
});

module.exports = router;
