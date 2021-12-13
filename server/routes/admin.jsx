var express = require("express");
router = express.Router();
const cors = require("cors");
const db = require("../database.js");
const { response } = require("express");
const { render } = require("jade");
const iconGetter = require("../getSidebarIcon");

router.use(express.json());
router.use(cors());

let [title, setTitle] = useState({});
let [icon, setIcon] = useState({});
let [link, setLink] = useState({});

router.post("/", (req, res) => {
  // Use login.js as a template
  setIcon(iconGetter("home"));
  db.query();
});

router.post("/viewUsers", (req, res) => {
  // Use login.js as a template
  let someBodyProp = "";
  setIcon(<ViewUsers />);

  db.query();
});

router.post("/createUser", (req, res) => {
  // Use login.js as a template
});

router.post("/modifyUser", (req, res) => {
  // Use login.js as a template
  let someBodyProp = "";

  db.query();
});

router.post("/viewCourses", (req, res) => {
  // Use login.js as a template
  let someBodyProp = "";

  db.query();
});

router.post("/createCourse", (req, res) => {
  // Use login.js as a template
  let someBodyProp = "";

  db.query();
});

router.post("/modifyCourses", (req, res) => {
  // Use login.js as a template
  let someBodyProp = "";

  db.query();
});

router.post("/deleteCourses", (req, res) => {
  // Use login.js as a template
  let someBodyProp = "";

  db.query();
});
module.exports = router;
