import React, { Component } from "react";
import ReactDOM from "react-dom";

class DynamicForms extends Component {
  constructor(props) {
    super(props);
    this.state = { fields: [] };
  }

  makeFields = (fields) => {
    let eles = [];
    let col = 12 % fields.length; // modulo actually coming in handy
    // dynamically create column length based on amt. fields
    let colString = col.toString();
    colString = "form-group " + colString;
    fields.map((ele, index) => {
      if (fields.length % 2 == 0) {
        eles.push(
          <input
            id={fields[index]}
            onChange={(e) => {
              fields[index] = e.target.value;
              console.log(fields[index]);
            }}
            placeholder={fields[index]}
          ></input>
        );
      } else {
        <input
          id={fields[index]}
          onChange={(e) => {
            fields[index] = e.target.value;
            console.log(fields[index]);
          }}
          placeholder={fields[index]}
        ></input>;
      }
    });

    return eles;
  };

  render() {
    return (
      <div className="container-fluid" id="loginFormContainer" max-height="80%">
        <form>{this.makeFields(this.props.fields)}</form>
      </div>
    );
  }
}

export default DynamicForms;
