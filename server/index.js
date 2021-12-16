const { courseSearchQuery } = require("./queries");
const { viewRegQuery } = require("./");
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const loginRoutes = require("./routes/login");
const studentRoutes = require("./routes/student.jsx");
const adminRoutes = require("./routes/admin.jsx");
const facultyRoutes = require("./routes/faculty.jsx");
const researchStaff = require("./routes/researchStaff.jsx");
const masterScheduleRoutes = require("./routes/masterSchedule");
const db = require("./database.js");
const app = express();
const researchStaffRoutes = require("./routes/researchStaff");

app.use(cors());
app.use(express.json());

// Get viewRegQuery from queries
// Get crnSearchQuery from queries
app.use("/login", loginRoutes);
app.use("/masterSchedule", masterScheduleRoutes);
app.use("/researchStaff", researchStaffRoutes);
app.use("/Admin");
app.use("/Faculty");
app.use("/Student");
app.use("/ResearchStaff");

// The four buttons
app.use("Main");

db.connect((err) => {
  if (err) throw err;
  console.log("Connected!");
});

app.post("/courseSearch", (req, res) => {
  console.log(req.body);
  const crn = req.body.crn;

  db.query(
    courseSearchQuery + "WHERE finalList.crn LIKE ?;",
    [crn],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
        res.send(result);
      }
    }
  );
});

app.get("/ViewRegistration", (req, res) => {
  db.query(viewRegQuery, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(3305, () => {
  console.log("Server running: port 3305");
});
