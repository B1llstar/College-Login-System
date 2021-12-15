import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <div>
      <h1>Placeholder Main Page (Pre-Login)</h1>
      Login will redirect to appropriate landing page, these buttons won't exist.
    </div>
    <a href='./Student' target='_self'><button>Student</button></a>
    <a href='./Faculty' target='_self'><button>Faculty</button></a>
    <a href='./Admin' target='_self'><button>Admin</button></a>
    <a href='./ResearchStaff' target='_self'><button>Research Staff</button></a>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();