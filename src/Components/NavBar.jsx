import React, { Component } from "react";
import "../styles/NavigationStyles.css";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      /*
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
      */
    };
  }

  doSomething() {
    console.log("doing");
  }

  render() {
    let names = this.props.sideBarOptions.eles;
    console.log(names);
    // Grab the ele array, spit out some buttons
    let eles = names.map((ele) => {
      return (
        <div>
          <a
            class="nav-link"
            id="barBody"
            //data-toggle="pill"
            href="#v-pills-home"
            role="tabpanel"
            //aria-controls="v-pills-home"
            //aria-selected="true"
          >
            {ele}
          </a>
        </div>
      );
    });

    return (
      <div className="Sidebar">
        <div
          className="container"
          id="row"
          role="tablist"
          aria-orientation="vertical"
        >
          <nav class="menu">{eles}</nav>
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
