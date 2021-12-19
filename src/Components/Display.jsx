import React, { Component } from "react";
import ReactDOM from "react-dom";
import Axios from "axios";
import "../bootstrap/css/bootstrap.css";
import "../bootstrap/css/bootstrap.min.css";
import PostRequest from "./Post_Request_Template";
import QueryHandler from "./Admin/QueryHandler";

import "../styles/bodyStyles.css";
/*
PostRequest({
  username: "smashamlw@neweastbury.edu",
  password: "jSNHlqbS",
  userType: "Student",
});
*/
class Display extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [], tableData: [[]], isShow: false };
    this.makeSomeTables = this.makeSomeTables.bind(this);

    // I've been experimenting w/ different queries
    // basically postrequest can take whatever parameters and whatever
    // path as needed, paths begin as follows http://localhost:3305$PATH
    /*
  query = () => {
    //    Axios.post("http://localhost:3305/masterSchedule", {
    // Axios.post("http://localhost:3305/Admin/", {
    Axios.post("http://localhost:3305/Main/masterSchedule", {}).then(
      (response) => {
        console.log(response);
        // console.log("QUERY!!!!!");
        this.props.obj.data = response.data;
        console.log(PostRequest);
      }
    );
  };

*/
  }

  makeSomeTables = (arr) => {
    this.setState({ data: arr });
    let unique = [];
    let thList = [];
    let counter = 0;
    let result = this.state.data.map((element, index) => {
      let keys = Object.keys(element);
      let tdList = [];

      // grab unique elements
      keys.map((ele) => {
        if (!unique.includes(ele)) {
          unique.push(ele);
        }
      });

      // make data consisting of each property
      // map each unique property into an object map containing elements of property unique
      let tdElements = unique.map((ele, index) => {
        tdList.push(<td>{element[ele]}</td>);

        if (counter < unique.length) {
          thList.push(<th id="dbHead">{unique[index]}</th>);
          counter++;
        }
      });

      return <tr id="dbRow">{tdList}</tr>;
    });

    let ele_ = (
      <table className="table">
        <thead class="thead-dark">
          <tr>{thList}</tr>
        </thead>
        <tbody>{result}</tbody>
      </table>
    );
    ReactDOM.render(
      <div className="main">{ele_}</div>,
      document.getElementById("test2")
    );
    console.log(unique);
  };

  show = () => {
    this.setState({ isShow: true });
  };

  // ten cols
  // 181 rows

  // so apparently the way to do this is with an array
  // then returning a div containing the array inside curly braces []
  // now to implement this in generateTable

  render() {
    // this.query();
    ReactDOM.render(<p>"crigne"</p>, document.getElementById("test2"));
    return (
      <div>
        {/* {() => ReactDOM.render(JSX, document.getElementById("root"))} */}
        {/*<button onClick={() => this.query()}>Click Me</button>*/}

        <QueryHandler
          makeTable={this.makeSomeTables}
          obj={{ data: [] }}
        ></QueryHandler>
        <button onClick={this.makeSomeTables}>View Schedule</button>
        {this.state.isShow && <div></div>}
      </div>
    );
  }
}

export default Display;
