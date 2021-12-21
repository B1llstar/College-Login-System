import React from "react";
import ReactDOM from "react-dom";
import "./bootstrap/css/bootstrap.css";
import "./bootstrap/css/bootstrap.min.css";
import App from "./App";
import "./styles/bodyStyles.css";
import NavBar from "./Components/NavBar";
import Display from "./Components/Display";
import FrontPage from "./FrontPage.jsx";

import MainPagePlaceholder from "./Components/Main_Page_Placeholder";

ReactDOM.render(
  <div>
    {/*    <Display /><NavBar />*/}
    {/*
      <MainPagePlaceholder />
        <App />
      */}
    <App></App>
    {/*<App />*/}
  </div>,
  document.getElementById("root")
);
