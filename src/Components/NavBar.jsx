import React, { Component } from "react";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav: [
        "Home",
        "View Registration",
        "Course Search",
        "Register Course",
        "Drop Course",
        "View Holds",
        "Transcript",
        "Degree Audit",
        "View Advisor",
      ],
    };
  }

  doSomething() {
    console.log("doing");
  }

  render() {
    let eles = this.state.nav.map((ele) => {
      return (
        <a
          class="nav-link"
          id="v-pills-home-tab"
          data-toggle="pill"
          href="#v-pills-home"
          role="tab"
          aria-controls="v-pills-home"
          aria-selected="true"
        >
          {ele}
        </a>
      );
    });

    return (
      <div>
        <div
          class="nav flex-column nav-pills"
          id="v-pills-tab"
          role="tablist"
          aria-orientation="vertical"
        >
          {eles}
        </div>
      </div>
    );
    // set height of parent to certain amount of pixels ex 100px
    // children set max-width to 100%, which will just mean 100px maximum
    // since that's the parent width
  }
}

export default NavBar;

// will make an array of items and then map them to buttons
