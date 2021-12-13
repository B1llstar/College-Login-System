import React, { Component } from "react";

const makeRequest = function () {};

const navToSidebarRoute = function (ele) {
  const [state, setState] = useState({ sidebarArray: ele });
  let div = <div></div>;

  return state.map((ele, index) => {
    return <li key={index} className="row"></li>;
  });
};
