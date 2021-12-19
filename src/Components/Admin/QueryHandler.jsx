import React, { Component } from "react";
import NavBar from "../NavBar";
class QueryHandler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: <NavBar userType={this.props.userType}></NavBar>,
    };
  }
  render() {
    return <div></div>;
  }
}

export default QueryHandler;
