import React, { Component } from "react";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  doSomething() {
    console.log("doing");
  }

  render() {
    return (
      <div className="col-4">
        <nav className="nav flex-column mw-100">
          <a
            className="nav-link active"
            aria-current="page"
            href="#"
            onClick={this.doSomething}
          >
            Login Demo
          </a>
          <a className="nav-link" href="#">
            Link
          </a>
        </nav>
      </div>
    );
    // set height of parent to certain amount of pixels ex 100px
    // children set max-width to 100%, which will just mean 100px maximum
    // since that's the parent width
  }
}

export default NavBar;
