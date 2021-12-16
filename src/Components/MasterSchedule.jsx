import React, { Component } from "react";
import ReactDOM from "react-dom";
import Axios from "axios";
import "../bootstrap/css/bootstrap.css";
import "../bootstrap/css/bootstrap.min.css";

class MasterSchedule extends Component {
  constructor(props) {
    super(props);
    this.state = { scheduleData: [], tableData: [[]], isShow: false };
  }

  query = () => {
    //    Axios.post("http://localhost:3305/masterSchedule", {
    Axios.post("http://localhost:3305/researchStaff/viewGradeData", {
      // username: user,
      // password: pass,
      // userType: userType,
    }).then((response) => {
      console.log(response);
      console.log("QUERY!!!!!");
      this.props.obj.data = response.data;

      // console.log(this.props.obj.arrData);
      // console.log(this.props.obj.data);
      //  console.log(this.props.obj.data);
      //  let crigne = <div>{this.makeNewData(this.props.obj.data)}</div>;
      // console.log(crigne.props.children[0]);
      // let element = React.createElement("div", {}, crigne);
      // this.state.scheduleData = crigne;
      let nums = [2, 3, 4];
      let nums2 = [<p>kappa</p>, <p>gay</p>];
      let list = [];
      // list = nums2.map((ele) => ele + 1);
      nums2.push(<h1>crigne</h1>);

      //  let kappa = React.createElement("div", {}, kappa);
      // console.log(kappa);
      /*
      ReactDOM.render(
        <div>
          <h1>{crigne.props.children[0]}</h1>
        </div>,
        document.getElementById("test2")
      );*/

      // using data[0] gives the first index, but scheduleData[0] gives me all of them?? who knows

      /*
      for (let i = 0; i < 10; i++) {
        // ReactDOM.render(<h1>Gay</h1>, document.getElementById("root"));
      }
      */

      // console.log(response
    });
  };

  makeSomeTables = () => {
    console.log(this.props.obj.data);
    let result = this.props.obj.data.map((element, index) => {
      return (
        <tr>
          <th scope="row">{index + 1}</th>
          <td>{element["CRN Number"]}</td>
          <td>{element["Course Days"]}</td>
          <td>{element["Course ID"]}</td>
          <td>{element["Course Time"]}</td>
          <td>{element["Course Title"]}</td>
          <td>{element["Credits"]}</td>
          <td>{element["Dept Name"]}</td>
          <td>{element["Instructor"]}</td>
          <td>{element["Room"]}</td>
          <td>{element["Semester"]}</td>
        </tr>
      );
    });

    let ele_ = (
      <table className="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">CRN Number</th>
            <th scope="col">Course Days</th>
            <th scope="col">Course ID</th>
            <th scope="col">Course Time</th>
            <th scope="col">Course Title</th>
            <th scope="col">Credits</th>
            <th scope="col">Dept. Name</th>
            <th scope="col">Instructor</th>
            <th scope="col">Room</th>
            <th scope="col">Semester</th>
          </tr>
        </thead>
        <tbody>{result}</tbody>
      </table>
    );
    ReactDOM.render(<div>{ele_}</div>, document.getElementById("test2"));
    // ReactDOM.render(<div>{result}</div>, document.getElementById("test2"));
  };

  /*
    return (
      <div>
        {elements.map((el, index) =>
          React.createElement(el, { key: index }, "hello")
        )}
      </div>
    );
    */

  chunk = (array, size) => {
    let chunkedArray = [];
    let index = 0;
    while (index < array.length) {
      chunkedArray.push(array.slice(index, size + index));
      index += size;
    }

    return chunkedArray;
  };

  getOneRow = () => {
    let numCells = 8;
  };

  makeNewData = (arr) => {
    let elements2 = [
      "CRN Number",
      "Course Days",
      "Course ID",
      "Course Time",
      "Course Title",
      "Credits",
      "Dept Name",
      "Instructor",
      "Room",
      "Semester",
    ];

    let temp = [];

    let eles = [];
    let elesWithRows = [];

    // console.log(this.props.obj.data);
    let prev = 0;
    let nums = [1, 2, 3, 4];
    let list = {};
    let mapped = [];
    // list = nums.map((ele) => ele + 1);
    // console.log(list);
    for (let x = 0; x < 8; x++) {
      let tempArr = arr.slice(prev, prev + 8);
      eles.push(
        <td>
          {tempArr.map((ele, index) => {
            return ele[elements2[index]];
          })}
        </td>
      );

      mapped = tempArr.map((ele, index, list) => <tr>{ele}</tr>);
      list[x] = mapped;
      prev += 8;

      for (let y = 0; y < 181; y++) {
        elesWithRows.push(<tr>{tempArr[y]}</tr>);
      }
    }
    console.log(mapped[0]);
    return React.createElement("div", {}, { mapped });
    // return elesWithRows[0];
  };

  makeNewCells = () => {
    //  console.log("Running");
    let temp = this.props.obj.data;

    let eles = [];

    for (let i = 0; i < 10; i++) eles.push(<tr>{this.makeNewData()}</tr>);
    return <div>{eles}</div>;
  };
  /*
  Test = (props) => {
    let elements = ["div", "span", "button"];
    let elements2 = [
      "CRN Number",
      "Course Days",
      "Course ID",
      "Course Time",
      "Course Title",
      "Credits",
      "Dept Name",
      "Instructor",
      "Room",
      "Semester",
    ];

    var tempData = this.props.obj.data;

    let rows = [];

    return (
      <div>
        /*
        {tempData.map((el, index) =>
          React.createElement(
            "tr",
            { key: index },
            // el.masterSchedule[0]["Credits"]
            el.scheduleData[0][elements2[index]]
          )
        )}
        }
      </div>
    );
  };
*/

  chunk(array, size) {
    const chunkedArray = [];
    let index = 0;
    while (index < array.length) {
      chunkedArray.push(array.slice(index, size + index));
      index += size;
    }
    return chunkedArray;
  }
  show = () => {
    this.setState({ isShow: true });
  };

  generateTable = () => {
    this.query();

    return (
      <div>
        {/* this doesn't work, not sure why
        keeping it for future reference
          {() => {
            ReactDOM.render(<h1>Test</h1>);
          }}*/}
        <table>
          <tbody>{}</tbody>
        </table>
        <table>
          <tbody></tbody>
        </table>
      </div>
    );
  };

  click = () => {
    let ele = this.makeNewData(this.props.obj.data);
    ReactDOM.render(ele, document.getElementById("root"));
  };

  makeRows = () => {
    this.query();

    var tempData = this.props.obj.data;

    let tableData = [];
    let tableData_ = [];

    for (let i = 0; i < 181; i++) {
      tableData.push(
        <tr>
          {() => {
            for (let x = 0; x < 10; x++) {
              tableData_.push(
                <td key={x}>
                  {() => {
                    tempData.map((element) => {
                      console.log(element);
                      return Object.values(
                        element.masterSchedule[0]["Credits"]
                      );
                    });
                  }}
                </td>
              );
            }
            return tableData_;
          }}
        </tr>
      );
    }
    let table = (
      <div>
        <table>
          <tbody>{tableData}</tbody>
        </table>
      </div>
    );

    this.props.obj.data.map((element) => {
      Object.values(element.masterSchedule[0]["Credits"]);
    });

    return (
      <div>
        <table>
          <tbody>{tableData}</tbody>
        </table>
      </div>
    );
  };

  generateTableTwo = () => {
    this.props.obj.data.map((element) => {
      return <h1>Gay</h1>;
    });
  };
  showData = () => {
    console.log(this.props.obj.data);
  };

  do = () => {
    ReactDOM.render(
      <div>{this.state.scheduleData}</div>,
      document.getElementById("test2")
    );
  };
  // ten cols
  // 181 rows

  // so apparently the way to do this is with an array
  // then returning a div containing the array inside curly braces []
  // now to implement this in generateTable
  addStuff = () => {
    const stuff = [];
    for (let i = 0; i < 10; i++) {
      stuff.push(<p>Hi</p>);
    }
    return <div>{stuff}</div>;
  };
  render() {
    this.query();
    ReactDOM.render(<p>"crigne"</p>, document.getElementById("test2"));
    return (
      <div>
        {/* {() => ReactDOM.render(JSX, document.getElementById("root"))} */}
        {/*<button onClick={() => this.query()}>Click Me</button>*/}

        <button onClick={() => this.query()}>Click Me</button>
        <button
          onClick={() => {
            /* ReactDOM.render(JSX, document.getElementById("test")) */
          }}
        >
          Test
        </button>
        <button onClick={this.makeSomeTables}>View Schedule</button>
        {this.state.isShow && <div></div>}
      </div>
    );
  }
}

export default MasterSchedule;
