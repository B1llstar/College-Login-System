var express = require("express");
router = express.Router();
const cors = require("cors");
const db = require("../database.js");
const { response } = require("express");

router.use(express.json());
router.use(cors());

router.post("/", (req, res) => {
  const username = req.body.args.username;
  const password = req.body.args.password;
  const userType = req.body.args.userType;
  console.log("Kappa" + username);
  console.log("weirdchamp");
  var userID = "";
  var firstName = "";

  db.query(
    "SELECT * FROM loginInfo WHERE (userEmail = ? AND password = ? AND userType ?)",
    [username, password, userType],
    (err, result) => {
      console.log(result);
      if (err) {
        // res.send({ err: err });
        console.log(err);
      } else {
        if (result.length > 0) {
          // grab first number of userID, identifies userType
          // ResearchStaff: 5, Admin: 6, Student: 7, Faculty: 9
          userID = result[0].userID.toString().substr(0, 1);
          userType = result[2];
          // bbfirstName = result[0].firstName.toString();

          console.log(result[0].userEmail);
          console.log(userID);
          switch (userID) {
            case "6":
              if (userType === "Admin") {
                console.log("Success! Logged in as Admin");
                res.send({
                  firstName: firstName,
                  userType: userType,
                  validated: true,
                });
              }
              break;
            case "9":
              if (userType === "Faculty") {
                console.log("Success! Logged in as Faculty.");
                res.send({
                  firstName: firstName,
                  userType: userType,
                  validated: true,
                });
              }
              break;
            case "5":
              if (userType === "ResearchStaff") {
                console.log("Success! Logged in as Research Staff.");
                res.send({
                  firstName: firstName,
                  userType: userType,
                  validated: true,
                });
              }
              break;
            case "7":
              if (userType === "Student") {
                console.log("Success! Logged in as Student.");
                res.send({
                  firstName: firstName,
                  userType: userType,
                  validated: true,
                });
              }
              break;
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
