import React, { Component } from "react";

import ReactDOM from "react-dom";
import "./index.css";
import "./home.css";
import "../bootstrap/css/bootstrap.css";
import "../bootstrap/css/bootstrap.min.css";
import "./buttons.css";
import Header from "./Header";
import BannerImage from "./BannerImage";
import Buttons from "./Buttons";
import LoginForm from "./LoginForm";

class FrontPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Header />
        <BannerImage />
        <Buttons />
        <LoginForm />
      </div>
    );
  }
}

export default FrontPage;
