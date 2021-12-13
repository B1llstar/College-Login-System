var express = require("express");
router = express.Router();
const cors = require("cors");
const db = require("../database.js");
const { response } = require("express");

router.use(express.json());
router.use(cors());

let [title, setTitle] = useState({});
let [icon, setIcon] = useState({});
let [link, setLink] = useState({});
// Removing query where it's not needed
router.post("/", (req, res) => {
  // Use login.js as a template
  let someBodyProp = "";
});

router.post("/viewCourses", (req, res) => {
  // Use login.js as a template
  let someBodyProp = "";
  db.query();
});

router.post("/advisor", (req, res) => {
  // Use login.js as a template
  let someBodyProp = "";
  db.query();
});

router.post("/examSchedules", (req, res) => {
  // Use login.js as a template
  let someBodyProp = "";
  db.query();
});

router.post("/recordAttendance", (req, res) => {
  // Use login.js as a template
  let someBodyProp = "";
  db.query();
});

module.exports = router;
