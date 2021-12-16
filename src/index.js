import React from "react";
import ReactDOM from "react-dom";
import "./bootstrap/css/bootstrap.css";
import "./bootstrap/css/bootstrap.min.css";
import App from "./App";
import AdminApp from "./Components/Navigation/App";
import NavBar from "./Components/NavBar";

import MainPagePlaceholder from "./Components/Main_Page_Placeholder";

ReactDOM.render(
  <div>
    {/*
    <MainPagePlaceholder />
       <App />
    */}
    <NavBar />
  </div>,
  document.getElementById("root")
);
