import "./App.css";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Student from './Pages/Student';
import Faculty from './Pages/Faculty';
import Admin from './Pages/Admin';
import ResearchStaff from './Pages/ResearchStaff';
import ErrorPage from './Pages/ErrorPage';
import { CourseSearch, ViewRegistration, RegisterCourse, DropCourse, 
    ViewHolds, ViewTranscript, DegreeAudit, ViewAdvisor } from './Pages/studentSections/studentSections';


function App(){
    return (
    <Router>
        <div>
        <Routes>
            
            {/* Landing Page Routes */}
            <Route path="/" element={<root />} /> 
            <Route path="/Student" element={<Student />} />
            <Route path="/Faculty" element={<Faculty />} />
            <Route path="/Admin" element={<Admin />} />
            <Route path="/ResearchStaff" element={<ResearchStaff />} />

            {/* Student Navigation Routes */}
            <Route path="/CourseSearch" element={<CourseSearch />} />
            <Route path="/ViewRegistration" element={<ViewRegistration />} />
            <Route path="/RegisterCourse" element={<RegisterCourse />} />
            <Route path="/DropCourse" element={<DropCourse />} />
            <Route path="/ViewHolds" element={<ViewHolds />} />
            <Route path="/ViewTranscript" element={<ViewTranscript />} />
            <Route path="/DegreeAudit" element={<DegreeAudit />} />
            <Route path="/ViewAdvisor" element={<ViewAdvisor />} />

            {/* Error Page Route */}
            <Route path="*" element={<ErrorPage />} />
        </Routes>
        </div>
    </Router>
    );
}

export default App;