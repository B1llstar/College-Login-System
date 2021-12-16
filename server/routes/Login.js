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
          // grab first number of userID, identifies userType
          // ResearchStaff: 5, Admin: 6, Student: 7, Faculty: 9
          userID = result[0].userID.toString().substr(0, 1);
          // bbfirstName = result[0].firstName.toString();

          console.log(result[0].userEmail);
          console.log(userID);
          switch (userType) {
            case "Admin":
              if (userID === "6") {
                console.log("Success! Logged in as Admin");
                res.send({
                  firstName: firstName,
                  userType: userType,
                  validated: true,
                });
              }
              break;
            case "Faculty":
              if (userID === "9") {
                console.log("Success! Logged in as Faculty.");
                res.send({
                  firstName: firstName,
                  userType: userType,
                  validated: true,
                });
              }
              break;
            case "ResearchStaff":
              if (userID === "5") {
                console.log("Success! Logged in as Research Staff.");
                res.send({
                  firstName: firstName,
                  userType: userType,
                  validated: true,
                });
              }
              break;
            case "Student":
              if (userID === "7") {
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
