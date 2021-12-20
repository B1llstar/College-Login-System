import React, { Component } from "react";
import ReactDOM from "react-dom";

class FormTemplate extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  process = (array) => {
    let temp = [];
    array.map((ele) => {
      // Check to see if temp data has a key == array ele'
      // Push tempData key value to an array
      // Push ele, since that's the name of the key
      // Keys are simply properties we will use when making the forms

      temp.push(ele);
      console.log("Found a match");
      // these are the keys
    });

    return temp;
  };

  make = (array) => {
    let eles = [];
    for (let i = 0; i < array.length; i++) {
      console.log("Making element");
      eles.push(
        <div className="col-3">
          <input
            id={array[i]}
            type="text"
            className="form-control"
            placeholder={array[i]}
            onChange={(e) => {
              this.props.tempData[array[i]] = e.target.value;
              this.props.updateParams(array[i], e.target.value); // where array[i] is the current key, and the value is what we'll overwrite the parent state with
              // submit doesn't seem necessary, can use it to bubble up an execute query function, and then use the query in the parent!
              // query method will be a property of the objects describing the navbar
              console.log(this.props.tempData[array[i]]);
            }}
          />
        </div>
      );
    }
    console.log("Check to see if forms were made.");
    return eles;
  };

  render() {
    // The properties used of the forms for that particular button (such as crn, userID etc.)

    let temp = this.process(this.props.fields);
    let eles = this.make(temp);
    return (
      <div className="container-fluid" id="loginFormContainer" max-height="80%">
        <form id="form2">
          <div className="row">{eles}</div>
          <button
            type="submit"
            className="btn btn-primary mt-3"
            onClick={(e) => {
              e.preventDefault();

              this.props.updateParams();
              this.props.relevantQuery();
              // this.props.onAllFormsSubmit(user, pass, userType);
            }}
          >
            Sign in
          </button>
        </form>
      </div>
    );
  }
}

export default FormTemplate;
