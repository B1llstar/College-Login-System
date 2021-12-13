const express = require("express");
const cors = require("cors");
const loginRoutes = require("./routes/login");
const masterScheduleRoutes = require("./routes/masterSchedule");
const db = require("./database.js");
const app = express();

app.use(cors());
app.use(express.json());

app.use("/login", loginRoutes);
app.use("/masterSchedule", masterScheduleRoutes);

db.connect((err) => {
  if (err) throw err;
  console.log("Connected!");
});

app.listen(3002, () => {
  console.log("Server is running!");
});
