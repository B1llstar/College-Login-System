import React from "react";
import ReactDOM from "react-dom";
import "./bootstrap/css/bootstrap.css";
import "./bootstrap/css/bootstrap.min.css";
import App from "./App";
import "./styles/bodyStyles.css";
import NavBar from "./Components/NavBar";

import MainPagePlaceholder from "./Components/Main_Page_Placeholder";

ReactDOM.render(
  <div>
    <NavBar />
    <div className="main">{/*
      <MainPagePlaceholder />
        <App />
      */}
      <App />
      </div>
  </div>,
  document.getElementById("root")
);
