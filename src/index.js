import React from "react";
import ReactDOM from "react-dom";

import "./bootstrap/css/bootstrap.css";
import "./bootstrap/css/bootstrap.min.css";
import App from "./App";
import NavBar from "./Components/NavBar.jsx";

ReactDOM.render(
  <div>
    <App />

    {/*
    <HomePage />
    <BannerImage />
    <Buttons />
    <LoginForm />
    </div>,
      */}
  </div>,

  document.getElementById("test")
);
