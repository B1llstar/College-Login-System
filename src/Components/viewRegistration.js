import '../../components/NavigationStyles.css';
import '../../components/bodyStyles.css';
import StudentSidebar from '../../components/studentSidebar';
import React, { useState } from 'react';
import Axios from 'axios';

function ViewRegistration() {

  const [currentReg, setCurrentReg] = useState([]);

  const getRegistration = () => {
    Axios.get('http://localhost:3305/viewRegistration').then((response) => {
      console.log(response.data);
        setCurrentReg(response.data);
    }); 
  };

  return (
    <div className="Student">
      <div id='left'>
        <StudentSidebar />
    </div>

    <div className='main'>
      <div className='information' onChange={getRegistration}>
          <button onClick={getRegistration}>Click</button>
          <table className='dbResults'>
            
            <tbody>
            {currentReg.map((currentReg, CRN) => {
              return (<div key={currentReg.CRN}> 
                    <tr>
                      <td>{currentReg.StudentID}</td>
                      <td>{currentReg.CRN}</td>
                      <td>{currentReg.CourseID}</td>
                      <td>{currentReg.CourseName}</td>
                      <td>{currentReg.Instructor}</td>
                      <td>{currentReg.Semester}</td>
                    </tr>
                </div>);
            })};
            </tbody>
          </table>
        </div>
      </div>
    </div>    
  );
}

export default ViewRegistration;