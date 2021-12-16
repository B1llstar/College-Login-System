const { courseSearchQuery } = require("./queries");
const { viewRegQuery } = require("./");

const express = require("express");
const cors = require("cors");

const db = require("./database.js");
const app = express();

const researchStaffRoutes = require("./routes/ResearchStaff");
const studentRoutes = require("./routes/Student.js");
const adminRoutes = require("./routes/Admin.js");
const facultyRoutes = require("./routes/Faculty.js");
const mainRoutes = require("./routes/Main.js");

app.use(cors());
app.use(express.json());

// The four buttons
app.use("/Main", mainRoutes);

// User Types & their respective navigation
// These will lead to their individual home pages
app.use("/Admin", adminRoutes);
app.use("/Faculty", facultyRoutes);
app.use("/Student", studentRoutes);
app.use("/ResearchStaff", researchStaffRoutes);

db.connect((err) => {
  if (err) throw err;
  console.log("Connected!");
});

app.listen(3305, () => {
  console.log("Server running: port 3305");
});

/* // This post & this get are what Chris had used
// Pay attention to parameters, I'm rebuilding this
// whole page but that all may be useful later

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

*/
