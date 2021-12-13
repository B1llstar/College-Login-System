import React from "react";
import ReactDOM from "react-dom";
import "./bootstrap/css/bootstrap.css";
import "./bootstrap/css/bootstrap.min.css";
import App from "./App";
import NavBar from "./Components/NavBar.jsx";
import MainPagePlaceholder from "./Components/Main_Page_Placeholder";

import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <div>
    <MainPagePlaceholder />
    <App />
  </div>,
  document.getElementById("root")
);
