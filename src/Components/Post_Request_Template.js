import Axios from "axios";
const storage = require("node-persist"); // storing thes ession data

export default function postRequest(args, auth) {
  Axios.post("http://localhost:3305/Main/login", {
    username: args.username,
    password: args.password,
    userType: args.userType,
  }).then((response) => {
    console.log("fail");
    if (response.data.validated) {
    } else {
      console.log("fail");
    }
  });
}
