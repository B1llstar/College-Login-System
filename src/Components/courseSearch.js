import React from 'react';
import '../../components/NavigationStyles.css';
import '../../components/bodyStyles.css';
import StudentSidebar from '../../components/studentSidebar';
import { useState } from 'react';
import Axios from 'axios';

function CourseSearch() {

    const [crn, setCrn] = useState([]);

    const insertTest = (value) => {
        Axios.post('http://localhost:3305/courseSearch', {
            crn: value
            
        }).then((response) => {
            setCrn(response.data);
            console.log(response.data);
        });
    };

    let crnInput = React.createRef();

    let crnClickHandler = (e) => {
        let value = crnInput.current.value;
        insertTest(value);
    }

    return (
        <div className="Student">
        <div id='left'>
            <StudentSidebar />
        </div>

        <div className='main' >
            <div className='information' >
            <h2>Please fill out at least one field:</h2>
                <label>CRN:</label>
                <input ref={crnInput} type="text"/>
                <button onClick={crnClickHandler}>SEARCH</button>
                <table className='dbResults'>
                    <tbody>
                    {crn.map((crn, CRN) => {
                        return ( 
                            <tr key={crn.CRN}>
                            <td>{crn.CRN}</td>
                            <td>{crn.CourseID}</td>
                            <td>{crn.CourseName}</td>
                            <td>{crn.Days}</td>
                            <td>{crn.Instructor}</td>
                            <td>{crn.Room}</td>
                            <td>{crn.Semester}</td>
                            <td>{crn.Time}</td>
                            </tr>
                            )})}
                    </tbody>
                </table>
                </div>
            </div>
        </div>    
    );
}

export default CourseSearch;