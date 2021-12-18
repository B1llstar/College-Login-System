import React, { Component } from "react";
import QueryHandler from "./QueryHandler";
import "../../styles/NavigationStyles.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav: [
        { name: "Home", onClick: "#" },
        { name: "Course Search", onClick: this.props.courseSearch },
        { name: "Drop Course", onClick: this.props.dropCourse },
        { name: "Degree Audit", onClick: this.props.degreeAudit },
        { name: "Register for Course", onClick: this.props.registerForCourse },
        { name: "Student History", onClick: this.props.studentHistory },
        { name: "Student Login Info", onClick: this.props.studentLoginInfo },

        {
          name: "Unofficial Transcript",
          onClick: this.props.unofficialTranscript,
        },
        { name: "Update Password", onClick: this.props.updatePasswprd },
        { name: "View Advisor", onClick: this.props.viewAdvisor },
        { name: "View Holds", onClick: this.props.viewHolds },
        { name: "View Registration", onClick: this.props.viewHolds },
        { name: "Logout", onClick: "./Logout" }, // some arbitrary location atm
      ],
    };
  }

  doSomething() {
    console.log("doing");
  }

  render() {
    // Grab the ele array, spit out some buttons

    let eles = this.state.nav.map((ele) => {
      return (
        <div>
          <a
            class="nav-link"
            id="barBody"
            //data-toggle="pill"
            // href="#v-pills-home"
            role="tabpanel"
            href="#"
            onClick={ele.onClick}
            //aria-controls="v-pills-home"
            //aria-selected="true"
          >
            {ele.name}
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

export default Home;

// will make an array of items and then map them to buttons
