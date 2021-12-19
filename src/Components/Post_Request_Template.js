import Axios from "axios";
import makeSomeTables from "../MakeTable.jsx";
import MakeTable from "../MakeTable.jsx";
const storage = require("node-persist"); // storing thes ession data

export default function postRequest(args) {
  let _path = "http://localhost:3305".concat(args.path);
  let keys = Object.keys(args);
  let kappa = "";
  keys.map((ele) => {
    kappa = ele;
  });

  Axios.post(_path, {
    args: args,
  }).then((response) => {
    console.log(response);
    //  let data = makeSomeTables(response);

    if (response.data.validated) {
      console.log("gottem");
    } else {
      console.log("fail");
    }
  });
}
