import React from "react";
import ReactDOM from "react-dom";
import "./bootstrap/css/bootstrap.css";
import "./bootstrap/css/bootstrap.min.css";
import App from "./App";
import NavBar from "./Components/NavBar.jsx";;

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <div>
    <div>
      <h1>Placeholder Main Page (Pre-Login)</h1>
      Login will redirect to appropriate landing page, these buttons won't exist.
    </div>
    <a href='./Student' target='_self'><button>Student</button></a>
    <a href='./Faculty' target='_self'><button>Faculty</button></a>
    <a href='./Admin' target='_self'><button>Admin</button></a>
    <a href='./ResearchStaff' target='_self'><button>Research Staff</button></a>
    <App />
  </div>,
  document.getElementById('root')
);
