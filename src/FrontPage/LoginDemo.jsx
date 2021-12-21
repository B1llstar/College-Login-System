import React, { Component } from "react";
class loginDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <nav class="nav flex-column">
          <a class="nav-link active" aria-current="page" href="#">
            Login Test
          </a>
          <a class="nav-link" href="#">
            Link
          </a>
          <a class="nav-link" href="#">
            Link
          </a>
          <a
            class="nav-link disabled"
            href="#"
            tabindex="-1"
            aria-disabled="true"
          >
            Disabled
          </a>
        </nav>
      </div>
    );
  }
}

export default loginDemo;
