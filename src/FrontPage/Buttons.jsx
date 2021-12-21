import React, { Component } from "react";
import "./buttons.css";
// or less ideally
import { Button } from "react-bootstrap";

class Buttons extends React.Component {
  render() {
    return (
      <div id="main">
        <div className="buttons">
          <a href="./user/table1.html">
            <Button variant="outline-light" size="lg">
              <h6 className="buttonHeadings">Majors and Programs</h6>
            </Button>{" "}
          </a>
          <Button variant="outline-light" size="lg">
            <h6 className="buttonHeadings">Courses Offered</h6>
          </Button>{" "}
          <Button
            class="btn btn-outline-light"
            variant="outline-light"
            size="lg"
          >
            <h6 className="buttonHeadings">Academic Calendar</h6>
          </Button>{" "}
          <Button variant="outline-light" size="lg">
            <h6 className="buttonHeadings">Master Schedule</h6>
          </Button>{" "}
        </div>
      </div>
    );
  }
}

export default Buttons;
