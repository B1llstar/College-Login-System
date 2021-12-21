var express = require("express");
router = express.Router();
const cors = require("cors");
const db = require("../database.js");
const { response } = require("express");
const { getMasterSchedule } = require("../../src/queries/VisitorQueries");
const auth = require("../generateAuth");

router.use(express.json());
router.use(cors());

async function makeAuth() {
  let token = auth.generateAuthToken();
  const storage = require("node-persist");
  await storage.init();
  await storage.setItem("auth", token);
  await console.log("Set auth token to: " + token);
}

router.post("/masterSchedule", (req, res) => {
  db.query(getMasterSchedule, [], (err, result) => {
    res.send(result);
    console.log(result);
    console.log("Made request");
    if (err) {
      // res.send({ err: err });
      console.log(err);
      res.err("Something went wrong");
    } else {
    }
  });
});

router.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const userType = req.body.userType;
  console.log("Kappa");

  let userIDString = "";
  let firstName = "";
  let email = "";
  let userID = 0;

  db.query(
    "SELECT * FROM loginInfo WHERE (userEmail = ? AND password = ?)",
    [username, password],
    (err, result) => {
      console.log(result);
      if (err) {
        // res.send({ err: err });
        console.log(err);
      } else {
        if (result.length > 0) {
          makeAuth();
          // grab first number of userIDString, identifies userType
          // ResearchStaff: 5, Admin: 6, Student: 7, Faculty: 9
          userIDString = result[0].userID.toString().substr(0, 1);
          // bbfirstName = result[0].firstName.toString();
          email = result[0].userEmail;
          userID = result[0].userID;

          console.log(result[0].userEmail);
          console.log("User ID: " + result[0].userID);
          console.log(userType);

          switch (userIDString) {
            case "6": {
              console.log("Success! Logged in as Admin");
              res.send({
                firstName: firstName,
                userType: userType,
                validated: true,
                auth: makeAuth(),
                userID: userID,
                userEmail: email,
                password: password,

                // issue an auth token upon successful login
              });

              break;
            }
            case "9": {
              console.log("Success! Logged in as Faculty.");
              res.send({
                firstName: firstName,
                userType: "Faculty",
                validated: true,
                auth: makeAuth(),
                userID: userID,
                userEmail: email,
                password: password,
              });

              break;
            }

            case "5": {
              console.log("Success! Logged in as Research Staff.");
              res.send({
                firstName: firstName,
                userType: userType,
                validated: true,
                auth: makeAuth(),
                userID: userID,
                userEmail: email,
                password: password,
              });
              break;
            }

            case "7": {
              console.log("Success! Logged in as Student.");
              res.send({
                firstName: firstName,
                userType: userType,
                validated: true,
                auth: makeAuth(),
                userID: userID,
                userEmail: email,
                password: password,
              });
              break;
            }

            default:
              console.log("No cases were satisfied.");
              res.send({
                firstName: firstName,
                userType: userType,
                validated: false,
              });
          }
        } else {
          res.send({ validated: false });
        }
        //  res.send({ validated: false });
      }
    }
  );
});

module.exports = router;
