import React, { Component } from "react";
import ReactDOM from "react-dom";

class MainPagePlaceholder extends React.Component {
  render() {
    return (
      <div>
        <h1>Placeholder Main Page (Pre-Login)</h1>
        Login will redirect to appropriate landing page, these buttons won't
        exist.
        <a href="./Student" target="_self">
          <button>Student</button>
        </a>
        <a href="./Faculty" target="_self">
          <button>Faculty</button>
        </a>
        <a href="./Admin" target="_self">
          <button>Admin</button>
        </a>
        <a href="./ResearchStaff" target="_self">
          <button>Research Staff</button>
        </a>
      </div>
    );
  }
}

export default MainPagePlaceholder;
